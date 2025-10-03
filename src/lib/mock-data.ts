import { Expense } from '@/types/expense'

// Mock expense data for development and testing
export const mockExpenses: Expense[] = [
  {
    id: '1',
    amount: 15.50,
    merchant: 'starbucks',
    category: 'food',
    date: '2024-01-15T08:30:00Z',
    phone_number: '+1234567890',
    raw_message: '15.50 starbucks',
    created_at: '2024-01-15T08:30:00Z'
  },
  {
    id: '2',
    amount: 89.99,
    merchant: 'target',
    category: 'shopping',
    date: '2024-01-14T14:20:00Z',
    phone_number: '+1234567890',
    raw_message: '89.99 target',
    created_at: '2024-01-14T14:20:00Z'
  },
  {
    id: '3',
    amount: 45.00,
    merchant: 'shell gas station',
    category: 'gas',
    date: '2024-01-14T07:15:00Z',
    phone_number: '+1234567890',
    raw_message: '45 shell gas station',
    created_at: '2024-01-14T07:15:00Z'
  },
  {
    id: '4',
    amount: 12.75,
    merchant: 'mcdonalds',
    category: 'food',
    date: '2024-01-13T12:45:00Z',
    phone_number: '+1234567890',
    raw_message: '12.75 mcdonalds',
    created_at: '2024-01-13T12:45:00Z'
  },
  {
    id: '5',
    amount: 150.00,
    merchant: 'amazon',
    category: 'shopping',
    date: '2024-01-13T20:30:00Z',
    phone_number: '+1234567890',
    raw_message: '150 amazon',
    created_at: '2024-01-13T20:30:00Z'
  },
  {
    id: '6',
    amount: 8.50,
    merchant: 'subway',
    category: 'food',
    date: '2024-01-12T11:20:00Z',
    phone_number: '+1234567890',
    raw_message: '8.50 subway',
    created_at: '2024-01-12T11:20:00Z'
  },
  {
    id: '7',
    amount: 75.00,
    merchant: 'walmart',
    category: 'shopping',
    date: '2024-01-12T16:00:00Z',
    phone_number: '+1234567890',
    raw_message: '75 walmart',
    created_at: '2024-01-12T16:00:00Z'
  },
  {
    id: '8',
    amount: 25.00,
    merchant: 'uber',
    category: 'transportation',
    date: '2024-01-11T19:45:00Z',
    phone_number: '+1234567890',
    raw_message: '25 uber',
    created_at: '2024-01-11T19:45:00Z'
  }
]

// Helper function to get expenses (simulates database query)
export function getMockExpenses(): Expense[] {
  return mockExpenses
}

// Helper function to add new expense (simulates database insert)
export function addMockExpense(expense: Omit<Expense, 'id' | 'created_at'>): Expense {
  const newExpense: Expense = {
    ...expense,
    id: (mockExpenses.length + 1).toString(),
    created_at: new Date().toISOString()
  }
  mockExpenses.push(newExpense)
  return newExpense
}
