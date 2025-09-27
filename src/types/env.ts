// Environment variable type definitions
export interface EnvironmentVariables {
  // Supabase Configuration
  SUPABASE_URL: string
  SUPABASE_ANON_KEY: string
  
  // Twilio Configuration
  TWILIO_ACCOUNT_SID: string
  TWILIO_AUTH_TOKEN: string
  TWILIO_PHONE_NUMBER: string
  
  // Next.js Configuration
  NEXTAUTH_URL: string
  NEXTAUTH_SECRET: string
  
  // Development Configuration
  NODE_ENV: 'development' | 'production' | 'test'
}

// Type for process.env with our specific variables
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface ProcessEnv extends EnvironmentVariables {}
  }
}
