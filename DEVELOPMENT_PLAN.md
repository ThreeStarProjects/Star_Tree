# LinkTree Alternative - Development Plan

## For Claude Code Development

---

## 1. PROJECT OVERVIEW

Build a personalized social landing page (linktree alternative) that displays:

- Profile section with avatar, username, and bio
- Social media links with icons
- Spotlight/featured content card
- Recent posts/links with customizable cards
- Click tracking and analytics (optional)
- Responsive design for mobile and desktop
- Easy customization without coding

---

## 2. TECHNICAL STACK

| Technology | Choice | Rationale |
|---|---|---|
| Frontend | React + TypeScript | Component reusability, type safety |
| Styling | Tailwind CSS | Rapid UI development, responsive design |
| Icons | Lucide React | Social media & UI icons |
| State Management | React Context API | Simple, no external dependencies |
| Data Storage | JSON config file | Easy setup, easily extensible |
| Hosting | Vercel | Free tier, seamless React deployment |

---

## 3. CORE FEATURES

### 3.1 Profile Section
- Circular avatar image (customizable)
- Username/display name
- Bio/tagline (supports emojis)
- Customizable background color or gradient
- Options menu button (...)

### 3.2 Social Media Links
- Display social icons (Facebook, Instagram, LinkedIn, Twitter, TikTok, etc.)
- Each icon links to respective profile
- Easily add/remove social links
- Hover effects for interactivity

### 3.3 Spotlight Section
- Title: "Spotlight" with sparkle emoji (✨)
- Single featured card with custom text/link
- Can be rotated or updated regularly

### 3.4 Recent Posts Section
- Title: "Recent Posts"
- Display grid/list of clickable cards
- Each card shows post title/description
- Cards are clickable (links to external content)
- Unlimited number of posts/links
- Customize card styling (colors, borders)

### 3.5 Optional Features
- Dark/light mode toggle
- Click analytics dashboard
- Export profile as QR code
- Custom domain support

---

## 4. DATA STRUCTURE

Configuration file (`config.json`) structure:

```json
{
  "profile": {
    "name": "Your Name",
    "handle": "@yourhandle",
    "bio": "Your bio here 🚀",
    "avatar": "https://...",
    "backgroundColor": "#FF6B5B",
    "textColor": "#FFFFFF"
  },
  "socialLinks": [
    {
      "platform": "facebook",
      "url": "https://facebook.com/...",
      "icon": "facebook"
    },
    {
      "platform": "instagram",
      "url": "https://instagram.com/...",
      "icon": "instagram"
    },
    {
      "platform": "linkedin",
      "url": "https://linkedin.com/...",
      "icon": "linkedin"
    },
    {
      "platform": "twitter",
      "url": "https://twitter.com/...",
      "icon": "twitter"
    },
    {
      "platform": "tiktok",
      "url": "https://tiktok.com/...",
      "icon": "music"
    }
  ],
  "spotlight": {
    "title": "Spotlight",
    "card": {
      "title": "Featured Content",
      "url": "https://..."
    }
  },
  "recentPosts": [
    {
      "id": 1,
      "title": "Check out what's new with HubSpot",
      "url": "https://...",
      "emoji": "🎉"
    },
    {
      "id": 2,
      "title": "The 2023 Global Unicorn Report",
      "url": "https://...",
      "emoji": "📊"
    },
    {
      "id": 3,
      "title": "Marketing Sales Leader Top 25 — Winners!",
      "url": "https://...",
      "emoji": "🏆"
    }
  ]
}
```

---

## 5. DESIGN SPECIFICATIONS

### Layout
- Vertical centered layout for mobile-first design
- Max width: 500px on desktop
- Full-screen background color/gradient
- Consistent padding/margins throughout

