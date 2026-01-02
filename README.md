# Villa De La Tina - Private Retreat Website

## Project Overview
Website untuk Villa De La Tina - private retreat villa yang menawarkan pengalaman menginap yang tenang dan personal di Kuningan.

## Features
- 🏠 Landing page dengan informasi villa & fasilitas
- 🧘 Paket wellness & healing programs
- 📸 Gallery showcase
- 📝 Blog untuk artikel wellness
- 👨‍💼 CMS Admin panel untuk mengelola konten
- 📱 Responsive design - mobile friendly
- 🔐 Authentication untuk admin CMS

## Tech Stack
- **Frontend**: Next.js 14.2.18 + TypeScript + Tailwind CSS
- **Backend**: Firebase/Firestore + Next.js API Routes
- **Authentication**: Firebase Auth
- **Calendar**: Google Calendar API
- **Deployment**: Firebase Hosting
- **UI Components**: Headless UI + Heroicons + Lucide React
- **Code Quality**: ESLint + Prettier + Husky (Git Hooks)

## Project Structure
```
src/
├── components/
│   ├── layout/         # Navbar, Header, Footer
│   ├── cards/          # Reusable card components
│   └── sections/       # Page section components
├── pages/              # Next.js pages & API routes
├── lib/
│   ├── config/         # Firebase & app configuration
│   ├── utils/          # Utility functions
│   └── services/       # Backend services
├── types/              # TypeScript type definitions
├── hooks/              # Custom React hooks
├── cms/                # Admin CMS components
└── styles/             # Global styles
```

📚 **Detailed documentation**: [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)

## Git Workflow & Testing

This project uses **automated testing** before commits and pushes to prevent errors from being pushed to the repository.

### Pre-Commit Checks (Automatic)
- ✅ ESLint - Code quality check
- ✅ TypeScript - Type checking

### Pre-Push Checks (Automatic)
- ✅ Build Test - Ensures all pages compile successfully

📚 **Full workflow guide**: [GIT_WORKFLOW.md](GIT_WORKFLOW.md)

## Getting Started

### Prerequisites
- Node.js 18+
- Firebase account
- Google Cloud Console project (for Calendar API)

### Installation
```bash
# Clone repository
git clone <repository-url>
cd villa-de-latina

# Install dependencies
npm install

# Run development server
npm run dev
```

### Available Scripts
```bash
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint
npm run lint:fix         # Run ESLint with auto-fix
npm run type-check       # TypeScript type checking
npm run test:pre-commit  # Run pre-commit tests manually
npm run test:pre-push    # Run pre-push tests manually
npm run firebase:deploy  # Deploy to Firebase
```

### Firebase Setup
1. Create Firebase project
2. Enable Firestore Database
3. Enable Authentication
4. Setup Firebase Hosting
5. Configure environment variables

### Google Calendar API Setup
1. Enable Google Calendar API in Google Cloud Console
2. Create service account credentials
3. Share calendar with service account email
4. Add credentials to environment variables

## Environment Variables
```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

FIREBASE_PRIVATE_KEY=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PROJECT_ID=

GOOGLE_CALENDAR_ID=
GOOGLE_SERVICE_ACCOUNT_KEY=
```

## Deployment
```bash
# Build & test locally first
npm run build

# Deploy to Firebase Hosting
npm run firebase:deploy
```

## Development Workflow

### Making Changes
1. Create a new branch for your feature
2. Make your changes
3. Run tests manually (optional): `npm run test:pre-commit`
4. Commit changes: `git commit -m "your message"`
   - ✅ Pre-commit hook will run automatically (lint + type-check)
5. Push to repository: `git push`
   - ✅ Pre-push hook will run automatically (build test)

### Hooks Automatically Run
- **Pre-commit**: Lint + Type Check
- **Pre-push**: Build Test

If any test fails, the commit/push will be blocked until you fix the errors.

📚 **Full workflow guide**: [GIT_WORKFLOW.md](GIT_WORKFLOW.md)

## Documentation
- [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) - Detailed project structure
- [GIT_WORKFLOW.md](GIT_WORKFLOW.md) - Git workflow & testing guide

## Features Roadmap
- [x] Landing page design
- [x] Facilities & packages showcase
- [x] Gallery
- [x] Blog structure
- [x] Admin CMS for content management
- [x] Automated testing with git hooks
- [ ] Google Calendar integration
- [ ] User authentication
- [ ] Booking system
- [ ] Payment integration