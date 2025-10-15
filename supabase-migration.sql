-- =====================================================
-- Budget Sniper: Authentication & Household Management
-- Migration to add household_members table
-- =====================================================

-- 1. Add owner_id to households table (if not exists)
ALTER TABLE households 
ADD COLUMN IF NOT EXISTS owner_id UUID REFERENCES auth.users(id);

-- 2. Create household_members table
CREATE TABLE IF NOT EXISTS household_members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  household_id UUID NOT NULL REFERENCES households(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT DEFAULT 'member' CHECK (role IN ('owner', 'admin', 'member')),
  joined_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(household_id, user_id)
);

-- 3. Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_household_members_household_id ON household_members(household_id);
CREATE INDEX IF NOT EXISTS idx_household_members_user_id ON household_members(user_id);
CREATE INDEX IF NOT EXISTS idx_households_owner_id ON households(owner_id);

-- 4. Enable Row Level Security (RLS)
ALTER TABLE household_members ENABLE ROW LEVEL SECURITY;

-- 5. RLS Policies for household_members
-- Users can view household members if they are a member of that household
CREATE POLICY "Users can view household members of their households" 
ON household_members FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM household_members hm 
    WHERE hm.household_id = household_members.household_id 
    AND hm.user_id = auth.uid()
  )
);

-- Users can insert themselves into a household (for invites - will be restricted later)
CREATE POLICY "Users can join households" 
ON household_members FOR INSERT 
WITH CHECK (user_id = auth.uid());

-- Only owners can delete members from a household
CREATE POLICY "Owners can remove household members" 
ON household_members FOR DELETE 
USING (
  EXISTS (
    SELECT 1 FROM household_members hm 
    WHERE hm.household_id = household_members.household_id 
    AND hm.user_id = auth.uid() 
    AND hm.role = 'owner'
  )
);

-- 6. Update households RLS policies
-- Users can only view households they are members of
DROP POLICY IF EXISTS "Users can view their households" ON households;
CREATE POLICY "Users can view their households" 
ON households FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM household_members hm 
    WHERE hm.household_id = households.id 
    AND hm.user_id = auth.uid()
  )
);

-- Users can create households (will auto-add them as owner via trigger or app logic)
DROP POLICY IF EXISTS "Users can create households" ON households;
CREATE POLICY "Users can create households" 
ON households FOR INSERT 
WITH CHECK (auth.uid() IS NOT NULL);

-- Only owners can update their households
DROP POLICY IF EXISTS "Owners can update their households" ON households;
CREATE POLICY "Owners can update their households" 
ON households FOR UPDATE 
USING (owner_id = auth.uid());

-- Only owners can delete their households
DROP POLICY IF EXISTS "Owners can delete their households" ON households;
CREATE POLICY "Owners can delete their households" 
ON households FOR DELETE 
USING (owner_id = auth.uid());

-- 7. Update expenses RLS policies to work with household_members
DROP POLICY IF EXISTS "Users can view household expenses" ON expenses;
CREATE POLICY "Users can view household expenses" 
ON expenses FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM household_members hm 
    WHERE hm.household_id = expenses.household_id 
    AND hm.user_id = auth.uid()
  )
);

DROP POLICY IF EXISTS "Users can create expenses for their households" ON expenses;
CREATE POLICY "Users can create expenses for their households" 
ON expenses FOR INSERT 
WITH CHECK (
  EXISTS (
    SELECT 1 FROM household_members hm 
    WHERE hm.household_id = expenses.household_id 
    AND hm.user_id = auth.uid()
  )
);

DROP POLICY IF EXISTS "Users can update expenses in their households" ON expenses;
CREATE POLICY "Users can update expenses in their households" 
ON expenses FOR UPDATE 
USING (
  EXISTS (
    SELECT 1 FROM household_members hm 
    WHERE hm.household_id = expenses.household_id 
    AND hm.user_id = auth.uid()
  )
);

DROP POLICY IF EXISTS "Users can delete expenses in their households" ON expenses;
CREATE POLICY "Users can delete expenses in their households" 
ON expenses FOR DELETE 
USING (
  EXISTS (
    SELECT 1 FROM household_members hm 
    WHERE hm.household_id = expenses.household_id 
    AND hm.user_id = auth.uid()
  )
);

-- =====================================================
-- Migration Complete! 🚀
-- =====================================================
-- Next steps:
-- 1. Go to your Supabase dashboard
-- 2. Navigate to SQL Editor
-- 3. Paste and run this entire script
-- 4. Test sign-up and sign-in flows
-- =====================================================

