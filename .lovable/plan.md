

# Adding the Boxset Section to the Landing Page

## What We're Building

A new "Boxset" section that showcases the **"Nunchucks! The Whole Shooting Match"** boxset using the uploaded cover image. It will sit between the individual Books section and the Newsletter section as a standout, premium-feeling feature.

## Layout and Design

The boxset section will use a **two-column layout** (image left, text right on desktop; stacked on mobile) -- similar to the Hero section but with a distinct visual treatment to differentiate it:

- **Left side**: The boxset cover image, displayed large with the same 3D shadow and glow effects used on the other book covers
- **Right side**: Title ("The Whole Shooting Match"), a subtitle like "Complete Boxset", a description highlighting that it contains all the books in one package, and a call-to-action button
- The section will use the same warm sepia styling, grain overlay, and embossed dividers to stay consistent with the rest of the page

## Page Flow

```text
Hero Section (Nun More Deadly feature)
        |
Book Series Section (3 individual books)
        |
  Boxset Section  <-- NEW
        |
Newsletter Section
        |
     Footer
```

## Technical Details

### 1. Copy the boxset image into the project
- Copy `user-uploads://nunchucks_boxset.jpg` to `src/assets/nunchucks-boxset.jpg`

### 2. Create a new component: `src/components/BoxsetSection.tsx`
- Import the boxset image from `@/assets/nunchucks-boxset.jpg`
- Two-column responsive grid layout (`grid-cols-1 lg:grid-cols-2`)
- Apply the same depth effects: `grain-overlay`, radial gradient backgrounds, `shadow-book`, ambient glow on hover, and `divider-embossed` top/bottom borders
- Include a "Get the Boxset" CTA button styled like the Hero's primary button
- Section anchor `id="boxset"` for potential future navigation

### 3. Update `src/pages/Index.tsx`
- Import and add `<BoxsetSection />` between `<BookSeriesSection />` and `<NewsletterSection />`

No new dependencies needed -- this uses the same Tailwind utilities and CSS already in place.
