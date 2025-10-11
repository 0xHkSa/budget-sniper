// Test SMS parsing logic
const { parseSMS } = require('./src/lib/sms-parser.ts')

// Test cases
const testMessages = [
  '15.50 starbucks',
  '25.99 target', 
  '45 shell gas station',
  '$12.75 mcdonalds',
  '150 amazon',
  '8.50 subway'
]

console.log('🧪 Testing SMS Parser...\n')

testMessages.forEach((message, index) => {
  try {
    const result = parseSMS(message)
    console.log(`Test ${index + 1}: "${message}"`)
    console.log(`  ✅ Amount: $${result.amount}`)
    console.log(`  ✅ Merchant: ${result.merchant}`)
    console.log(`  ✅ Success: ${result.success}\n`)
  } catch (error) {
    console.log(`Test ${index + 1}: "${message}"`)
    console.log(`  ❌ Error: ${error.message}\n`)
  }
})
