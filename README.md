# Noventra Web Design Services

A new, standalone Next.js website project for Noventra Technologies. This project is generated from the supplied Noventra development brief; it does not reuse an existing website codebase.

## Stack
- Next.js App Router
- React + TypeScript
- Tailwind CSS configuration (custom visual styling in `app/globals.css`)
- Lucide icons

## Pages
- `/` Home
- `/about` About Noventra
- `/services` Web Design Services
- `/pricing` Pricing & Packages
- `/portfolio` Portfolio (clearly marked demo concepts)
- `/industries` Industries We Serve
- `/contact` Contact & Get a Quote

## Run locally
1. Install Node.js 20 or later.
2. Extract this project.
3. Run `npm install`.
4. Copy `.env.example` to `.env.local`.
5. Run `npm run dev`.
6. Open http://localhost:3000.

## Important launch configuration
- Update the sample email, phone number and WhatsApp number in `lib/site.ts`.
- Configure `NEXT_PUBLIC_ENQUIRY_ENDPOINT` to point to a real, secure server endpoint. The contact form deliberately does not show a success state when no endpoint is configured or when submission fails.
- Replace `https://www.example.com` in `app/layout.tsx` with the production domain.
- Add real portfolio projects only when approved; current portfolio entries are demo concepts.
- Add real testimonials only with customer permission.
- Review privacy notice, terms, cookie/analytics requirements and form retention before launch.

## Pricing
All package data is centralised in `lib/site.ts` under `packages`.
- Starter shows the requested KSh 15,000 starting price.
- Other tiers intentionally use quote-based labels until the exact October ICT reference prices and inclusions can be verified and Noventra approves its own final commercial offer.
- The October ICT page could not be retrieved during initial setup, so no competitor price or feature claim has been copied or invented.
- One-year hosting and free domain are subject to applicable promotion terms and domain availability.

## Before production
- Connect and test the enquiry endpoint.
- Add real business contact details and domain.
- Add real portfolio images and approved testimonials.
- Run `npm run build`.
- Configure hosting, HTTPS, analytics and search console.


## Confirmed business details and packages

- Calls and WhatsApp: +254 720 847 588
- Email currently entered: frediect@gmail.com (confirm whether `gmil.com` is intentional before launch).
- Website packages: Basic KSh 15,000; Standard KSh 25,000; Advanced quote-based.
- Social media marketing: Bronze KSh 25,500/month; Silver KSh 30,000/month; Gold KSh 80,500/month.
- Each Buy This button opens `/contact` with the selected package pre-filled.


## Visual assets
This version includes locally bundled SVG artwork in `public/images/` for the website-design packages, social-media packages and service cards. These assets are lightweight, scale cleanly on high-resolution screens and do not depend on third-party image hosting. They are illustrative design visuals, not screenshots or claims about completed client projects.

Package imagery and pricing are configured in `lib/site.ts`. Service-card imagery is configured in `app/services/page.tsx`.
