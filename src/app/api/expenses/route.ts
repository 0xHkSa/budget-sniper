import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { getMockExpenses, addMockExpense } from '@/lib/mock-data'
import { CreateExpenseRequest, ExpenseResponse, ExpensesResponse } from '@/types/expense'

// GET /api/expenses - Fetch all expenses
export async function GET(): Promise<NextResponse<ExpensesResponse>> {
  try {
    // TEMPORARY: Use mock data until Twilio is set up
    const expenses = getMockExpenses()
    
    return NextResponse.json({
      success: true,
      data: expenses
    })

    // TODO: Uncomment when ready to use real database
    /*
    // Get the first household ID (for now, we'll use the test household)
    const { data: households } = await supabase
      .from('households')
      .select('id')
      .limit(1)

    if (!households || households.length === 0) {
      return NextResponse.json({
        success: false,
        error: 'No household found'
      }, { status: 404 })
    }

    // Fetch expenses for this household
    const { data: expenses, error } = await supabase
      .from('expenses')
      .select('*')
      .eq('household_id', households[0].id)
      .order('created_at', { ascending: false })

    if (error) {
      throw error
    }

    return NextResponse.json({
      success: true,
      data: expenses || []
    })
    */
  } catch (error) {
    console.error('Error fetching expenses:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch expenses'
    }, { status: 500 })
  }
}

// POST /api/expenses - Create a new expense
export async function POST(request: NextRequest): Promise<NextResponse<ExpenseResponse>> {
  try {
    const body: CreateExpenseRequest = await request.json()

    // Validate required fields
    if (!body.amount || !body.merchant || !body.phone_number || !body.raw_message) {
      return NextResponse.json({
        success: false,
        error: 'Missing required fields: amount, merchant, phone_number, raw_message'
      }, { status: 400 })
    }

    // TEMPORARY: Use mock data until Twilio is set up
    const newExpense = addMockExpense({
      amount: body.amount,
      merchant: body.merchant,
      category: body.category || 'uncategorized',
      phone_number: body.phone_number,
      raw_message: body.raw_message,
      date: new Date().toISOString()
    })

    return NextResponse.json({
      success: true,
      data: newExpense
    }, { status: 201 })

    // TODO: Uncomment when ready to use real database
    /*
    // Get the first household ID (for now, we'll use the test household)
    const { data: households } = await supabase
      .from('households')
      .select('id')
      .limit(1)

    if (!households || households.length === 0) {
      return NextResponse.json({
        success: false,
        error: 'No household found'
      }, { status: 404 })
    }

    // Create new expense in database
    const { data: newExpense, error } = await supabase
      .from('expenses')
      .insert({
        household_id: households[0].id,
        amount: body.amount,
        merchant: body.merchant,
        category: body.category || 'uncategorized',
        phone_number: body.phone_number,
        raw_message: body.raw_message
      })
      .select()
      .single()

    if (error) {
      throw error
    }

    return NextResponse.json({
      success: true,
      data: newExpense
    }, { status: 201 })
    */
  } catch (error) {
    console.error('Error creating expense:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to create expense'
    }, { status: 500 })
  }
}
