# 🏡 Villa De La Tina - Website Resmi

Website resmi Villa De La Tina Kuningan - Villa healing dan pusat kegiatan masyarakat di kaki Gunung Ciremai, Jawa Barat.

## 📋 Deskripsi Project

Villa De La Tina adalah destinasi healing premium yang menggabungkan ketenangan alam pegunungan dengan fasilitas modern. Website ini dibangun dengan Next.js dan TypeScript untuk memberikan pengalaman user yang optimal dengan SEO terbaik.

### Halaman Utama:
- **Homepage (/)** - Informasi umum, fasilitas, paket, dan galeri
- **Event & Venue (/event-venue)** - Informasi sewa villa untuk acara dan workshop
- **Tina Wiryawati Center (/tina-wiryawati-center)** - Program pelatihan dan pemberdayaan masyarakat
- **Tentang Kami (/tentang-kami)** - Cerita, visi, dan perjalanan Villa De La Tina

## 🚀 Tech Stack

- **Framework**: Next.js 14.2.18 (Pages Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4
- **Database**: Firebase (Firestore)
- **Deployment**: Vercel / Firebase Hosting
- **Package Manager**: npm

## 📁 Struktur Project

```
villa-de-la-tina/
├── public/                    # Asset statis (images, videos)
│   ├── images/               
│   └── videos/
├── src/
│   ├── components/           # Komponen reusable
│   │   ├── cards/           # Card components
│   │   ├── layout/          # Layout components (Header, Footer, Navbar)
│   │   └── sections/        # Section components untuk pages
│   ├── lib/
│   │   ├── config/          # Konfigurasi Firebase
│   │   └── utils/           # Utility functions
│   ├── pages/               # Next.js pages
│   │   ├── api/             # API routes
│   │   ├── event-venue/     # Event & Venue page
│   │   ├── tina-wiryawati-center/  # TWC page
│   │   ├── tentang-kami.tsx # About page
│   │   └── index.tsx        # Homepage
│   ├── styles/              # Global styles
│   └── types/               # TypeScript types
├── firebase.json            # Firebase configuration
├── firestore.rules          # Firestore security rules
├── firestore.indexes.json   # Firestore indexes
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind configuration
└── tsconfig.json            # TypeScript configuration
```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 18+ 
- npm atau yarn
- Git

### Langkah-langkah Setup

1. **Clone Repository**
```bash
git clone <repository-url>
cd villa-de-la-tina
```

2. **Install Dependencies**
```bash
npm install
```

3. **Setup Environment Variables**

Buat file `.env.local` di root project:
```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

4. **Run Development Server**
```bash
npm run dev
```

Website akan berjalan di `http://localhost:3000`

## 📦 Available Scripts

```bash
# Development
npm run dev          # Jalankan development server
npm run build        # Build untuk production
npm start            # Jalankan production build

# Linting & Formatting
npm run lint         # Check linting errors
npm run lint:fix     # Fix linting errors
npm run type-check   # Check TypeScript errors

# Versioning & Release (Semantic Versioning)
npm run version:patch    # Bump patch version (1.0.0 → 1.0.1) - Bug fixes
npm run version:minor    # Bump minor version (1.0.0 → 1.1.0) - New features
npm run version:major    # Bump major version (1.0.0 → 2.0.0) - Breaking changes

# Quick Release (Version + Push)
npm run release          # Patch version + auto push
npm run release:minor    # Minor version + auto push
npm run release:major    # Major version + auto push

# Other
npm run sitemap      # Generate sitemap
```

## 🎨 Best Practices yang Diimplementasikan

### 1. SEO Optimization
- ✅ Meta tags lengkap (title, description, keywords)
- ✅ Open Graph tags untuk social media
- ✅ Twitter Cards
- ✅ Structured Data (JSON-LD Schema.org)
- ✅ Canonical URLs
- ✅ Responsive design untuk mobile SEO

### 2. Performance Optimization
- ✅ Next.js Image optimization dengan AVIF/WebP
- ✅ Font optimization dengan `next/font/google`
- ✅ SWC minification untuk bundle size lebih kecil
- ✅ Lazy loading untuk components
- ✅ Compression enabled
- ✅ Code splitting otomatis

### 3. Code Quality
- ✅ TypeScript untuk type safety
- ✅ ESLint configuration
- ✅ Komponen modular dan reusable
- ✅ Proper file organization
- ✅ Clean code principles

### 4. Accessibility
- ✅ Semantic HTML
- ✅ Alt text untuk semua images
- ✅ Keyboard navigation support
- ✅ ARIA labels where needed

## 🔧 Configuration Files

### next.config.js
```javascript
// Sudah dioptimasi dengan:
- reactStrictMode: true
- swcMinify: true
- Image formats: AVIF & WebP
- Compression enabled
- Security headers
```

### tailwind.config.js
```javascript
// Custom configuration:
- Custom fonts
- Custom colors
- Extended spacing
- Responsive breakpoints
```

## 🔥 Firebase Setup

### Firestore Rules
Security rules sudah dikonfigurasi di `firestore.rules` untuk:
- Public read access untuk data publik
- Admin write access dengan authentication

### Firestore Indexes
Custom indexes untuk query optimization tersedia di `firestore.indexes.json`

## 📱 Responsive Design

Website fully responsive dengan breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## � Versioning & Release Management

Project ini menggunakan [Semantic Versioning](https://semver.org/) untuk version management.

### Version Format
**MAJOR.MINOR.PATCH** (e.g., 1.2.3)
- **MAJOR**: Breaking changes atau major feature releases
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes dan minor improvements

### Workflow Sebelum Commit & Release

**Langkah 1: Update CHANGELOG.md**
```markdown
## [Unreleased]

### Added
- Fitur baru yang ditambahkan

### Changed  
- Perubahan pada fitur existing

### Fixed
- Bug fixes
```

**Langkah 2: Commit Semua Changes**
```bash
git add .
git commit -m "feat: add new blog articles to TWC"
```

**Langkah 3: Run Versioning Script**
```bash
# Untuk bug fixes dan perbaikan kecil (patch)
npm run release

# Untuk fitur baru (minor)  
npm run release:minor

# Untuk breaking changes (major)
npm run release:major
```

Script ini akan otomatis:
- ✅ Bump version number di `package.json`
- ✅ Update `CHANGELOG.md` dari [Unreleased] ke version baru
- ✅ Create/update `VERSION` file
- ✅ Create git commit untuk version bump
- ✅ Create git tag (e.g., v1.0.1)
- ✅ Push ke remote repository (main branch + tags)
- ✅ Trigger Vercel auto-deploy

**Alternatif - Manual Version Control:**
```bash
# Hanya bump version tanpa push
npm run version:patch  # atau version:minor / version:major

# Review perubahan
git status
git log -1

# Push manual  
git push origin main --follow-tags
```

### Version Best Practices

| Version Type | Use Case | Example |
|-------------|----------|---------|
| `patch` | Bug fixes, typos, minor tweaks | 1.0.0 → 1.0.1 |
| `minor` | New features, enhancements | 1.0.0 → 1.1.0 |
| `major` | Breaking changes, major redesigns | 1.0.0 → 2.0.0 |

### � Continuous Integration

### GitHub Actions
- **Version Tag Workflow**: Auto-create release notes saat version tag di-push
- **Deployment**: Vercel auto-deploy on push to main

### Pre-commit Hooks (Husky)
```bash
# Otomatis dijalankan sebelum commit
- ESLint check
- TypeScript type check
- Code formatting (Prettier)
```

## 📚 Additional Documentation

- [CHANGELOG.md](./CHANGELOG.md) - Version history dan changes log
- [VERSIONING.md](./VERSIONING.md) - Complete versioning guide
- [GIT_COMMIT_GUIDE.md](./GIT_COMMIT_GUIDE.md) - Git commit conventions
- [PRODUCTION_CHECKLIST.md](./PRODUCTION_CHECKLIST.md) - Pre-deployment checklist

## 🤝 Contributing

### Pull Request Process

1. Fork repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'feat: add amazing feature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

### Commit Message Format
```
<type>(<scope>): <subject>

Types: feat, fix, docs, style, refactor, test, chore
Examples:
- feat(twc): add new blog articles
- fix(navbar): resolve mobile menu toggle issue
- docs(readme): update deployment instructions
```

## 📞 Support & Contact

Untuk pertanyaan teknis atau issues:
1. Buka issue di GitHub repository
2. Contact: [developer contact]
3. Email: info@villadelatina.com

## 📄 License

© 2024-2026 Villa De La Tina. All rights reserved.

---

**Last Updated**: February 8, 2026
**Current Version**: 1.0.0
**Maintained by**: Menako Studio

### Quick Links
- 🌐 [Production Site](https://villadelatina.com)
- 📊 [Vercel Dashboard](https://vercel.com/dashboard)
- 🔥 [Firebase Console](https://console.firebase.google.com)
- 📈 [Analytics](https://analytics.google.com)

Project ini sudah dikonfigurasi untuk **auto-deploy** ke Vercel setiap kali ada push ke branch `main`.

### Auto-Deploy Flow
```
Update CHANGELOG.md
    ↓
Commit changes
    ↓
Run versioning: npm run release
    ↓
Auto push to main + tags
    ↓
Vercel auto-deploy ✨
    ↓
Production live!
```

### Deploy ke Vercel (Recommended)

**Initial Setup:**
1. **Connect ke Vercel**
```bash
npm install -g vercel
vercel login
```

2. **Link Project**
```bash
vercel link
```

3. **Set Environment Variables** di Vercel Dashboard
   - Tambahkan semua environment variables dari `.env.local`

**Deployment:**
Setelah setup awal, cukup push ke main:
```bash
git push origin main
# Vercel akan otomatis detect dan deploy
```

### Deploy ke Firebase Hosting

1. **Install Firebase CLI**
```bash
npm install -g firebase-tools
firebase login
```

2. **Build & Deploy**
```bash
npm run build
firebase deploy --only hosting
```

### Monitoring Deployment
- **Vercel Dashboard**: https://vercel.com/dashboard
- **GitHub Releases**: Auto-generated release notes
- **Production URL**: Check Vercel deployment logs

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Type Errors
```bash
# Check TypeScript errors
npm run type-check
```

### Firebase Connection Issues
- Pastikan environment variables sudah benar
- Check Firebase console untuk quota dan permissions

## 📈 SEO Checklist

- [x] Meta tags di semua pages
- [x] Structured data (Schema.org)
- [x] Open Graph tags
- [x] Twitter Cards
- [x] Canonical URLs
- [x] XML Sitemap (auto-generated by Next.js)
- [x] Robots.txt
- [x] 404 error page
- [x] Fast loading time (< 3s)
- [x] Mobile-friendly
- [x] HTTPS enabled

## 🎯 PageSpeed Optimization

Target metrics:
- **First Contentful Paint**: < 1.8s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.8s
- **Cumulative Layout Shift**: < 0.1
- **Total Blocking Time**: < 200ms

## 📞 Support & Contact

Untuk pertanyaan teknis atau issues:
1. Buka issue di GitHub repository
2. Contact: [developer contact]

## 📄 License

© 2024 Villa De La Tina. All rights reserved.

---

**Last Updated**: December 2024
**Version**: 1.0.0
**Maintained by**: Menako Studio
