import { Expense } from '@/types/expense'

// Mock expense data for development and testing
export const mockExpenses: Expense[] = [
  // User 1 (You) - +1234567890
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
  },
  {
    id: '9',
    amount: 32.40,
    merchant: 'whole foods',
    category: 'food',
    date: '2024-01-11T10:15:00Z',
    phone_number: '+1234567890',
    raw_message: '32.40 whole foods',
    created_at: '2024-01-11T10:15:00Z'
  },
  {
    id: '10',
    amount: 18.75,
    merchant: 'chipotle',
    category: 'food',
    date: '2024-01-10T13:30:00Z',
    phone_number: '+1234567890',
    raw_message: '18.75 chipotle',
    created_at: '2024-01-10T13:30:00Z'
  },
  {
    id: '11',
    amount: 65.00,
    merchant: 'costco',
    category: 'shopping',
    date: '2024-01-10T09:45:00Z',
    phone_number: '+1234567890',
    raw_message: '65 costco',
    created_at: '2024-01-10T09:45:00Z'
  },
  {
    id: '12',
    amount: 38.50,
    merchant: 'chevron',
    category: 'gas',
    date: '2024-01-09T17:20:00Z',
    phone_number: '+1234567890',
    raw_message: '38.50 chevron',
    created_at: '2024-01-09T17:20:00Z'
  },
  {
    id: '13',
    amount: 22.80,
    merchant: 'pizza hut',
    category: 'food',
    date: '2024-01-09T19:00:00Z',
    phone_number: '+1234567890',
    raw_message: '22.80 pizza hut',
    created_at: '2024-01-09T19:00:00Z'
  },
  {
    id: '14',
    amount: 45.60,
    merchant: 'lyft',
    category: 'transportation',
    date: '2024-01-08T22:15:00Z',
    phone_number: '+1234567890',
    raw_message: '45.60 lyft',
    created_at: '2024-01-08T22:15:00Z'
  },
  {
    id: '15',
    amount: 125.00,
    merchant: 'best buy',
    category: 'shopping',
    date: '2024-01-08T15:30:00Z',
    phone_number: '+1234567890',
    raw_message: '125 best buy',
    created_at: '2024-01-08T15:30:00Z'
  },
  {
    id: '16',
    amount: 9.25,
    merchant: 'dunkin donuts',
    category: 'food',
    date: '2024-01-07T07:45:00Z',
    phone_number: '+1234567890',
    raw_message: '9.25 dunkin donuts',
    created_at: '2024-01-07T07:45:00Z'
  },
  {
    id: '17',
    amount: 55.00,
    merchant: 'bp gas',
    category: 'gas',
    date: '2024-01-07T14:20:00Z',
    phone_number: '+1234567890',
    raw_message: '55 bp gas',
    created_at: '2024-01-07T14:20:00Z'
  },
  {
    id: '18',
    amount: 28.90,
    merchant: 'safeway',
    category: 'food',
    date: '2024-01-06T16:10:00Z',
    phone_number: '+1234567890',
    raw_message: '28.90 safeway',
    created_at: '2024-01-06T16:10:00Z'
  },
  {
    id: '19',
    amount: 85.00,
    merchant: 'nike',
    category: 'shopping',
    date: '2024-01-06T12:00:00Z',
    phone_number: '+1234567890',
    raw_message: '85 nike',
    created_at: '2024-01-06T12:00:00Z'
  },
  {
    id: '20',
    amount: 15.00,
    merchant: 'bus fare',
    category: 'transportation',
    date: '2024-01-05T08:30:00Z',
    phone_number: '+1234567890',
    raw_message: '15 bus fare',
    created_at: '2024-01-05T08:30:00Z'
  },
  {
    id: '21',
    amount: 42.75,
    merchant: 'trader joes',
    category: 'food',
    date: '2024-01-05T11:45:00Z',
    phone_number: '+1234567890',
    raw_message: '42.75 trader joes',
    created_at: '2024-01-05T11:45:00Z'
  },
  {
    id: '22',
    amount: 67.50,
    merchant: 'home depot',
    category: 'shopping',
    date: '2024-01-04T14:15:00Z',
    phone_number: '+1234567890',
    raw_message: '67.50 home depot',
    created_at: '2024-01-04T14:15:00Z'
  },
  {
    id: '23',
    amount: 33.25,
    merchant: 'exxon',
    category: 'gas',
    date: '2024-01-04T18:30:00Z',
    phone_number: '+1234567890',
    raw_message: '33.25 exxon',
    created_at: '2024-01-04T18:30:00Z'
  },
  {
    id: '24',
    amount: 19.50,
    merchant: 'panera bread',
    category: 'food',
    date: '2024-01-03T12:30:00Z',
    phone_number: '+1234567890',
    raw_message: '19.50 panera bread',
    created_at: '2024-01-03T12:30:00Z'
  },
  {
    id: '25',
    amount: 95.00,
    merchant: 'apple store',
    category: 'shopping',
    date: '2024-01-03T16:45:00Z',
    phone_number: '+1234567890',
    raw_message: '95 apple store',
    created_at: '2024-01-03T16:45:00Z'
  },

  // User 2 (Girlfriend) - +1987654321
  {
    id: '26',
    amount: 22.50,
    merchant: 'coffee shop',
    category: 'food',
    date: '2024-01-15T09:15:00Z',
    phone_number: '+1987654321',
    raw_message: '22.50 coffee shop',
    created_at: '2024-01-15T09:15:00Z'
  },
  {
    id: '27',
    amount: 45.00,
    merchant: 'zara',
    category: 'shopping',
    date: '2024-01-14T15:30:00Z',
    phone_number: '+1987654321',
    raw_message: '45 zara',
    created_at: '2024-01-14T15:30:00Z'
  },
  {
    id: '28',
    amount: 38.75,
    merchant: 'shell gas',
    category: 'gas',
    date: '2024-01-14T08:45:00Z',
    phone_number: '+1987654321',
    raw_message: '38.75 shell gas',
    created_at: '2024-01-14T08:45:00Z'
  },
  {
    id: '29',
    amount: 18.25,
    merchant: 'sushi place',
    category: 'food',
    date: '2024-01-13T19:20:00Z',
    phone_number: '+1987654321',
    raw_message: '18.25 sushi place',
    created_at: '2024-01-13T19:20:00Z'
  },
  {
    id: '30',
    amount: 85.99,
    merchant: 'sephora',
    category: 'shopping',
    date: '2024-01-13T14:10:00Z',
    phone_number: '+1987654321',
    raw_message: '85.99 sephora',
    created_at: '2024-01-13T14:10:00Z'
  },
  {
    id: '31',
    amount: 12.80,
    merchant: 'jamba juice',
    category: 'food',
    date: '2024-01-12T10:30:00Z',
    phone_number: '+1987654321',
    raw_message: '12.80 jamba juice',
    created_at: '2024-01-12T10:30:00Z'
  },
  {
    id: '32',
    amount: 65.50,
    merchant: 'target',
    category: 'shopping',
    date: '2024-01-12T17:45:00Z',
    phone_number: '+1987654321',
    raw_message: '65.50 target',
    created_at: '2024-01-12T17:45:00Z'
  },
  {
    id: '33',
    amount: 28.00,
    merchant: 'lyft',
    category: 'transportation',
    date: '2024-01-11T21:00:00Z',
    phone_number: '+1987654321',
    raw_message: '28 lyft',
    created_at: '2024-01-11T21:00:00Z'
  },
  {
    id: '34',
    amount: 35.40,
    merchant: 'trader joes',
    category: 'food',
    date: '2024-01-11T11:20:00Z',
    phone_number: '+1987654321',
    raw_message: '35.40 trader joes',
    created_at: '2024-01-11T11:20:00Z'
  },
  {
    id: '35',
    amount: 15.75,
    merchant: 'pizza place',
    category: 'food',
    date: '2024-01-10T18:30:00Z',
    phone_number: '+1987654321',
    raw_message: '15.75 pizza place',
    created_at: '2024-01-10T18:30:00Z'
  },
  {
    id: '36',
    amount: 120.00,
    merchant: 'ulta',
    category: 'shopping',
    date: '2024-01-10T13:15:00Z',
    phone_number: '+1987654321',
    raw_message: '120 ulta',
    created_at: '2024-01-10T13:15:00Z'
  },
  {
    id: '37',
    amount: 42.25,
    merchant: 'chevron',
    category: 'gas',
    date: '2024-01-09T16:30:00Z',
    phone_number: '+1987654321',
    raw_message: '42.25 chevron',
    created_at: '2024-01-09T16:30:00Z'
  },
  {
    id: '38',
    amount: 25.60,
    merchant: 'chipotle',
    category: 'food',
    date: '2024-01-09T12:45:00Z',
    phone_number: '+1987654321',
    raw_message: '25.60 chipotle',
    created_at: '2024-01-09T12:45:00Z'
  },
  {
    id: '39',
    amount: 35.00,
    merchant: 'uber',
    category: 'transportation',
    date: '2024-01-08T20:15:00Z',
    phone_number: '+1987654321',
    raw_message: '35 uber',
    created_at: '2024-01-08T20:15:00Z'
  },
  {
    id: '40',
    amount: 78.99,
    merchant: 'nordstrom',
    category: 'shopping',
    date: '2024-01-08T14:00:00Z',
    phone_number: '+1987654321',
    raw_message: '78.99 nordstrom',
    created_at: '2024-01-08T14:00:00Z'
  },
  {
    id: '41',
    amount: 11.25,
    merchant: 'starbucks',
    category: 'food',
    date: '2024-01-07T08:00:00Z',
    phone_number: '+1987654321',
    raw_message: '11.25 starbucks',
    created_at: '2024-01-07T08:00:00Z'
  },
  {
    id: '42',
    amount: 55.75,
    merchant: 'bp gas',
    category: 'gas',
    date: '2024-01-07T15:45:00Z',
    phone_number: '+1987654321',
    raw_message: '55.75 bp gas',
    created_at: '2024-01-07T15:45:00Z'
  },
  {
    id: '43',
    amount: 32.90,
    merchant: 'whole foods',
    category: 'food',
    date: '2024-01-06T17:20:00Z',
    phone_number: '+1987654321',
    raw_message: '32.90 whole foods',
    created_at: '2024-01-06T17:20:00Z'
  },
  {
    id: '44',
    amount: 95.50,
    merchant: 'h&m',
    category: 'shopping',
    date: '2024-01-06T11:30:00Z',
    phone_number: '+1987654321',
    raw_message: '95.50 h&m',
    created_at: '2024-01-06T11:30:00Z'
  },
  {
    id: '45',
    amount: 20.00,
    merchant: 'bus fare',
    category: 'transportation',
    date: '2024-01-05T09:15:00Z',
    phone_number: '+1987654321',
    raw_message: '20 bus fare',
    created_at: '2024-01-05T09:15:00Z'
  },
  {
    id: '46',
    amount: 48.75,
    merchant: 'safeway',
    category: 'food',
    date: '2024-01-05T12:30:00Z',
    phone_number: '+1987654321',
    raw_message: '48.75 safeway',
    created_at: '2024-01-05T12:30:00Z'
  },
  {
    id: '47',
    amount: 72.25,
    merchant: 'macy\'s',
    category: 'shopping',
    date: '2024-01-04T15:45:00Z',
    phone_number: '+1987654321',
    raw_message: '72.25 macys',
    created_at: '2024-01-04T15:45:00Z'
  },
  {
    id: '48',
    amount: 37.50,
    merchant: 'exxon',
    category: 'gas',
    date: '2024-01-04T19:00:00Z',
    phone_number: '+1987654321',
    raw_message: '37.50 exxon',
    created_at: '2024-01-04T19:00:00Z'
  },
  {
    id: '49',
    amount: 21.80,
    merchant: 'panera bread',
    category: 'food',
    date: '2024-01-03T13:15:00Z',
    phone_number: '+1987654321',
    raw_message: '21.80 panera bread',
    created_at: '2024-01-03T13:15:00Z'
  },
  {
    id: '50',
    amount: 125.99,
    merchant: 'anthropologie',
    category: 'shopping',
    date: '2024-01-03T17:30:00Z',
    phone_number: '+1987654321',
    raw_message: '125.99 anthropologie',
    created_at: '2024-01-03T17:30:00Z'
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

// Helper function to get expenses by user (phone number)
export function getMockExpensesByUser(phoneNumber: string): Expense[] {
  return mockExpenses.filter(expense => expense.phone_number === phoneNumber)
}

// Helper function to get all unique users
export function getMockUsers(): Array<{phoneNumber: string, name: string}> {
  const uniquePhoneNumbers = [...new Set(mockExpenses.map(expense => expense.phone_number))]
  
  return uniquePhoneNumbers.map(phoneNumber => {
    // Map phone numbers to user names for display
    switch (phoneNumber) {
      case '+1234567890':
        return { phoneNumber, name: 'You' }
      case '+1987654321':
        return { phoneNumber, name: 'Sarah' }
      default:
        return { phoneNumber, name: 'Unknown User' }
    }
  })
}
