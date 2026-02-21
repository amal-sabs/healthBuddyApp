# HealthBuddy App

HealthBuddy App is a single-page UX case study website that presents research, design artifacts, and usability testing for a healthcare reminder and appointment-support mobile app concept.

## Overview

This project showcases the end-to-end UX process for a health management product focused on:

- medication adherence
- appointment scheduling
- caregiver support
- clarity and usability in daily health routines

The site is built with plain HTML, CSS, and JavaScript (no framework), making it easy to maintain and deploy.

## Features

- **Section-based storytelling**: Introduction, Research, Design, Testing, and Reflection
- **Sticky top navigation** with scrollspy highlighting the active section
- **Mobile menu toggle** for smaller screens
- **Fade-in animations** using `IntersectionObserver`
- **Zoomable images** (personas, journeys, storyboard, sketches, wireframes, flowchart)
  - click any image with class `zoomable` to open full-screen overlay
  - press `Esc` or click the dark backdrop to close
  - images marked with `zoomable-card` keep a white background in zoom view (good for transparent PNGs)
- **Responsive layout** with flexible containers for text/image sections

## Tech Stack

- HTML5
- CSS3 (custom properties, media queries, flexbox)
- Vanilla JavaScript (DOM events, IntersectionObserver)

## Project Structure

```text
healthBuddyApp/
├─ index.html        # Main single-page case study content
├─ style.css         # Visual design, layout, responsiveness, animations
├─ script.js         # Interactions (zoom overlay, nav, scrollspy, fade-in)
├─ images/           # Visual assets (personas, journeys, storyboard, etc.)
└─ README.md
```

## Getting Started

### Option 1: Open directly

Open `index.html` in your browser.

### Option 2: Use a local server (recommended)

Use VS Code Five Server / Live Server for auto-reload while editing.

## Editing Guide

### Add a new section

1. Add a new `<section id="..." class="section fade-in">` block in `index.html`
2. Add a matching nav link (`href="#your-id"`) in the header nav

### Add a zoomable image

Use:

```html
<img src="images/your-image.png" class="zoomable" alt="Description" />
```

If the image has transparency and should have a white card effect (including in zoom view):

```html
<img
  src="images/your-image.png"
  class="zoomable zoomable-card"
  alt="Description"
/>
```

### Update colors/theme

Edit CSS variables in `:root` inside `style.css`:

- `--dark`
- `--primary`
- `--secondary`
- `--accent`
- `--white`

## Accessibility Notes

- Images include `alt` text for context
- Zoom overlay can be dismissed with keyboard (`Esc`)
- Responsive behaviors improve usability on smaller devices

## Known Limitations

- Content is currently static (no backend or persisted data)
- Some sections are still placeholders and can be expanded
- No automated test suite yet

## Future Improvements

- Add reference list details in the Reflection section
- Add analytics/interaction tracking for portfolio insights
- Improve keyboard focus management for overlay and nav interactions
- Introduce lightweight content management for easier updates

## License

No license file is currently included. Add one if you plan to distribute or open-source this project.
