<div align="center">

![DevPortfolio Starter Kit Banner](assets/banner.png)

# 🚀 DevPortfolio Starter Kit

**A stunning, zero-dependency developer portfolio that goes live in 5 minutes**

[![Stars](https://img.shields.io/github/stars/subhamrexpaul/devportfolio-starter-kit?style=for-the-badge&color=6B46FF&labelColor=0F0F1A)](https://github.com/subhamrexpaul/devportfolio-starter-kit/stargazers)
[![Forks](https://img.shields.io/github/forks/subhamrexpaul/devportfolio-starter-kit?style=for-the-badge&color=FF4B8B&labelColor=0F0F1A)](https://github.com/subhamrexpaul/devportfolio-starter-kit/fork)
[![License](https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge&labelColor=0F0F1A)](LICENSE)
[![PRs](https://img.shields.io/badge/PRs-Welcome-6B46FF?style=for-the-badge&labelColor=0F0F1A)](CONTRIBUTING.md)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub_Pages-FF4B8B?style=for-the-badge&labelColor=0F0F1A)](https://pages.github.com)
[![Issues](https://img.shields.io/github/issues/subhamrexpaul/devportfolio-starter-kit?style=for-the-badge&color=FF4B8B&labelColor=0F0F1A)](../../issues)

[**🌐 Live Demo**](https://subhamrexpaul.github.io/devportfolio-starter-kit) · [**🐛 Report Bug**](../../issues) · [**✨ Request Feature**](../../issues)

</div>

---

## 📖 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Quick Start](#-quick-start)
- [Customization](#-customization)
- [File Structure](#-file-structure)
- [Tech Stack](#-tech-stack)
- [Contributing](#-contributing)
- [Support](#-show-your-support)
- [License](#-license)
- [Connect](#-connect-with-me)

---

## 💎 About

DevPortfolio Starter Kit is a **production-ready, zero-dependency** developer portfolio template designed to help you look like a senior frontend developer — even if you're just starting out.

Built with pure HTML, CSS, and vanilla JavaScript, it requires **no build tools, no npm install, no framework knowledge**. Just fork, customize, and deploy.

### Why I Built This

Tired of seeing developers waste hours setting up portfolios with complex frameworks? This template proves you don't need React, Vue, or Webpack to create a stunning portfolio. Sometimes, **plain HTML is all you need**.

---

## ✨ Features

<details open>
<summary><b>Click to expand feature list</b></summary>

### Design & UX
- 🎨 **Dark/Light Mode** - Toggle between themes with localStorage persistence
- 💎 **Glassmorphism Cards** - Modern frosted glass effect throughout
- ⚡ **Electric Indigo Accents** - Premium color palette that stands out
- 📱 **Fully Responsive** - Perfect on 320px to 2560px screens
- 🖱️ **Custom Cursor** - Smooth following cursor with hover effects
- ✨ **Scroll Animations** - Intersection Observer-powered reveals

### Interactions
- ⌨️ **Typewriter Effect** - Cycling through your titles automatically
- 📊 **Animated Skill Bars** - Fill animation on scroll
- 🎯 **Active Nav Highlighting** - Auto-highlight current section
- 📜 **Smooth Scroll** - Native smooth scrolling to sections
- 🍔 **Mobile Hamburger Menu** - Animated toggle for mobile
- 🌟 **Particle Background** - CSS-only floating particles

### Developer Experience
- 🚀 **GitHub Actions CI** - Automated validation on push
- 📝 **Issue Templates** - Pre-configured bug/feature templates
- 🔄 **PR Template** - Structured pull request workflow
- 📖 **Setup Guide** - Step-by-step customization instructions
- 🤝 **Contributing Guide** - Clear contribution guidelines

### Performance
- ⚡ **95+ PageSpeed** - Optimized for Core Web Vitals
- 📦 **Zero Dependencies** - No external JavaScript libraries
- 🎯 **Semantic HTML5** - SEO-friendly structure
- ♿ **Accessible** - ARIA labels, keyboard navigation
- 🐛 **Zero Console Errors** - Clean, production-ready code

</details>

---

## 🚀 Quick Start

### Method 1: Use This Template (Recommended)

1. Click **"Use this template"** button on GitHub
2. Name your repo (e.g., `my-portfolio`)
3. Clone your new repo:
   ```bash
   git clone https://github.com/yourusername/my-portfolio.git
   cd my-portfolio
   ```

### Method 2: Fork

1. Click **"Fork"** button on GitHub
2. Clone your fork:
   ```bash
   git clone https://github.com/yourusername/devportfolio-starter-kit.git
   cd devportfolio-starter-kit
   ```

### Deploy to GitHub Pages (3 Steps)

```bash
# 1. Initialize git (if not already done)
git init
git add .
git commit -m "🚀 Initial commit"

# 2. Push to main branch
git branch -M main
git remote add origin https://github.com/yourusername/repo.git
git push -u origin main

# 3. Enable GitHub Pages
# Go to: Settings → Pages → Source: main branch → Save
```

**Your site will be live at:** `https://yourusername.github.io/repo-name`

---

## 🎨 Customization

### 1. Personal Info (index.html)

| Line | What to Change | Example |
|------|---------------|---------|
| 15 | Meta description | Your unique bio |
| 82 | Your name | "John Doe" |
| 88 | Typewriter strings | `["Frontend Dev", "UI Designer"]` |
| 92 | Hero description | Your unique tagline |
| 145 | Bio paragraph 1 | Your intro |
| 151 | Bio paragraph 2 | Your background |
| 158 | Stats numbers | Your real stats |
| 200+ | Project cards | Your projects |
| 280+ | Contact links | Your social URLs |

### 2. Colors (css/style.css)

Edit CSS variables in `:root` (line 50):

```css
:root {
  --accent: #6B46FF;        /* Change to your brand color */
  --accent-2: #FF4B8B;      /* Secondary accent */
  --bg-primary: #080810;    /* Main background */
  --text-primary: #F0EEF6;  /* Main text color */
}
```

### 3. Fonts

Currently using:
- **Clash Display** (headings) via Fontshare
- **Cabinet Grotesk** (body) via Fontshare
- **Playfair Display** (fallback) via Google Fonts

To change, update the `<link>` in `index.html` head and `--font-display` variable.

### 4. Projects

Update the 3 project cards in `index.html` (lines 200-260):

```html
<article class="project-card">
  <h3 class="project-title">Your Project Name</h3>
  <p class="project-description">Your description here</p>
  <div class="project-tech">
    <span class="tech-badge">React</span>
    <span class="tech-badge">Node.js</span>
  </div>
</article>
```

---

## 📁 File Structure

```
devportfolio-starter-kit/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md      # Bug report template
│   │   └── feature_request.md # Feature request template
│   ├── workflows/
│   │   └── ci.yml             # GitHub Actions CI
│   └── PULL_REQUEST_TEMPLATE.md
├── assets/                    # Images, icons, etc.
├── css/
│   ├── animations.css         # All keyframe animations
│   └── style.css              # Main stylesheet (400+ lines)
├── docs/
│   └── setup-guide.md         # Detailed setup guide
├── js/
│   ├── main.js                # Core functionality
│   └── typewriter.js          # Typewriter effect class
├── index.html                 # Main HTML file
├── README.md                  # You're reading it!
├── CONTRIBUTING.md            # Contribution guidelines
└── LICENSE                    # MIT License
```

---

## 🛠️ Tech Stack

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white)

</div>

**Zero build tools. Zero npm packages. Zero excuses.**

---

## 🤝 Contributing

Contributions are what make open source amazing! Here's how you can help:

### Quick Contribution Guide

1. **Fork** the repository
2. **Create** your feature branch (`git checkout -b feat/amazing-feature`)
3. **Commit** your changes (`git commit -m "✨ Add amazing feature"`)
4. **Push** to the branch (`git push origin feat/amazing-feature`)
5. **Open** a Pull Request

### Good First Issues

Look for issues labeled `good first issue` - perfect for newcomers!

### Co-Authoring

Want the **Pair Extraordinaire** GitHub badge? Use this commit format:

```bash
git commit -m "feat: amazing feature

Co-authored-by: Friend Name <friend@email.com>"
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full guide.

---

## ⭐ Show Your Support

If this template helped you land a job or impress recruiters, please consider:

1. **Starring** the repo (it means the world! ⭐)
2. **Forking** and deploying your own portfolio
3. **Sharing** with fellow developers
4. **Contributing** improvements back

---

## 📄 License

Distributed under the **MIT License**. See [LICENSE](LICENSE) for details.

```
Copyright (c) 2024 Subham Paul

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files...
```

---

## 🌐 Connect With Me

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/subhamrexpaul)
[![Twitter](https://img.shields.io/badge/Twitter-000000?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/subhampau1)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/rexxbtw)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/subhamrexpaul)

**Made with ❤️ by [Subham Paul](https://github.com/subhamrexpaul)**

</div>

---

<div align="center">

### If this helped you, please consider giving it a ⭐
### It genuinely motivates me to keep building free tools for developers 🙏

**P.S. - Drop a star if you're going to use this!** It helps more developers discover it.

</div>
