// Test script to verify SMS webhook endpoint

async function testWebhook(message, fromNumber = '+1234567890') {
  console.log(`🧪 Testing SMS: "${message}" from ${fromNumber}`)
  
  // Simulate Twilio webhook data
  const formData = new URLSearchParams()
  formData.append('Body', message)
  formData.append('From', fromNumber)
  formData.append('To', '+15551234567')
  
  try {
    const response = await fetch('http://localhost:3002/api/webhook/sms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData
    })
    
    const responseText = await response.text()
    
    console.log(`Status: ${response.status}`)
    console.log(`Response: ${responseText}`)
    
    if (response.ok) {
      console.log('✅ Success!\n')
    } else {
      console.log('❌ Failed\n')
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message, '\n')
  }
}

async function runTests() {
  console.log('🧪 Testing Multiple SMS Messages...\n')
  
  const testMessages = [
    '25.99 target',
    '45 shell gas station', 
    '$12.75 mcdonalds',
    '150 amazon',
    '8.50 subway',
    '75.00 walmart'
  ]
  
  for (const message of testMessages) {
    await testWebhook(message)
    // Small delay between requests
    await new Promise(resolve => setTimeout(resolve, 500))
  }
  
  console.log('🎉 All tests completed! Check your dashboard at http://localhost:3002')
}

runTests()
