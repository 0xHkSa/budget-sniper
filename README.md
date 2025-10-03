# Budget Sniper

A simple SMS-based spending tracker that lets you log expenses via SMS. Text your expenses to a phone number and see them tracked in real-time.

## Features

- 📱 SMS-based expense logging
- 💰 Automatic amount and merchant parsing
- 📊 Real-time dashboard
- 🔄 Manual expense entry
- 📈 Spending analytics

## Tech Stack

- **Frontend**: Next.js 15.5.3 with TypeScript
- **Backend**: Next.js API Routes
- **Database**: Supabase (PostgreSQL)
- **SMS**: Twilio
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

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

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/types/` - TypeScript interfaces and types
- `src/lib/` - Utility functions and business logic
- `src/app/api/` - Next.js API routes
- `src/app/` - Pages and components

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
