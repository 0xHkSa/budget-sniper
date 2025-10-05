import { createClient } from '@supabase/supabase-js'
import { env } from '@/config/env'

// Create Supabase client
export const supabase = createClient(
  env.supabase.url,
  env.supabase.anonKey
)

// Database types
export interface Database {
  public: {
    Tables: {
      households: {
        Row: {
          id: string
          name: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          created_at?: string
        }
      }
      expenses: {
        Row: {
          id: string
          household_id: string
          amount: number
          merchant: string
          category: string | null
          date: string
          phone_number: string
          raw_message: string
          created_at: string
        }
        Insert: {
          id?: string
          household_id: string
          amount: number
          merchant: string
          category?: string | null
          date?: string
          phone_number: string
          raw_message: string
          created_at?: string
        }
        Update: {
          id?: string
          household_id?: string
          amount?: number
          merchant?: string
          category?: string | null
          date?: string
          phone_number?: string
          raw_message?: string
          created_at?: string
        }
      }
    }
  }
}
