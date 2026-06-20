# PostPilot

PostPilot is a minimalist, reflective design studio for modern content creators. Designed to prioritize typography and clean layouts, it empowers creators to design high-quality editorial content—like carousels and text-based posts—directly in their browser without the overhead of heavy graphic design software or complex social platform APIs.

---

## 🌟 Vision & Intention

Many platforms force creators through complicated API authorization loops, developer app registrations, and Facebook/Meta Business portfolio mappings just to publish simple posts. 

PostPilot takes a different approach: **Zero-Auth, Zero-friction, and 100% Client-Side**. It acts as a local creative companion where you can visualize, draft, and package beautiful typography-driven carousels. Once ready, PostPilot generates high-quality assets and guides you through uploading them directly to your platform of choice.

---

## 🚀 Key Features

### 1. Instagram Carousel Studio
*   **Live Interactive Mockup**: An interactive mobile preview mockup that supports native mouse drag and touch swipe gestures, replicating the real Instagram browsing experience.
*   **Aesthetic Editorial Themes**: Four curated color palettes optimized for reflective and spiritual content:
    *   *Sacred Sands*: Warm cream light layouts and soft black dark slides with gold accents.
    *   *Emerald Devotion*: Off-white light slides and deep forest-green dark backgrounds.
    *   *Sage & Cream*: Cream light layouts and ink black dark backgrounds with muted sage accents.
    *   *Classic Ivory & Graphite*: Minimalist dark charcoal and start-white high-contrast pages.
*   **Custom Typography & Layout**: 
    *   Arabic script heading support rendered in classical font families (Amiri).
    *   Dynamic optional inputs for translations, quotes, citations, and body blocks.
    *   Per-slide text alignment options (Left, Center, Right) to match different reading flows.
*   **Mockup Branding Overlays**: Configurable, environment-backed headers displaying custom social handles and display names.

### 2. Zero-Auth Publishing Pipeline
*   **Instant ZIP Packaging**: Renders slides as high-definition PNG images (scaled at `pixelRatio: 2` to keep scriptures and small details crisp) and packages them into a `.zip` file entirely in the browser.
*   **Autocopy Captions**: Automatically copies your post caption and hashtags to the clipboard when you trigger the ZIP download.
*   **Meta Upload Guide**: Provides a step-by-step upload walkthrough and quick-access composer link: [Meta Business Suite](https://business.facebook.com/latest/composer).

### 3. JSON Import/Export & Schema Validation
*   Save drafts locally or share layouts with other team members. Paste or load any custom JSON schema draft and import it directly into the interactive workspace.

### 4. Interactive Design System
*   A dedicated visual playground displaying typography hierarchies, buttons, inputs, card components, color chips, and brand tokens used throughout the app.

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Defaults
Create a `.env` file in the root directory (based on `.env.example` template):
```env
NEXT_PUBLIC_DEFAULT_INSTAGRAM_HANDLE=@username
NEXT_PUBLIC_DEFAULT_DISPLAY_NAME=Name
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to launch your workspace.

---

## 📅 In the Pipeline

We are actively expanding PostPilot's capabilities to support more publishing formats:

*   **LinkedIn Creator Studio (Coming Soon)**:
    *   Clean, professional document layouts optimized for LinkedIn carousel formats.
    *   Instant PDF compilation and download (the preferred format for LinkedIn document carousels).
    *   Post copy previewer and character limit diagnostics.
*   **Twitter/X Thread Visualizer**:
    *   Visual thread previewing to draft and format tweets perfectly.
*   **Custom SVG Asset Exporters**:
    *   Exporting vector-based SVGs for ultra-sharp typography sharing.
