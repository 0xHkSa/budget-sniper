// Expense data types and interfaces
export interface Expense {
  id: string
  amount: number
  merchant: string
  category?: string
  date: string
  phone_number: string
  raw_message: string
  created_at: string
}

// For creating new expenses (without id and timestamps)
export interface CreateExpenseRequest {
  amount: number
  merchant: string
  category?: string
  phone_number: string
  raw_message: string
}

// For API responses
export interface ExpenseResponse {
  success: boolean
  data?: Expense
  error?: string
}

export interface ExpensesResponse {
  success: boolean
  data?: Expense[]
  error?: string
}
