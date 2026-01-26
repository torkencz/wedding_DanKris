# Danica & Kristóf Wedding Website

A beautiful, modern wedding website for Danica Shei & Törkenczy Kristóf's wedding in Budapest, Hungary on September 5-6, 2026.

## 🎉 Features

- **Elegant Design** - Warm Budapest-inspired color palette with sophisticated typography
- **Responsive** - Looks great on all devices from mobile to desktop
- **Smooth Animations** - Subtle, delightful animations powered by Framer Motion
- **Fun Animation** - A playful red panda chasing a dog animation
- **Complete Wedding Info** - Schedule, travel tips, hotel recommendations, things to do, FAQs
- **Easy to Customize** - All content is centralized in a single file

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navigation.tsx   # Fixed navigation with scroll tracking
│   ├── Hero.tsx         # Landing section with couple names
│   ├── Schedule.tsx     # Event schedule with timeline
│   ├── FunSection.tsx   # Red panda animation section
│   ├── RedPandaChase.tsx # Animated SVG characters
│   ├── Travel.tsx       # Airport and getting around info
│   ├── Stay.tsx         # Hotel recommendations
│   ├── ThingsToDo.tsx   # Budapest activities guide
│   ├── FAQ.tsx          # Accordion-style FAQs
│   ├── RSVP.tsx         # RSVP and registry section
│   └── Footer.tsx       # Site footer
├── content/
│   └── siteContent.ts   # All website content (single source of truth)
├── App.tsx              # Main app component
├── main.tsx             # Entry point
└── index.css            # Global styles with Tailwind
```

## ✏️ Customizing Content

All website content is located in `src/content/siteContent.ts`. You can easily update:

- Couple names and date
- Event details and timeline
- Hotel recommendations
- FAQs
- Travel information
- Things to do in Budapest

## 🎨 Design System

### Colors
- **Terracotta** - Primary accent color (warm, inviting)
- **Sage** - Secondary accent (natural, calming)
- **Cream** - Background tones
- **Charcoal** - Text colors

### Typography
- **Playfair Display** - Display/headings
- **Cormorant Garamond** - Accent/italics
- **DM Sans** - Body text

## 📝 TODO

- [ ] Replace placeholder RSVP link with actual form
- [ ] Add actual hero image of the couple
- [ ] Update hotel booking links
- [ ] Set RSVP deadline
- [ ] Add childcare details when finalized

## 🛠️ Tech Stack

- **React 18** + **TypeScript**
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations

## 📜 License

Private - For Danica & Kristóf's wedding only.
