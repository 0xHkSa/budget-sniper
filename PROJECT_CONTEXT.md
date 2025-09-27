# Budget Sniper - Project Context & Chat History

## Project Overview
**Budget Sniper** - A simple SMS-based spending tracker for manual expense logging.

**Goal:** Build a lightweight app where users text expenses to a phone number, app parses amount + merchant, stores in database, shows analytics.

**Target Users:** People who want tight control over spending, lightweight, no fluff.

## Tech Stack
- **Frontend:** Next.js 15.5.3 + React 19 + TypeScript
- **Backend:** Next.js API Routes
- **Database:** Supabase (PostgreSQL)
- **SMS:** Twilio
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

## Current Status
✅ **Completed:**
- Next.js project initialized
- Dependencies installed (Supabase, Twilio, NextAuth)
- Environment config with validation (`src/config/env.ts`)
- TypeScript types defined (`src/types/env.ts`)
- Config exports (`src/config/index.ts`)

❌ **Still Need:**
- Supabase database schema
- Supabase client setup
- Main dashboard UI
- SMS webhook API
- SMS parsing logic
- Expenses CRUD API
- Twilio setup
- Testing

## Working Relationship
**User Role:** Manager & Final Decision Maker
- Makes all final decisions
- Approves each step before execution
- Wants step-by-step guidance, not one-shot solutions
- Learning mode - needs hand-holding

**AI Role:** Senior Dev & Code Executor
- Executes code based on user instructions
- Provides step-by-step guidance
- Explains what's happening
- **CRITICAL: Does NOT create, modify, or update ANY files without explicit user permission**
- **CRITICAL: Must ask for approval before making any changes to the codebase**
- **CRITICAL: User is the final decision maker on all file operations**

## Key Decisions Made
- Using Supabase for backend (not traditional database)
- Twilio for SMS integration
- NextAuth for authentication
- TypeScript for type safety
- Manual expense tracking (not automatic)
- Web interface first, mobile later

## Environment Variables Needed
```
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number
NEXTAUTH_URL=your_app_url
NEXTAUTH_SECRET=your_nextauth_secret
```

## Current Session Summary
**Session Date:** [Current Date]
**Focus:** Project setup and context preservation
**Accomplished:**
- ✅ Created comprehensive todo list (10 clear steps)
- ✅ Established working relationship boundaries
- ✅ Set up project context file for continuity
- ✅ Confirmed user wants step-by-step guidance, not one-shot solutions

**Key Learning:** User is Manager & Final Decision Maker, AI is Senior Dev & Code Executor. AI must ask permission before any file operations.

## Next Steps Priority
1. ✅ Create project context file (this file) - COMPLETED
2. **NEXT:** Set up Supabase database schema (create expenses table)
3. Create Supabase client configuration
4. Build main dashboard UI
5. Create SMS webhook API endpoint
6. Build SMS text parsing logic
7. Create expenses CRUD API endpoints
8. Set up Twilio account and phone number
9. Test SMS functionality end-to-end
10. Add basic spending analytics to dashboard

## Immediate Next Action
**Supabase Database Setup:**
- User has Supabase account but needs to create database schema
- Need to run SQL to create expenses table
- Need to set up Row Level Security
- Need to get project URL and API key for environment variables

## Learning Notes
- Environment config creates "safe dev environment" by validating all required variables exist before app starts
- TypeScript types prevent runtime errors from missing config
- Supabase provides PostgreSQL database with built-in auth
- Twilio handles SMS receiving and sending
- Next.js API routes handle backend logic
- **CRITICAL:** User wants to learn step-by-step, not have everything done for them

## Working Relationship Rules
- User makes all final decisions
- AI asks permission before any file operations
- AI provides step-by-step guidance
- User approves each step before execution
- Learning mode - AI explains what's happening

---
*Last updated: [Current Date]*
*Use this file to maintain context between chat sessions*
