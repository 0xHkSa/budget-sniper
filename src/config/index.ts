// Centralized configuration export
export { env } from './env'
export type { EnvironmentVariables } from '@/types/env'

// Re-export commonly used configurations
export const config = {
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isTest: process.env.NODE_ENV === 'test'
} as const
