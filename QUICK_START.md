# Quick Start Guide

## 🚀 Development

```bash
npm run dev              # Start development server at http://localhost:3000
```

## ✅ Testing (Manual)

```bash
npm run lint             # Check for code issues
npm run lint:fix         # Fix code issues automatically
npm run type-check       # Check TypeScript types
npm run build            # Test production build
```

## 📝 Git Workflow

```bash
# 1. Make changes
# ... edit files ...

# 2. Stage & commit (lint + type-check run automatically)
git add .
git commit -m "feat: your message"

# 3. Push (build test runs automatically)
git push
```

## 🔧 Common Commands

```bash
npm install              # Install dependencies
npm run dev              # Development mode
npm run build            # Build for production
npm run start            # Run production build
npm run firebase:deploy  # Deploy to Firebase
```

## 🛑 If Tests Fail

### Lint Errors
```bash
npm run lint:fix         # Auto-fix most issues
```

### Type Errors
```bash
npm run type-check       # See detailed errors
# Fix manually based on error messages
```

### Build Errors
```bash
npm run build            # See build errors
# Fix files mentioned in error messages
```

## 🚨 Bypass Hooks (Emergency Only!)

```bash
git commit --no-verify -m "message"    # Skip pre-commit
git push --no-verify                   # Skip pre-push
```

⚠️ Only use `--no-verify` in emergencies!

## 📚 Full Documentation

- [README.md](README.md) - Main documentation
- [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) - Code structure
- [GIT_WORKFLOW.md](GIT_WORKFLOW.md) - Detailed workflow guide
