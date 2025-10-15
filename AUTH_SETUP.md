# 🔐 Authentication Setup Guide

## What We Built

I've created a complete authentication system with Supabase Auth:

### ✅ Created Files:
1. **`src/app/sign-up/page.tsx`** - Beautiful sign-up form with household name input
2. **`src/app/sign-in/page.tsx`** - Sign-in form with email/password
3. **`src/lib/auth.ts`** - Auth helper functions (signUp, signIn, signOut, etc.)
4. **`src/types/household.ts`** - TypeScript types for households and members
5. **`src/app/api/auth/signup/route.ts`** - API endpoint to create household on sign-up
6. **`supabase-migration.sql`** - Database migration script (YOU NEED TO RUN THIS)

### ✅ Updated Files:
- **`src/lib/supabase.ts`** - Added `household_members` table types
- **`src/config/env.ts`** - Removed NextAuth config (using Supabase Auth instead)
- **`src/types/env.ts`** - Removed NextAuth types

---

## 🚀 Setup Instructions

### Step 1: Run Database Migration

**Go to your Supabase Dashboard:**
1. Open https://supabase.com/dashboard
2. Select your project
3. Click **SQL Editor** in the left sidebar
4. Click **New Query**
5. Open the file `supabase-migration.sql` in your project
6. Copy and paste the entire contents
7. Click **Run** (or press Cmd+Enter)

**What this does:**
- Adds `owner_id` column to `households` table
- Creates `household_members` table to link users to households
- Sets up Row Level Security (RLS) policies
- Creates indexes for better performance

### Step 2: Enable Email Auth in Supabase

**In your Supabase Dashboard:**
1. Go to **Authentication** → **Providers**
2. Make sure **Email** is enabled
3. Configure email settings:
   - Enable "Confirm email" (recommended for production)
   - For development, you can disable email confirmation temporarily

### Step 3: Update Your .env.local

You no longer need `NEXTAUTH_URL` and `NEXTAUTH_SECRET`. Your `.env.local` should look like:

```env
# Supabase
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key

# Twilio (for SMS)
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number
```

### Step 4: Test the Auth Flow

**1. Start your dev server:**
```bash
npm run dev
```

**2. Test Sign-Up:**
- Navigate to http://localhost:3000/sign-up
- Fill in:
  - Email (use a real email if email confirmation is enabled)
  - Household name (optional - will auto-generate from email)
  - Password (min 6 characters)
  - Confirm password
- Click "Create Account"
- You should see a success message and be redirected to sign-in

**3. Check your email:**
- If email confirmation is enabled, check your inbox
- Click the confirmation link

**4. Test Sign-In:**
- Navigate to http://localhost:3000/sign-in
- Enter your email and password
- Click "Sign In"
- You should be redirected to the dashboard (/)

**5. Verify in Supabase:**
- Go to **Authentication** → **Users** in Supabase dashboard
- You should see your new user
- Go to **Table Editor** → **households**
- You should see a new household created
- Go to **Table Editor** → **household_members**
- You should see the membership linking your user to the household

---

## 🔍 How It Works

### Sign-Up Flow:
```
1. User fills out sign-up form
   ↓
2. Call signUp() → Creates user in Supabase Auth
   ↓
3. Call /api/auth/signup → Creates household in database
   ↓
4. Link user to household in household_members table
   ↓
5. Show success message and redirect to sign-in
```

### Sign-In Flow:
```
1. User enters email/password
   ↓
2. Call signIn() → Authenticates with Supabase
   ↓
3. Session is created and stored in browser
   ↓
4. Redirect to dashboard
```

---

## 🛡️ Security Features

### Row Level Security (RLS):
- Users can only see households they're members of
- Users can only see expenses from their households
- Only household owners can delete members
- Only household owners can update/delete their household

### Policies Created:
- ✅ Users can view their households
- ✅ Users can create new households
- ✅ Owners can update/delete their households
- ✅ Users can view household members
- ✅ Users can view household expenses
- ✅ Users can create expenses for their households

---

## 📋 Next Steps

### Phase 2: Dashboard Protection
**Goal:** Protect the dashboard so only logged-in users can access it

**What to do:**
1. Add auth check to main dashboard (`src/app/page.tsx`)
2. Redirect to `/sign-in` if not authenticated
3. Fetch user's households on load
4. Filter expenses by user's households

### Phase 3: Household Invites
**Goal:** Allow users to invite others to their household

**What to build:**
1. Invite page with email input
2. Generate invite codes or links
3. Accept invite flow
4. List household members
5. Remove members (owner only)

### Phase 4: Multi-Household Support
**Goal:** Allow users to be members of multiple households

**What to build:**
1. Household switcher in dashboard header
2. Store "active household" in state
3. Filter expenses by active household
4. Show all households user is member of

---

## 🐛 Troubleshooting

### "Missing required fields" error on sign-up:
- Make sure you filled in email, password, and confirm password
- Check browser console for detailed error messages

### "Invalid email or password" on sign-in:
- Double-check your email and password
- If email confirmation is enabled, make sure you clicked the confirmation link
- Check Supabase dashboard → Authentication → Users to verify user exists

### "Failed to create household" error:
- Make sure you ran the database migration (`supabase-migration.sql`)
- Check Supabase dashboard → Table Editor to verify `household_members` table exists
- Check browser console and terminal for detailed error messages

### User created but no household:
- Check Supabase logs (Dashboard → Logs → API)
- Make sure the `/api/auth/signup` endpoint is being called
- Verify RLS policies are set up correctly

---

## 🎉 You're Ready!

Once you've completed the setup steps above, you'll have:
- ✅ Working sign-up and sign-in pages
- ✅ Automatic household creation on sign-up
- ✅ Secure authentication with Supabase
- ✅ Row Level Security protecting your data
- ✅ Foundation for multi-user households

**Next:** Let's protect the dashboard and make it fetch real data for the authenticated user's household!

