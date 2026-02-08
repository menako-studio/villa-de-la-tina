#!/usr/bin/env node

/**
 * Version Management Script
 * Usage: npm run version:patch | version:minor | version:major
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get version type from command line argument
const versionType = process.argv[2] || 'patch';
const validTypes = ['patch', 'minor', 'major'];

if (!validTypes.includes(versionType)) {
  console.error(`❌ Invalid version type: ${versionType}`);
  console.error(`Valid types: ${validTypes.join(', ')}`);
  process.exit(1);
}

// Read package.json
const packageJsonPath = path.join(__dirname, '../package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const currentVersion = packageJson.version;

// Parse current version
const [major, minor, patch] = currentVersion.split('.').map(Number);

// Calculate new version
let newVersion;
switch (versionType) {
  case 'major':
    newVersion = `${major + 1}.0.0`;
    break;
  case 'minor':
    newVersion = `${major}.${minor + 1}.0`;
    break;
  case 'patch':
    newVersion = `${major}.${minor}.${patch + 1}`;
    break;
}

console.log(`\n📦 Version Management`);
console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
console.log(`Current version: ${currentVersion}`);
console.log(`New version:     ${newVersion}`);
console.log(`Version type:    ${versionType}`);
console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);

try {
  // Check for uncommitted changes
  try {
    const status = execSync('git status --porcelain', { encoding: 'utf8' });
    if (status.trim()) {
      console.log('⚠️  You have uncommitted changes:');
      console.log(status);
      console.log('\n❓ Do you want to continue? (Commit changes first is recommended)');
      // In production, you might want to add interactive prompt here
    }
  } catch (error) {
    console.warn('⚠️  Could not check git status');
  }

  // Update package.json
  packageJson.version = newVersion;
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
  console.log('✅ Updated package.json');

  // Update CHANGELOG.md
  const changelogPath = path.join(__dirname, '../CHANGELOG.md');
  let changelog = fs.readFileSync(changelogPath, 'utf8');

  const today = new Date().toISOString().split('T')[0];
  const unreleasedSection = '## [Unreleased]';
  const newVersionSection = `## [${newVersion}] - ${today}`;

  if (changelog.includes(unreleasedSection)) {
    changelog = changelog.replace(
      unreleasedSection,
      `${unreleasedSection}\n\n${newVersionSection}`
    );
    fs.writeFileSync(changelogPath, changelog);
    console.log('✅ Updated CHANGELOG.md');
  } else {
    console.warn('⚠️  Could not find [Unreleased] section in CHANGELOG.md');
  }

  // Create VERSION file
  const versionFilePath = path.join(__dirname, '../VERSION');
  fs.writeFileSync(versionFilePath, newVersion);
  console.log('✅ Created/Updated VERSION file');

  // Git operations
  console.log('\n📝 Git Operations:');

  // Stage files
  execSync('git add package.json CHANGELOG.md VERSION', { stdio: 'inherit' });
  console.log('✅ Staged version files');

  // Commit
  const commitMessage = `chore: bump version to ${newVersion}`;
  execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
  console.log(`✅ Committed: ${commitMessage}`);

  // Create tag
  const tagMessage = `Release v${newVersion}`;
  execSync(`git tag -a v${newVersion} -m "${tagMessage}"`, { stdio: 'inherit' });
  console.log(`✅ Created tag: v${newVersion}`);

  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('🎉 Version bump complete!');
  console.log('\n📋 Next steps:');
  console.log('   1. Review the changes');
  console.log(`   2. Push to remote: git push origin main`);
  console.log(`   3. Push tags: git push origin v${newVersion}`);
  console.log('   4. Vercel will auto-deploy when pushed to main');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
} catch (error) {
  console.error('\n❌ Error during version bump:');
  console.error(error.message);
  process.exit(1);
}
