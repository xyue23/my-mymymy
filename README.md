<div align="center">
<img src="https://github.com/user-attachments/assets/87a20585-fb8d-4aef-a69e-0ef9afe01fb8" alt="Demo GIF">
<h1>Candy Glass Portfolio</h1>

A modern, fast, and highly customisable portfolio template built with Vite, React, TypeScript, and shadcn/ui. Designed for developers who want a stunning, professional online presence with minimal setup.

<img src="https://img.shields.io/github/license/medy17/Candy-Glass-React-Portfolio?style=for-the-badge" alt="Licence"/>  
<img src="https://img.shields.io/badge/Framework-React-blue?style=for-the-badge&logo=react" alt="React"/>  
<img src="https://img.shields.io/badge/Language-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>  
<img src="https://img.shields.io/badge/Styling-TailwindCSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="TailwindCSS"/>  
<img src="https://img.shields.io/badge/Build%20Tool-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>  
<img src="https://img.shields.io/badge/Package%20Manager-npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm"/>
<p></p>
<p align="center" style="font-size: 1.2rem;">
    <a href="https://ahmed-arat.vercel.app/" style="font-size: 1.1rem;"><strong>Live Demo 🔗</strong></a> <br /><br />
    <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmedy17%2FCandy-Glass-React-Portfolio"><img src="https://vercel.com/button" alt="Deploy with Vercel"/></a>
  </p>
<img src="https://raw.githubusercontent.com/medy17/Candy-Glass-React-Portfolio/refs/heads/main/readme-assets/lighthouse.jpg" alt="lighthouse score" />
</div>

## Features

* **Blazing Fast:** Built with Vite for near‑instant server start and lightning‑fast HMR.
* **Centralised Data:** Customise all content from your name and bio to projects and experience by editing a single file (`src/data/resume.tsx`).
* **Modern Tech Stack:** React, TypeScript, Tailwind CSS, and shadcn/ui.
* **Fully Responsive:** Looks great on all devices, from mobile to desktop.
* **Smooth Animations:** Motion and transitions powered by Framer Motion.
* **Command Menu:** A `Cmd+K` interface for quick navigation.
* **Easy to Deploy:** Get your portfolio online in minutes with services like Vercel or Netlify.

---

## Screenshots


| Home page                                                                                                                                         | Portfolio                                                                                                                                    |
|---------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| <img src="https://raw.githubusercontent.com/medy17/Candy-Glass-React-Portfolio/refs/heads/main/readme-assets/home.jpg" alt="home"> | <img src="https://raw.githubusercontent.com/medy17/Candy-Glass-React-Portfolio/refs/heads/main/readme-assets/portfolio.jpg" alt="portfolio"> |

## Getting Started

Follow the steps below to set up your own portfolio.

### Prerequisites

