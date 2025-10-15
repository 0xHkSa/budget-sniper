// Household-related types

export interface Household {
  id: string
  name: string
  owner_id?: string
  created_at: string
}

export interface HouseholdMember {
  id: string
  household_id: string
  user_id: string
  role: 'owner' | 'admin' | 'member'
  joined_at: string
}

export interface CreateHouseholdRequest {
  name: string
  user_id: string
}

export interface HouseholdWithMembers extends Household {
  members: HouseholdMember[]
}

