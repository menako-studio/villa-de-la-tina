# Git Workflow & Testing

## Pre-Commit & Pre-Push Hooks

Project ini menggunakan **Husky** untuk menjalankan automated testing sebelum commit dan push, memastikan tidak ada error yang terpush ke repository.

## Setup

Hooks sudah ter-install otomatis. Jika perlu install ulang:

```bash
npm install
```

## Workflow

### Pre-Commit Hook
Setiap kali Anda menjalankan `git commit`, akan otomatis dijalankan:

1. **ESLint** - Linting untuk menemukan masalah kode
2. **TypeScript Type Check** - Validasi types

```bash
# Yang dijalankan:
npm run lint
npm run type-check
```

**Jika ada error, commit akan dibatalkan dan Anda harus memperbaiki error terlebih dahulu.**

### Pre-Push Hook
Setiap kali Anda menjalankan `git push`, akan otomatis dijalankan:

1. **Build Test** - Compile semua halaman untuk production

```bash
# Yang dijalankan:
npm run build
```

**Jika build gagal, push akan dibatalkan.**

## Manual Testing

Anda juga bisa menjalankan test secara manual:

```bash
# Test yang sama dengan pre-commit
npm run test:pre-commit

# Test yang sama dengan pre-push
npm run test:pre-push

# Atau jalankan satu per satu:
npm run lint              # ESLint check
npm run lint:fix          # ESLint check + auto fix
npm run type-check        # TypeScript type check
npm run build             # Production build test
```

## Bypass Hooks (Not Recommended)

Jika dalam kondisi darurat perlu bypass hooks:

```bash
# Bypass pre-commit
git commit --no-verify -m "message"

# Bypass pre-push
git push --no-verify
```

⚠️ **Warning**: Hanya gunakan `--no-verify` jika benar-benar darurat dan Anda yakin kode Anda tidak bermasalah.

## Error Handling

### Lint Errors
```bash
# Auto-fix lint errors
npm run lint:fix

# Jika masih error, perbaiki manual sesuai error message
```

### Type Errors
```bash
# Check type errors
npm run type-check

# Perbaiki sesuai error message TypeScript
```

### Build Errors
```bash
# Test build
npm run build

# Check error di terminal dan perbaiki file yang bermasalah
```

## Best Practices

1. **Commit often dengan perubahan kecil** - Lebih mudah untuk fix error
2. **Test locally sebelum commit** - Jalankan `npm run dev` dan test manual
3. **Fix errors immediately** - Jangan accumulate errors
4. **Read error messages carefully** - Error messages biasanya sangat jelas
5. **Use meaningful commit messages** - Jelaskan apa yang diubah

## Workflow Example

```bash
# 1. Develop
npm run dev
# ... code changes ...

# 2. Manual test (optional tapi recommended)
npm run lint
npm run type-check

# 3. Commit (auto-test akan dijalankan)
git add .
git commit -m "feat: add new feature"
# ✓ Lint passed
# ✓ Type check passed
# ✓ Commit success

# 4. Push (build test akan dijalankan)
git push
# ✓ Build passed
# ✓ Push success
```

## Troubleshooting

### Hook tidak berjalan
```bash
# Reinstall hooks
rm -rf .husky
npx husky install
chmod +x .husky/pre-commit .husky/pre-push
```

### Slow hook execution
Jika hooks terlalu lama:
- Pre-commit: Sudah optimal (hanya lint + type check)
- Pre-push: Build memang butuh waktu, ini normal

### False positives
Jika yakin kode Anda benar tapi hook error:
1. Check konfigurasi di `.eslintrc.json`
2. Check `tsconfig.json`
3. Update dependencies jika perlu

## Configuration Files

- `.husky/pre-commit` - Pre-commit hook script
- `.husky/pre-push` - Pre-push hook script
- `.prettierrc` - Prettier configuration
- `.prettierignore` - Files to ignore from prettier
- `.eslintrc.json` - ESLint configuration
- `tsconfig.json` - TypeScript configuration

## Continuous Integration

Hooks ini adalah **first line of defense**. Untuk CI/CD:
- GitHub Actions / GitLab CI akan menjalankan tests yang sama
- Ini memastikan kualitas kode di semua level

---

**Happy coding! 🚀**
