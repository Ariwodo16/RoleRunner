# RoleRunner - Job Search Execution Service

A modern, conversion-focused marketing website for RoleRunner, a job search outsourcing company with a fun Road Runner (desert/speed) theme.

## Features

- **Modern Design**: Desert-themed gradient backgrounds, speed lines, and Road Runner-inspired aesthetics
- **Fully Responsive**: Mobile-first design that works beautifully on all devices
- **Interactive Components**: Animated hero section, FAQ accordion, pricing cards, and more
- **Application Form**: Complete intake form with validation
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Performance**: Built with Next.js 14 and optimized for speed

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom desert theme colors
- **Typography**: Outfit (display) and DM Sans (body) from Google Fonts
- **Language**: TypeScript
- **Icons**: Heroicons (SVG)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone or download this repository

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
rolerunner/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── contact/
│   │   └── page.tsx          # Contact form page
│   ├── privacy/
│   │   └── page.tsx          # Privacy policy
│   ├── terms/
│   │   └── page.tsx          # Terms of service
│   ├── globals.css           # Global styles & custom animations
│   ├── layout.tsx            # Root layout with fonts
│   └── page.tsx              # Homepage with all sections
├── components/
│   ├── Button.tsx            # Reusable button component
│   ├── FAQAccordion.tsx      # FAQ accordion component
│   ├── FeatureCard.tsx       # Feature card component
│   ├── Footer.tsx            # Site footer
│   ├── Navigation.tsx        # Sticky navigation header
│   ├── PricingCard.tsx       # Pricing tier card
│   └── StepCard.tsx          # Process step card
├── public/                   # Static assets (currently empty)
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies

```

## Key Pages

### Homepage (`/`)
- Hero section with CTA buttons
- Social proof strip
- How it Works (5-step process with route metaphor)
- Pricing packages (3 tiers)
- Features grid
- Results metrics
- FAQ accordion
- Application form with file upload
- Final CTA section

### About (`/about`)
- Mission statement
- Core values
- Brand voice explanation

### Contact (`/contact`)
- Contact form
- Contact information cards
- Calendar embed placeholder

### Legal Pages
- Privacy Policy (`/privacy`)
- Terms of Service (`/terms`)

## Design Features

### Color Palette
- **Sand**: Warm desert tones (#fdf8f3 to #6d4229)
- **Sunset**: Orange/red gradient (#fff5ed to #7c2d12)
- **Sky**: Blue accents (#f0f9ff to #0c4a6e)
- **Charcoal**: Gray text colors

### Custom Animations
- Floating background blobs
- Dust trail effects
- Speed line animations
- Smooth hover transitions

### Typography Scale
- Display font (Outfit): Bold headings with black weight
- Body font (DM Sans): Clean, readable content

## Form Functionality

The application form currently logs to console. To connect to a backend:

1. Create an API route in `app/api/apply/route.ts`
2. Update the `handleSubmit` function in `app/page.tsx`
3. Add your database or email service integration

Example API route structure:
```typescript
// app/api/apply/route.ts
export async function POST(request: Request) {
  const data = await request.json();
  // Process form data
  // Send to database or email service
  return Response.json({ success: true });
}
```

## Customization

### Colors
Edit `tailwind.config.ts` to modify the theme colors:
```typescript
colors: {
  sand: { /* your colors */ },
  sunset: { /* your colors */ },
  sky: { /* your colors */ },
}
```

### Fonts
Replace Google Fonts in `app/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont...');
```

### Content
All content is editable directly in the page components. Key locations:
- Homepage content: `app/page.tsx`
- FAQ items: `app/page.tsx` (faqItems array)
- Footer links: `components/Footer.tsx`
- Navigation links: `components/Navigation.tsx`

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project to Vercel
3. Deploy automatically

### Other Platforms
Build the production version:
```bash
npm run build
npm start
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Optimizations

- Automatic code splitting via Next.js
- Optimized fonts with `next/font`
- CSS-only animations (no JavaScript animation libraries)
- Lazy-loaded images (when added)
- Minimal external dependencies

## Future Enhancements

- [ ] Add actual calendar integration (Calendly/Cal.com)
- [ ] Implement backend API for form submissions
- [ ] Add email notification service
- [ ] Integrate with a CMS for content management
- [ ] Add Google Analytics or similar tracking
- [ ] Implement A/B testing for conversion optimization
- [ ] Add testimonials section with real customer quotes
- [ ] Create admin dashboard for managing applications

## License

This is a demonstration project for RoleRunner.

## Support

For questions or issues, contact hello@rolerunner.com
