**SlipStream**
A simulation app for gig workers that models micro-sweeps, wallet balances, health-insurance coverage, and emergency claims.

**Features**
Adjustable simulation variables with linked dependent calculations
Micro-sweep deductions from gig payouts
Dynamic wallet, insurance-pool, earnings, and coverage calculations
Health Insurance Battery with responsive red, yellow, and green status colours
Non-negative input validation for all simulation variables
Automated work-history and instant-tech proof verification
Emergency claim eligibility based on verified proofs, a 3-day streak, and a one-claim-per-day limit
Home, Claim, and Activity views
Responsive mobile-style interface
**Claim Rules**
A claim is dispensed only when:

Both automated proof checks are verified.
The user has a 3-day streak.
The user has not already received a claim that day.
Successful claims display a confirmation message. Failed attempts display a relevant eligibility or daily-limit message.

**Tech Stack**
Next.js
React
TypeScript
Tailwind CSS
Lucide icons
Getting Started
npm install
npm run dev
Open http://localhost:3000 in your browser.

**Project Structure**
app/                 Application routes and global styles
components/          UI and simulation components
lib/simulation.ts    Simulation calculations and eligibility logic
**Purpose**
SlipStream demonstrates how small automated deductions from gig payouts can build short-term income protection and provide fast, rules-based emergency support for gig workers.
