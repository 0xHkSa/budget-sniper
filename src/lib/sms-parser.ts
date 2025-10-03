// SMS parsing logic for extracting amount and merchant from text messages

export interface ParsedSMS {
  amount: number
  merchant: string
  success: boolean
  error?: string
}

/**
 * Parses SMS text to extract amount and merchant
 * Supports formats like:
 * - "15.50 starbucks"
 * - "$15.50 starbucks" 
 * - "starbucks 15.50"
 * - "starbucks $15.50"
 * - "15 starbucks"
 * - "$15 starbucks"
 */
export function parseSMS(text: string): ParsedSMS {
  try {
    // Clean the input text
    const cleanText = text.trim().toLowerCase()
    
    if (!cleanText) {
      return {
        amount: 0,
        merchant: '',
        success: false,
        error: 'Empty message'
      }
    }
    
    // Regular expression to find amount (with optional $ sign)
    const amountRegex = /\$?(\d+(?:\.\d{1,2})?)/g
    const amountMatches = cleanText.match(amountRegex)
    
    if (!amountMatches || amountMatches.length === 0) {
      return {
        amount: 0,
        merchant: '',
        success: false,
        error: 'No amount found in message'
      }
    }
    
    // Get the first (and usually only) amount
    const amountText = amountMatches[0].replace('$', '')
    const amount = parseFloat(amountText)
    
    if (isNaN(amount) || amount <= 0) {
      return {
        amount: 0,
        merchant: '',
        success: false,
        error: 'Invalid amount'
      }
    }
    
    // Extract merchant by removing the amount from the text
    let merchant = cleanText
      .replace(amountRegex, '') // Remove amount
      .replace(/\s+/g, ' ') // Replace multiple spaces with single space
      .trim()
    
    if (!merchant) {
      return {
        amount: 0,
        merchant: '',
        success: false,
        error: 'No merchant found in message'
      }
    }
    
    return {
      amount,
      merchant,
      success: true
    }
    
  } catch (error) {
    return {
      amount: 0,
      merchant: '',
      success: false,
      error: 'Failed to parse message'
    }
  }
}

/**
 * Test function to validate SMS parsing with different formats
 * This can be used for testing during development
 */
export function testSMSParsing(): void {
  const testCases = [
    '15.50 starbucks',
    '$15.50 starbucks',
    'starbucks 15.50',
    'starbucks $15.50',
    '15 starbucks',
    '$15 starbucks',
    '89.99 target',
    '45 shell gas station',
    '12.75 mcdonalds'
  ]
  
  console.log('SMS Parsing Test Results:')
  testCases.forEach(testCase => {
    const result = parseSMS(testCase)
    console.log(`"${testCase}" → Amount: $${result.amount}, Merchant: "${result.merchant}", Success: ${result.success}`)
  })
}
