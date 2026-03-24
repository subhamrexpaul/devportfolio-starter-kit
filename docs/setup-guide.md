# 📖 Setup Guide - DevPortfolio Starter Kit

Complete step-by-step guide to customize and deploy your portfolio in under 30 minutes.

---

## 📋 Table of Contents

- [Prerequisites](#-prerequisites)
- [Step 1: Fork the Repo](#-step-1-fork-the-repo)
- [Step 2: Customize index.html](#-step-2-customize-indexhtml)
- [Step 3: Change Colors](#-step-3-change-colors)
- [Step 4: Add Your Projects](#-step-4-add-your-projects)
- [Step 5: Deploy to GitHub Pages](#-step-5-deploy-to-github-pages)
- [Troubleshooting FAQ](#-troubleshooting-faq)
- [Customization Recipes](#-customization-recipes)

---

## 🛠️ Prerequisites

Before you start, ensure you have:

- ✅ A **GitHub account** (free is fine)
- ✅ **Git installed** locally (`git --version` to check)
- ✅ A **code editor** (VS Code recommended)
- ✅ Basic **HTML/CSS knowledge** (helpful but not required)

### Optional Tools

- [GitHub Desktop](https://desktop.github.com/) - GUI for Git
- [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) - Preview locally

---

## 🍴 Step 1: Fork the Repo

### Option A: Use Template (Recommended)

1. Go to the repository on GitHub
2. Click **"Use this template"** → **"Create a new repository"**
3. Name it: `yourusername.github.io` or `portfolio`
4. Click **"Create repository"**

### Option B: Fork

1. Go to the repository on GitHub
2. Click **"Fork"** button (top right)
3. Wait for fork to complete
4. Clone your fork:
   ```bash
   git clone https://github.com/yourusername/devportfolio-starter-kit.git
   cd devportfolio-starter-kit
   ```

---

## 📝 Step 2: Customize index.html

Open `index.html` in your code editor. Here's what to change:

### Personal Information

| Section | Line | What to Change | Example |
|---------|------|----------------|---------|
| Meta description | 6 | Update bio | "John Doe — Frontend Developer" |
| Page title | 16 | Your name | "John Doe \| Developer" |
| Hero name | 82 | Display name | "John Doe" |
| Typewriter strings | 88 | Your titles | `["Frontend Dev", "UI Designer"]` |
| Hero tagline | 92 | Your motto | "Building beautiful interfaces" |
| Bio paragraph 1 | 145-148 | Your intro | Who you are, what you do |
| Bio paragraph 2 | 151-154 | Your background | Education, location, interests |
| Stats numbers | 158-166 | Your metrics | "50+ Repos", "100+ Followers" |

### Contact Links

Update these sections (around line 280-310):

```html
<!-- Email -->
<a href="mailto:your-email@example.com" class="contact-card">

<!-- LinkedIn -->
<a href="https://linkedin.com/in/yourprofile" class="contact-card">

<!-- Twitter -->
<a href="https://twitter.com/yourhandle" class="contact-card">

<!-- Instagram -->
<a href="https://instagram.com/yourhandle" class="contact-card">
```

### Projects

Find the project cards (lines 200-260) and update:

```html
<article class="project-card">
  <h3 class="project-title">Your Project Name</h3>
  <p class="project-description">
    Describe what your project does. Keep it to 2-3 sentences.
    Focus on the value it provides.
  </p>
  <div class="project-tech">
    <span class="tech-badge">React</span>
    <span class="tech-badge">TypeScript</span>
  </div>
  <!-- Update the GitHub link -->
  <a href="https://github.com/yourusername/your-repo" ...>
</article>
```

---

## 🎨 Step 3: Change Colors

Open `css/style.css` and find the `:root` section (around line 50):

### Default Colors (Dark Theme)

```css
:root {
  --bg-primary: #080810;      /* Main background */
  --bg-secondary: #0F0F1A;    /* Secondary background */
  --bg-card: rgba(255,255,255,0.04);  /* Card background */
  --text-primary: #F0EEF6;    /* Main text color */
  --text-secondary: #9991B8;  /* Secondary text */
  --accent: #6B46FF;          /* Primary accent (electric indigo) */
  --accent-2: #FF4B8B;        /* Secondary accent (hot pink) */
}
```

### Quick Color Presets

**Ocean Blue Theme:**
```css
--accent: #0077B6;
--accent-2: #00B4D8;
--bg-primary: #03071E;
```

**Forest Green Theme:**
```css
--accent: #2D6A4F;
--accent-2: #52B788;
--bg-primary: #081C15;
```

**Minimal Black & White:**
```css
--accent: #333333;
--accent-2: #666666;
--bg-primary: #000000;
--bg-secondary: #111111;
```

**Sunset Orange Theme:**
```css
--accent: #FF6B35;
--accent-2: #F7C59F;
--bg-primary: #1A1A2E;
```

### Light Theme Colors

Find `[data-theme="light"]` (line 85) and customize:

```css
[data-theme="light"] {
  --bg-primary: #FAFAF8;
  --bg-secondary: #F0EEF6;
  --text-primary: #0A0A14;
  --text-secondary: #5A5278;
}
```

---

## 🚀 Step 4: Add Your Projects

### Adding a New Project Card

Copy this template and paste it inside `.projects-grid`:

```html
<article class="project-card reveal">
  <div class="project-card-header">
    <div class="project-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    </div>
    <div class="project-links">
      <a href="YOUR_GITHUB_URL" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
        </svg>
      </a>
      <a href="YOUR_LIVE_DEMO_URL">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          <polyline points="15 3 21 3 21 9"/>
          <line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
      </a>
    </div>
  </div>
  <h3 class="project-title">Project Name</h3>
  <p class="project-description">
    Brief description of what this project does and the problem it solves.
  </p>
  <div class="project-tech">
    <span class="tech-badge">Tech1</span>
    <span class="tech-badge">Tech2</span>
    <span class="tech-badge">Tech3</span>
  </div>
</article>
```

### Tips for Project Descriptions

- **Focus on impact**: What problem does it solve?
- **Keep it concise**: 2-3 sentences max
- **Include tech stack**: What technologies did you use?
- **Add metrics if possible**: "100+ users", "50% faster"

---

## 🌐 Step 5: Deploy to GitHub Pages

### Method 1: GitHub Pages (Recommended)

1. **Push your code:**
   ```bash
   git init
   git add .
   git commit -m "🚀 Initial portfolio setup"
   git branch -M main
   git remote add origin https://github.com/yourusername/repo.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repo on GitHub
   - Click **Settings** → **Pages**
   - Under "Source", select: **Deploy from a branch**
   - Branch: **main** / Folder: **/ (root)**
   - Click **Save**

3. **Wait 2-5 minutes** - Your site will be live at:
   ```
   https://yourusername.github.io/repo-name/
   ```

### Method 2: Netlify (Alternative)

1. Drag and drop your folder to [Netlify Drop](https://app.netlify.com/drop)
2. Done! Instant deployment.

### Method 3: Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Done!

---

## 🐛 Troubleshooting FAQ

### Q1: Site shows "File not found"
**A:** Make sure `index.html` is in the root of your repo, not in a subfolder.

### Q2: Changes aren't showing
**A:** Hard refresh with `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac). Clear browser cache.

### Q3: Mobile menu not working
**A:** Check that `js/main.js` is loaded. Open browser console (F12) for errors.

### Q4: Typewriter effect not showing
**A:** Ensure the `data-typewriter` attribute has valid JSON array:
```html
<span data-typewriter='["String 1", "String 2"]'></span>
```

### Q5: Colors not changing
**A:** Make sure you're editing the correct selector (`:root` for dark, `[data-theme="light"]` for light).

### Q6: Images not loading
**A:** Check file paths. Use relative paths like `assets/image.png` not absolute.

### Q7: GitHub Pages shows old version
**A:** Wait 2-5 minutes. GitHub Pages has a slight delay. Check Actions tab for build status.

---

## 🎨 Customization Recipes

### Make It Minimal

Remove decorative elements, keep only essentials:

1. **Remove particles** - Delete `.hero-particles` from HTML
2. **Remove cursor** - Comment out cursor JS in `main.js`
3. **Simplify colors** - Use black, white, gray only
4. **Reduce animations** - Add `@media (prefers-reduced-motion)`

```css
/* Minimal color scheme */
:root {
  --bg-primary: #000000;
  --text-primary: #FFFFFF;
  --accent: #333333;
}
```

### Make It Colorful

Add vibrant gradients everywhere:

```css
/* Update gradient in :root */
--gradient: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);

/* Add to buttons */
.btn-primary {
  background: var(--gradient);
}

/* Add to text */
.hero-title {
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Add a Blog Section

Add after projects section:

```html
<section id="blog" class="blog">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Latest Posts</h2>
    </div>
    <div class="blog-grid">
      <article class="blog-card">
        <h3>Post Title</h3>
        <p>Excerpt...</p>
        <a href="#">Read more →</a>
      </article>
    </div>
  </div>
</section>
```

### Add Resume Download

In hero CTA section:

```html
<div class="hero-cta">
  <a href="#projects" class="btn btn-primary">View My Work</a>
  <a href="assets/resume.pdf" download class="btn btn-secondary">
    Download Resume
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  </a>
</div>
```

### Add Google Analytics

In `index.html` head, add:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 🎯 Next Steps

After setup:

1. ✅ Test on multiple devices
2. ✅ Share your portfolio URL
3. ✅ Add to your LinkedIn, Twitter
4. ✅ Consider connecting a custom domain
5. ✅ Keep updating with new projects!

---

## 📞 Need Help?

- Open an [issue](https://github.com/subhamrexpaul/devportfolio-starter-kit/issues)
- Check existing [discussions](https://github.com/subhamrexpaul/devportfolio-starter-kit/discussions)
- Review the [CONTRIBUTING.md](../CONTRIBUTING.md) guide

---

<div align="center">

**Happy building! 🚀**

[Back to README](../README.md)

</div>
