# SlipStream

SlipStream is a prototype concept for income protection for gig workers. It explores how small deductions from variable payouts could support a wallet, an insurance pool, and rules-based emergency assistance.

**Live app:** https://slipstream-roan.vercel.app  
**Repository:** https://github.com/makamsrujan/Slipstream

## Tech Stack

### Deployed application (observed / inferred)

- **Frontend:** Next.js + React
- **Styling:** Tailwind CSS appears likely, but has not been confirmed from the deployed source
- **Hosting:** Vercel
- **Analytics:** Vercel Web Analytics
- **Backend/API:** No obvious custom backend or API was exposed during inspection. The app appears to be primarily client-side, with Vercel providing hosting and analytics.

These details describe the deployed app as observed; some framework and styling details are inferred and should be verified against its source code.

### Code currently in this repository

The checked-in repository currently contains a lightweight static page built with:

- **HTML5** — page structure and semantic content
- **CSS3** — layout, responsive styling, visual design, and media queries
- **JavaScript (vanilla)** — client-side interactions, animated statistic counters, and dynamic footer year
- **Vite 5** — local development server and production build tooling

> **Implementation note:** The deployed Vercel app and the code currently checked into this repository do not appear to match. The repository does not currently contain a Next.js/React/Tailwind app or the simulation modules described by the product concept. Keep these stacks separate unless the deployed app's source is synced into this repository.

## Features in This Repository

- Responsive portfolio-style single-page layout
- Navigation links to About, Stack, Projects, and Contact sections
- Hero section with animated statistic counters
- Responsive cards and technology lists
- Contact link and dynamically updated footer year
- Mobile and tablet layout breakpoints

## Getting Started

### Prerequisites

- Node.js and npm

### Run locally

```bash
git clone https://github.com/makamsrujan/Slipstream.git
cd Slipstream
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

### Build for production

```bash
npm run build
npm run preview
```

## Architecture

Architecture documentation, including current component flow, build/deployment flow, and a clearly separated conceptual design for the future insurance platform, is available in [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

## Project Structure

```text
Slipstream/
├── index.html    # Page structure and content
├── styles.css    # Responsive styling
├── script.js     # Small client-side interactions
├── package.json  # Vite scripts and development dependency
└── LICENSE
```

## Deployment

The live app is hosted on Vercel. The Vite production build is generated with `npm run build`.

## Purpose

SlipStream's original product idea focuses on workers whose earnings can vary from day to day. The concept explores how micro-sweeps and clear eligibility rules could help provide short-term financial support. The currently checked-in code is a portfolio-style page, so the product simulation features should only be listed here once their implementation is present in this repository.

## License

This project is distributed under the MIT License. See [LICENSE](LICENSE) for details.
