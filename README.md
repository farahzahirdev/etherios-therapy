# Etherios Therapy — Spravato® Landing Page

Conversion-focused landing page for **Etherios Therapy** (Orem, UT), built to generate Spravato® (esketamine) inquiries.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Lucide icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## GHL embeds

Form and calendar widgets are stubbed until IDs are provided. Update `src/content/site.ts`:

- **Form:** `Spravato: New Web Inquiry + Params` → `site.ghl.inquiryForm`
- **Calendar:** `Book a free 10 minute consultation` → `site.ghl.calendar`

## Primary CTAs

- **Top right / book section:** Book a Free Consultation (`/#book-consult`)
- **Hero + throughout:** Inquiry form (`/#inquiry`)

## Brand

Brand colors from the Etherios logo: blue `#3D89E8`, purple `#743B93`, spark `#8EC5F5`. Typography: Josefin Sans + Pontano Sans, plus clinic photography and Spravato imagery from [etheriostherapy.com](https://www.etheriostherapy.com/).