* [Node.js](https://nodejs.org/en/) (version 18.0 or higher)
* [npm](https://www.npmjs.com/)

---

### Quick Start

1. **Clone the Repository**

```bash
git clone https://github.com/medy17/Candy-Glass-React-Portfolio.git
cd Candy-Glass-React-Portfolio
```

2. **Install Dependencies**

```bash
npm install
```

3. **Run the Development Server**

```bash
npm run dev
```

Your portfolio should now be running at `http://localhost:8080`.

---

## Customisation Guide

The template is designed to be easily customisable. Most of your personal content is defined in one place.


### 1. The Main Data File

Your portfolio content is controlled via **`src/data/resume.tsx`**.  
Edit the fields to match your personal details and preferences.

```ts
// src/data/resume.tsx

export const resume: SiteConfig = {
  name: "Ahmed Arat",
  role: "Full-Stack Developer",
  location: "Kuala Lumpur",
  email: "your.email@example.com",

  typewriterWords: ["interfaces.", "experiences.", "solutions."],

  bio: [
    "I specialise in creating unique and beautiful looking",
    "From bakery menus to real-time collaboration platforms...",
  ],

  skills: [
    "Python", "Java", "HTML", "CSS", "JavaScript", "TypeScript",
    "Astro", "React", "Git", "SQL", "Node.js"
  ],

  experience: [
    {
      type: "work",
      company: "Company Name",
      title: "Your Role",
      period: "Jan 2020 – Present",
    },
  ],

  projects: [
    {
      title: "Project Title",
      client: "Personal Project",
      timeline: "Ongoing",
      techStack: ["React", "Node.js", "PostgreSQL"],
      images: ["/project-folder/image1.webp", "/project-folder/image2.webp"],
    },
  ],
};
```

---

### 2. Replacing Images

Place your images in the `/public` directory and update the paths as needed.

* **Portrait Photos:**
    * `/public/portrait_ahmed_bgless.webp` (Desktop)
    * `/public/portrait_ahmed_bgless_mobile.webp` (Mobile)
    * `/public/portrait_tiny.webp` (Sidebar avatar)
    * Update paths in `src/components/sections/About.tsx` and `src/components/Layout.tsx`

* **Project Images:**
    * Create a folder in `/public` for each project, e.g. `/public/my-cool-project/`
    * Add images there and update the `images` array in the `projects` section of `src/data/resume.tsx`

* **Experience Logos:**
    * Place company or university logos in `/public/experience/`
    * Update the `logo` path under the `experience` section in `src/data/resume.tsx`

---

### 3. Setting Up the Contact Form

The contact form uses [Formspree](https://formspree.io/) for handling submissions.

1. Create a new form on Formspree.
2. Copy your unique Formspree URL (e.g. `https://formspree.io/f/your_unique_id`).
3. Add your Formspree URL as an environment variable.

   You can:
    * Add it to your `.env` file, for example:

      ```env
      VITE_FORMSPREE_URL=https://formspree.io/f/your_unique_id
      ```

    * Or set it directly in the **Environment Variables** section of your project’s hosting service (e.g. Vercel, Netlify) using the key‑value fields.

4. Restart your development server for the changes to apply.

---

## Project Structure

```
.
├── public/               # Static assets (images, fonts)
├── src/
│   ├── components/       # Reusable components (Layout, UI elements)
│   │   ├── sections/     # Page sections (About, Portfolio, etc.)
│   │   └── ui/           # shadcn/ui components
│   ├── data/             # Centralised data (resume.tsx)
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions and constants
│   └── ...               # Main entry point (App.tsx, main.tsx)
├── tailwind.config.ts    # Tailwind CSS configuration
└── vite.config.ts        # Vite configuration
```

---

## Available Scripts

| Command           | Description                                     |
|-------------------|-------------------------------------------------|
| `npm run dev`     | Starts the development server                   |
| `npm run build`   | Builds the app for production                   |
| `npm run lint`    | Runs ESLint to check for code issues            |
| `npm run preview` | Serves the production build locally for preview |

---

## Deployment

You can deploy this project to popular services like Vercel or Netlify.

### Deploying to Vercel

1. Push your code to a GitHub repository.
2. Log in to [Vercel](https://vercel.com/) using your GitHub account.
3. Click **"Add New → Project"** and import your repo.
4. Vercel will detect it's a Vite project.
5. Add your `VITE_FORMSPREE_URL` environment variable in the **Settings → Environment Variables** section.
6. Hit **Deploy** and your portfolio will be live.

### Deploying to Netlify

1. Log in to [Netlify](https://www.netlify.com/).
2. Import your GitHub repository.
3. Netlify will automatically detect the Vite configuration.
4. Add your `VITE_FORMSPREE_URL` variable in the Environment Variables section.
5. Build and deploy.

---

## License

This project is licensed under the MIT Licence.  
See the [LICENCE](LICENCE) file for more details.

---

_This template was created by [Ahmed Arat](https://ahmed-arat.vercel.app)._

Copyright © `2025` `Ahmed Arat`
