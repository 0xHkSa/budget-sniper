'use client'

import { createClient } from '@supabase/supabase-js'
import { Database } from './supabase'
import { env } from '@/config/env'

// Create a Supabase client for client-side auth operations
export const createAuthClient = () => {
  return createClient<Database>(env.supabase.url, env.supabase.anonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    }
  })
}

// Sign up a new user
export async function signUp(email: string, password: string, householdName?: string) {
  const supabase = createAuthClient()
  
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        household_name: householdName || `${email.split('@')[0]}'s Household`
      }
    }
  })

  if (error) throw error
  return data
}

// Sign in an existing user
export async function signIn(email: string, password: string) {
  const supabase = createAuthClient()
  
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error) throw error
  return data
}

// Sign out the current user
export async function signOut() {
  const supabase = createAuthClient()
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}

// Get the current user
export async function getCurrentUser() {
  const supabase = createAuthClient()
  const { data: { user }, error } = await supabase.auth.getUser()
  
  if (error) throw error
  return user
}

// Get the current session
export async function getSession() {
  const supabase = createAuthClient()
  const { data: { session }, error } = await supabase.auth.getSession()
  
  if (error) throw error
  return session
}

