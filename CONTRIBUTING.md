# 🤝 Contributing to DevPortfolio Starter Kit

Thank you for considering contributing to this project! Every contribution, no matter how small, makes a difference.

---

## 📋 Table of Contents

- [Quick Start](#-quick-start)
- [How to Contribute](#-how-to-contribute)
- [Commit Message Format](#-commit-message-format)
- [Branch Naming](#-branch-naming-conventions)
- [Pull Request Process](#-pull-request-process)
- [Code of Conduct](#-code-of-conduct)
- [GitHub Achievement Badges](#-unlock-github-badges)

---

## 🚀 Quick Start

### 1. Fork the Repository

Click the **"Fork"** button on GitHub, then clone your fork:

```bash
git clone https://github.com/yourusername/devportfolio-starter-kit.git
cd devportfolio-starter-kit
```

### 2. Create a Branch

```bash
git checkout -b feat/your-feature-name
```

### 3. Make Your Changes

Edit the files, test locally, and commit:

```bash
git add .
git commit -m "✨ feat: your feature description"
```

### 4. Push and Open a PR

```bash
git push origin feat/your-feature-name
```

Then go to GitHub and open a Pull Request.

---

## 📝 How to Contribute

### Types of Contributions We Welcome

| Type | Description | Examples |
|------|-------------|----------|
| 🐛 Bug Fixes | Fix broken functionality | Fix mobile nav, fix CSS bug |
| ✨ Features | New functionality | Add new animation, add theme |
| 💄 Style | UI/UX improvements | Improve card hover, update colors |
| 📝 Documentation | README, guides, comments | Update setup guide, add JSDoc |
| ⚡ Performance | Speed improvements | Optimize animations, reduce reflow |
| 🧪 Tests | Testing additions | Add visual regression tests |

### Steps for Contributing

1. **Check existing issues** - Look for open issues you can help with
2. **Create a new issue** - If you found a bug or have a feature idea
3. **Fork and branch** - Follow the workflow above
4. **Make changes** - Keep your changes focused and tested
5. **Test locally** - Open `index.html` in your browser
6. **Submit PR** - Use the PR template

---

## ✍️ Commit Message Format

We follow **Conventional Commits** for clear history:

```
<type>: <description>
```

### Types

| Type | Prefix | Example |
|------|--------|---------|
| Feature | `feat:` | `feat: add dark mode toggle animation` |
| Bug Fix | `fix:` | `fix: correct mobile nav z-index` |
| Docs | `docs:` | `docs: update README customization guide` |
| Style | `style:` | `style: update button hover effect` |
| Refactor | `refactor:` | `refactor: extract cursor logic to function` |
| Performance | `perf:` | `perf: optimize scroll listener` |
| Test | `test:` | `test: add visual regression checks` |
| Chore | `chore:` | `chore: update GitHub Actions version` |

### Emoji Prefixes (Optional but Fun!)

```
✨ feat: add new feature
🐛 fix: fix bug
📝 docs: update documentation
💄 style: update styles
♻️ refactor: refactor code
⚡ perf: improve performance
✅ test: add tests
🔧 chore: maintenance task
🎨 design: improve UI/UX
🌐 i18n: add translations
```

### Full Commit Example

```bash
git commit -m "✨ feat: add smooth scroll indicator

- Add animated arrow at bottom of hero
- Bounces on scroll to indicate more content
- Respects prefers-reduced-motion

Co-authored-by: Jane Doe <jane@example.com>"
```

---

## 🌿 Branch Naming Conventions

Use descriptive branch names with prefixes:

```
feat/contact-form-ui          # New feature
fix/readme-typo               # Bug fix
docs/setup-guide-update       # Documentation
style/button-hover            # Style change
refactor/skill-bars           # Code refactor
perf/scroll-performance       # Performance improvement
```

### Bad Branch Names ❌

```
patch-1                       # Too vague
master                        # Never branch off master
my-changes                    # Unclear
fix                           # Incomplete
```

---

## 🔄 Pull Request Process

### PR Checklist

Before submitting your PR, ensure:

- [ ] Your code follows the project style
- [ ] You've tested on mobile and desktop
- [ ] You've updated README if needed
- [ ] No console errors in browser
- [ ] All HTML is semantic and valid
- [ ] CSS doesn't break existing layouts
- [ ] JavaScript is non-breaking

### PR Template

When opening a PR, fill out the template:

```markdown
## 📝 Description
<!-- Describe your changes in detail -->

## 🔗 Related Issue
<!-- Link the issue: "Fixes #123" or "Closes #123" -->

## 🧪 Type of change
- [ ] 🐛 Bug fix
- [ ] ✨ New feature
- [ ] 💄 UI/Style update
- [ ] 📝 Documentation
- [ ] ⚡ Performance improvement

## ✅ Checklist
- [ ] My code follows the project style
- [ ] I've tested on mobile and desktop
- [ ] I've updated README if needed
- [ ] No console errors

## 📸 Screenshots (if UI changes)
<!-- Before / After screenshots -->
```

---

## 📜 Code of Conduct

### Our Pledge

We pledge to make participation in this project a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity, nationality, personal appearance, race, religion, or sexual identity.

### Our Standards

Examples of behavior that contributes to a positive environment:

- ✅ Using welcoming and inclusive language
- ✅ Being respectful of differing viewpoints
- ✅ Gracefully accepting constructive criticism
- ✅ Focusing on what's best for the community
- ✅ Showing empathy towards other community members

Examples of unacceptable behavior:

- ❌ Trolling, insulting comments, personal attacks
- ❌ Publishing others' private information without permission
- ❌ Harassment or intimidation
- ❌ Posting sexually explicit or violent content

---

## 🏆 Unlock GitHub Achievement Badges

By contributing, you can unlock these GitHub badges:

| Badge | How to Unlock |
|-------|---------------|
| **Quickdraw** | Open and close an issue within 2 minutes |
| **YOLO** | Merge a PR without reviewing (use responsibly!) |
| **Pull Shark (Bronze)** | Get 2 PRs merged |
| **Pair Extraordinaire** | Co-author a commit with someone |
| **Galaxy Brain** | Participate in a discussion Q&A |
| **Starstruck** | Earn 16 stars on the repo |

### Co-Authoring for "Pair Extraordinaire"

To unlock the Pair Extraordinaire badge, use this format:

```bash
git commit -m "feat: mobile navigation enhancement

Co-authored-by: Friend Name <friend@email.com>"
```

The email must match the GitHub account of your co-author.

---

## 📞 Getting Help

- **Open an issue** for bugs or features
- **Start a discussion** for questions
- **Read docs/setup-guide.md** for setup help
- **Check existing PRs** for similar changes

---

## 🙏 Thank You!

Every contribution matters. Whether it's fixing a typo, adding a feature, or improving documentation — you're making this project better for everyone.

**Made with ❤️ by the DevPortfolio community**

---

<div align="center">

[Back to README](README.md) · [View Issues](../../issues)

</div>
