# Budget Sniper

A household SMS-based spending tracker that lets you log expenses via SMS. Text your expenses to a phone number and see them tracked in real-time with beautiful analytics.

## Features

- 📱 SMS-based expense logging
- 💰 Automatic amount and merchant parsing
- 📊 Real-time dashboard with charts
- 🏠 Household expense tracking
- 📈 Spending analytics (pie charts, line graphs)
- 🌙 Dark/light mode toggle
- 📱 Responsive design

## Tech Stack

- **Frontend**: Next.js 15.5.3 + React 19 + TypeScript
- **Backend**: Next.js API Routes
- **Database**: Supabase (PostgreSQL)
- **SMS**: Twilio
- **Styling**: Tailwind CSS + shadcn/ui
- **Charts**: Recharts
- **Deployment**: Vercel

## Current Status ✅

### Completed Features:
- ✅ **Full-stack dashboard** with real data integration
- ✅ **Beautiful charts** (pie chart + line chart) with 25+ mock expenses
- ✅ **Dark/light mode** with professional black/white theme
- ✅ **Supabase integration** - Real database connection
- ✅ **SMS parsing logic** - Extracts amount + merchant from text
- ✅ **API endpoints** - GET/POST expenses with proper error handling
- ✅ **SMS webhook** - Ready for Twilio integration
- ✅ **Responsive design** - Works on desktop and mobile

### Database Schema:
```sql
-- Households table
CREATE TABLE households (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Expenses table
CREATE TABLE expenses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  household_id UUID REFERENCES households(id),
  amount DECIMAL(10,2) NOT NULL,
  merchant TEXT NOT NULL,
  category TEXT,
  date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  phone_number TEXT NOT NULL,
  raw_message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### API Endpoints:
- `GET /api/expenses` - Fetch all expenses from database
- `POST /api/expenses` - Create new expense
- `POST /api/webhook/sms` - Twilio SMS webhook (ready for testing)

## Next Steps 🚀

### Immediate (When Twilio Account Verified):
1. **Buy Twilio phone number** (~$1/month)
2. **Configure webhook URL** in Twilio console
3. **Test SMS flow** - Text → Database → Dashboard
4. **Deploy to Vercel** for live testing

### Future Enhancements:
- **User authentication** with Supabase Auth
- **Household management** (invite users, multiple households)
- **AI categorization** (OpenAI API for smart category detection)
- **Advanced analytics** (monthly trends, budget alerts)
- **Mobile app** (React Native or PWA)

## Development Learning Notes

### 📚 IMPORTANT: Study SMS Parser Logic (`src/lib/sms-parser.ts`)
**Key concepts to review:**
- Regular expressions (`/\$?(\d+(?:\.\d{1,2})?)/g`)
- String manipulation methods (`replace`, `trim`, `match`)
- Error handling patterns
- TypeScript interfaces and return types
- Input validation and sanitization
- Test-driven development patterns

**Why this matters:** These are fundamental skills every developer needs for text processing, data validation, and API development.

## Getting Started

1. **Install dependencies:**
```bash
npm install
```

2. **Set up environment variables** (`.env.local`):
```env
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
```

3. **Run development server:**
```bash
npm run dev
```

4. **Open [http://localhost:3000](http://localhost:3000)** to see the dashboard

## Project Structure

- `src/types/` - TypeScript interfaces and types
- `src/lib/` - Utility functions and business logic
- `src/app/api/` - Next.js API routes
- `src/app/` - Pages and components
- `src/components/ui/` - shadcn/ui components

## Architecture Overview

```
SMS → Twilio → Webhook → Parse → Database → Dashboard
  ↓
User texts "15.50 starbucks" → Parsed → Saved → Charts update
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Twilio SMS API](https://www.twilio.com/docs/sms)
- [shadcn/ui Components](https://ui.shadcn.com/)

---
*Last updated: [Current Date] - Ready for Twilio phone number testing*