### Color Scheme (Reference: Coral theme)
- Background: Coral/orange gradient (#FF6B5B to #FF8C42)
- Cards: White with dark borders (#333)
- Text: Dark on white cards, white on background
- Borders: 3-4px rounded corners, dark color
- Hover: Slight scale/shadow effect

### Typography
- Font: Clean sans-serif (e.g., Inter, Poppins)
- Profile name: Large, bold (24-28px)
- Bio: Medium, regular (14-16px)
- Card titles: Medium, bold (16-18px)
- Section headers: Medium-large, bold (18-20px)

### Spacing & Sizing
- Avatar: 80-100px diameter
- Cards: Full width minus padding (~350-400px)
- Card height: ~50-60px (auto based on content)
- Gap between cards: 12-16px
- Social icons: ~24-32px diameter

---

## 6. COMPONENT ARCHITECTURE

### Main Components to Build

```
App
├── ProfileHeader
│   ├── Avatar
│   ├── Username
│   ├── Bio
│   └── OptionsMenu
├── SocialLinks
│   └── SocialIcon (reusable)
├── SpotlightCard
│   └── Card
└── RecentPostsSection
    └── PostCard (reusable)
```

### Component Descriptions

- **ProfileHeader**: Displays avatar, username, bio, and social icons
- **SocialLinks**: Maps through social links array and renders icons
- **SpotlightCard**: Featured content card with custom styling
- **PostCard**: Individual link/post card (reusable for all posts)
- **RecentPostsSection**: Container that maps PostCard components
- **App**: Main layout component, manages state via Context API

---

## 7. IMPLEMENTATION STEPS

### Step 1: Project Setup
- [ ] Use Create React App or Next.js template
- [ ] Install Tailwind CSS
- [ ] Install lucide-react for icons
- [ ] Create folder structure: `components/`, `context/`, `styles/`

### Step 2: Create Core Components
- [ ] ProfileHeader component with avatar, name, bio
- [ ] SocialLinks component with icon rendering
- [ ] SpotlightCard component
- [ ] PostCard component (reusable)
- [ ] RecentPostsSection container

### Step 3: Build Main App Layout
- [ ] Create App.jsx as main component
- [ ] Implement Context API for state management
- [ ] Load config.json and provide data to components
- [ ] Assemble all components into final layout

### Step 4: Styling & Responsiveness
- [ ] Use Tailwind CSS for responsive design
- [ ] Mobile-first approach with breakpoints
- [ ] Add hover effects and transitions
- [ ] Test on all screen sizes

### Step 5: Configuration System
- [ ] Create config.json in `public/` folder
- [ ] Fetch and parse JSON on app initialization
- [ ] Implement error handling for missing config
- [ ] Add default values/fallbacks

### Step 6: Testing & Optimization
- [ ] Test on multiple devices and browsers
- [ ] Optimize images and performance
- [ ] Verify all links are functional
- [ ] Check page load time

### Step 7: Deployment
- [ ] Push code to GitHub repository
- [ ] Connect to Vercel
- [ ] Deploy and test live URL
- [ ] Set up custom domain (optional)

---

## 8. DEPLOYMENT TO VERCEL

### Prerequisites
- GitHub account with code repository
- Free Vercel account (https://vercel.com)

### Deployment Steps
1. Push code to GitHub repository
2. Visit https://vercel.com and sign in with GitHub
3. Click "New Project" and import your repository
4. Accept default build settings
5. Click "Deploy"
6. Get your live `*.vercel.app` URL immediately
7. (Optional) Add custom domain from Vercel dashboard

### After Deployment
- Every push to GitHub automatically redeploys
- Vercel provides a production URL immediately
- Can configure custom domain in Vercel settings

---

## 9. HOW TO CUSTOMIZE

### Easy Customizations (No Code Required)

**Update Profile Information:**
- Edit `public/config.json`
- Change `name`, `handle`, `bio`
- Update colors: `backgroundColor`, `textColor`

**Update Avatar:**
- Upload new image to `public/` folder
- Update avatar URL in config.json

**Add/Remove Social Links:**
- Add/remove entries in `socialLinks` array
- Supported platforms: facebook, instagram, linkedin, twitter, tiktok, github, youtube, etc.

**Add/Remove Posts:**
- Add/remove entries in `recentPosts` array
- Update title, URL, and emoji for each post

**Change Colors:**
- Modify `backgroundColor` and `textColor` in profile object
- Update Tailwind theme in `tailwind.config.js` for full theme change

### Advanced Customizations

- Modify Tailwind theme for different color schemes
- Customize fonts by updating Tailwind config
- Add new components or sections as needed
- Implement new features and deploy automatically

---

## 10. PROJECT FILE STRUCTURE

```
linktree-alternative/
├── public/
│   ├── config.json              # Configuration file (easily editable)
│   ├── avatar.jpg               # Profile avatar image
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ProfileHeader.jsx
│   │   ├── SocialLinks.jsx
│   │   ├── SpotlightCard.jsx
│   │   ├── PostCard.jsx
│   │   └── RecentPostsSection.jsx
│   ├── context/
│   │   └── ConfigContext.jsx    # State management
│   ├── App.jsx                  # Main component
│   ├── App.css                  # Global styles (minimal)
│   └── index.js
├── .gitignore
├── package.json
├── tailwind.config.js           # Tailwind configuration
├── README.md
└── vercel.json                  # (Optional) Vercel config

```

---

## 11. REQUIREMENTS FOR CLAUDE CODE

### Core Requirements
- [ ] Fully responsive design (mobile-first approach)
- [ ] All links open in new tabs (`target="_blank"`)
- [ ] Use only Tailwind CSS for styling (no external CSS files)
- [ ] Easy customization via config.json
- [ ] Proper error handling if config fails to load
- [ ] Optimize images and performance
- [ ] Include sensible defaults in config.json
- [ ] Add code comments for clarity
- [ ] Use React hooks (useState, useEffect, useContext)
- [ ] TypeScript types where appropriate

### Code Quality
- [ ] Clean, readable code with comments
- [ ] Reusable components (DRY principle)
- [ ] Proper component props and PropTypes
- [ ] Handle edge cases (missing data, broken links)
- [ ] Performance optimization (lazy loading, memoization)

### Accessibility
- [ ] Semantic HTML structure
- [ ] ARIA labels where needed
- [ ] Keyboard navigation support
- [ ] Alt text for images

---

## 12. SUCCESS CRITERIA

✅ All sections display correctly (profile, social links, spotlight, posts)  
✅ All links are functional and open in new tabs  
✅ Responsive on mobile, tablet, and desktop devices  
✅ Easy to customize without touching code  
✅ Successfully deployed on Vercel with public URL  
✅ Matches the visual style and layout of the reference image  
✅ Fast page load time (< 2 seconds)  
✅ No console errors or warnings  
✅ All images optimized  
✅ Clean git history with meaningful commits  

---

## 13. GETTING STARTED WITH CLAUDE CODE

1. **Copy this entire markdown file**
2. **Paste it into Claude Code**
3. **Ask Claude Code to:**
   - "Build this linktree alternative following this development plan"
   - "Create all components and styling with Tailwind CSS"
   - "Set up the project structure as specified"
   - "Include config.json with example data"
   - "Make it ready to deploy to Vercel"

4. **After Claude Code builds it:**
   - Download the project
   - Run `npm install` and `npm start` to test locally
   - Push to GitHub
   - Deploy to Vercel
   - Edit `config.json` with your information
   - Share your link!

---

## Reference Image Specifications

Based on your provided image (@hubspot reference):

- Coral/orange background gradient
- Circular avatar with white border
- Username and hashtag below avatar
- Social media icons (Facebook, Instagram, LinkedIn, Twitter/X, TikTok)
- "Spotlight" section with single featured card
- "Recent Posts" section with 7+ clickable cards
- White cards with dark borders and rounded corners
- Centered, mobile-first responsive layout
- Subscribe button in top right

---

## Optional Enhancements

After core features are complete, consider adding:

- **Analytics Dashboard**: Track clicks on each link
- **Dark Mode Toggle**: Switch between light/dark themes
- **Drag & Drop Admin Panel**: Reorder posts without editing JSON
- **Custom Theming**: Let users pick color schemes
- **QR Code Generator**: Share profile as QR code
- **Newsletter Signup**: Integrate email collection
- **View Count**: Display engagement metrics
- **Link Preview Cards**: Show metadata from linked pages

---

## Questions? Tips for Claude Code

- Make it a Next.js project for better performance
- Use TypeScript for better type safety
- Implement React Context for config state
- Optimize images with Next.js Image component
- Add loading states and error boundaries
- Use CSS modules or Tailwind for styling consistency
- Test responsiveness across all breakpoints
- Consider accessibility (a11y) from the start

---

**Ready for Claude Code to Build!** 🚀
