import { NextRequest, NextResponse } from 'next/server'
import { parseSMS } from '@/lib/sms-parser'
import { addMockExpense } from '@/lib/mock-data'

// POST /api/webhook/sms - Twilio webhook endpoint
export async function POST(request: NextRequest) {
  try {
    // Parse the form data from Twilio
    const formData = await request.formData()
    
    // Extract SMS data from Twilio webhook
    const messageBody = formData.get('Body') as string
    const fromNumber = formData.get('From') as string
    const toNumber = formData.get('To') as string
    
    console.log('SMS received:', { messageBody, fromNumber, toNumber })
    
    // Validate required fields
    if (!messageBody || !fromNumber) {
      console.error('Missing required SMS data')
      return new Response('Missing required data', { status: 400 })
    }
    
    // Parse the SMS text to extract amount and merchant
    const parsed = parseSMS(messageBody)
    
    if (!parsed.success) {
      console.error('Failed to parse SMS:', parsed.error)
      return new Response(`Failed to parse message: ${parsed.error}`, { status: 400 })
    }
    
    // TEMPORARY: Use mock data for testing
    const newExpense = addMockExpense({
      amount: parsed.amount,
      merchant: parsed.merchant,
      category: 'uncategorized',
      phone_number: fromNumber,
      raw_message: messageBody,
      date: new Date().toISOString()
    })
    
    console.log('Expense saved:', newExpense)
    
    // Send confirmation SMS back to user
    const response = new Response()
    response.headers.set('Content-Type', 'text/xml')
    
    const twimlResponse = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Message>✅ Added: $${parsed.amount.toFixed(2)} at ${parsed.merchant}</Message>
</Response>`
    
    return new Response(twimlResponse, {
      headers: { 'Content-Type': 'text/xml' }
    })
    
  } catch (error) {
    console.error('SMS webhook error:', error)
    return new Response('Internal server error', { status: 500 })
  }
}
