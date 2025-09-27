// Environment variable validation and configuration
import { EnvironmentVariables } from '@/types/env'

// Required environment variables
const requiredEnvVars: (keyof EnvironmentVariables)[] = [
  'SUPABASE_URL',
  'SUPABASE_ANON_KEY',
  'TWILIO_ACCOUNT_SID',
  'TWILIO_AUTH_TOKEN',
  'TWILIO_PHONE_NUMBER',
  'NEXTAUTH_URL',
  'NEXTAUTH_SECRET'
]

// Validate that all required environment variables are present
function validateEnvironment(): void {
  const missing: string[] = []
  
  for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
      missing.push(envVar)
    }
  }
  
  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}\n` +
      'Please check your .env.local file and ensure all required variables are set.'
    )
  }
}

// Validate environment variables on module load
validateEnvironment()

// Export validated environment configuration
export const env = {
  supabase: {
    url: process.env.SUPABASE_URL!,
    anonKey: process.env.SUPABASE_ANON_KEY!
  },
  twilio: {
    accountSid: process.env.TWILIO_ACCOUNT_SID!,
    authToken: process.env.TWILIO_AUTH_TOKEN!,
    phoneNumber: process.env.TWILIO_PHONE_NUMBER!
  },
  nextauth: {
    url: process.env.NEXTAUTH_URL!,
    secret: process.env.NEXTAUTH_SECRET!
  },
  nodeEnv: process.env.NODE_ENV as EnvironmentVariables['NODE_ENV']
} as const
