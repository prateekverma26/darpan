# DigiLocker Demo

A demo of the DigiLocker digital document wallet, built with Next.js (App Router) + TypeScript.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Folder structure

```
digilocker-demo/
├── public/
│   └── assets/                 # Static images, icons, logos
├── src/
│   ├── app/                    # App Router: routes = folders
│   │   ├── layout.tsx          # Root layout (html/body, metadata)
│   │   ├── globals.css         # Global styles + design tokens
│   │   ├── page.tsx            # Home / issued documents
│   │   ├── dashboard/page.tsx
│   │   ├── documents/page.tsx
│   │   ├── issued/page.tsx
│   │   ├── shared/page.tsx
│   │   └── scan/page.tsx
│   ├── components/
│   │   ├── ui/                 # Generic reusable UI primitives
│   │   ├── layout/             # Shell pieces (BottomNav, headers)
│   │   └── documents/          # Feature components (DocumentCard)
│   ├── hooks/                  # Reusable React hooks
│   ├── lib/                    # Utilities, helpers (cn, formatDate)
│   ├── data/                   # Mock/sample data
│   └── types/                  # Shared TypeScript types
├── next.config.mjs
├── tsconfig.json              # Path alias: @/* -> ./src/*
└── package.json
```

## Conventions

- **Routes** are defined by folders under `src/app/`; each `page.tsx` is a route.
- **Imports** use the `@/` alias (e.g. `import { cn } from "@/lib/utils"`).
- **Design tokens** live as CSS variables in `globals.css` (India-flag palette: saffron, green, navy).
