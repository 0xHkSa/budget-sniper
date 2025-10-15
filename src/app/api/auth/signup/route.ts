import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

interface SignUpRequest {
  email: string
  household_name: string
}

interface SignUpResponse {
  success: boolean
  data?: {
    household_id: string
    household_name: string
  }
  error?: string
}

// POST /api/auth/signup - Create household for new user
export async function POST(request: NextRequest): Promise<NextResponse<SignUpResponse>> {
  try {
    const body: SignUpRequest = await request.json()

    // Validate required fields
    if (!body.email || !body.household_name) {
      return NextResponse.json({
        success: false,
        error: 'Missing required fields: email, household_name'
      }, { status: 400 })
    }

    // Get the user by email from Supabase Auth
    const { data: { users }, error: usersError } = await supabase.auth.admin.listUsers()
    
    if (usersError) {
      console.error('Error fetching users:', usersError)
      // Don't fail - user might not be created yet, will be handled by trigger or later
    }

    const user = users?.find(u => u.email === body.email)

    if (!user) {
      // User not found yet - this is okay, they just signed up
      // We'll create the household with a placeholder and update later via database trigger
      console.log('User not found in auth system yet, will be linked later')
    }

    // Create household
    const { data: household, error: householdError } = await supabase
      .from('households')
      .insert({
        name: body.household_name,
        owner_id: user?.id || null
      })
      .select()
      .single()

    if (householdError) {
      console.error('Error creating household:', householdError)
      throw new Error('Failed to create household')
    }

    // If user exists, create household membership
    if (user && household) {
      const { error: memberError } = await supabase
        .from('household_members')
        .insert({
          household_id: household.id,
          user_id: user.id,
          role: 'owner'
        })

      if (memberError) {
        console.error('Error creating household membership:', memberError)
        // Don't throw - household is created, membership can be added later
      }
    }

    return NextResponse.json({
      success: true,
      data: {
        household_id: household.id,
        household_name: household.name
      }
    }, { status: 201 })

  } catch (error) {
    console.error('Error in signup:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to complete signup process'
    }, { status: 500 })
  }
}

