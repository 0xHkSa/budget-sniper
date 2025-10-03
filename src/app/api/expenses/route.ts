import { NextRequest, NextResponse } from 'next/server'
import { getMockExpenses, addMockExpense } from '@/lib/mock-data'
import { CreateExpenseRequest, ExpenseResponse, ExpensesResponse } from '@/types/expense'

// GET /api/expenses - Fetch all expenses
export async function GET(): Promise<NextResponse<ExpensesResponse>> {
  try {
    const expenses = getMockExpenses()
    
    return NextResponse.json({
      success: true,
      data: expenses
    })
  } catch (error) {
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
    
    // Create new expense
    const newExpense = addMockExpense({
      amount: body.amount,
      merchant: body.merchant,
      category: body.category || 'uncategorized',
      date: new Date().toISOString(),
      phone_number: body.phone_number,
      raw_message: body.raw_message
    })
    
    return NextResponse.json({
      success: true,
      data: newExpense
    }, { status: 201 })
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Failed to create expense'
    }, { status: 500 })
  }
}
