// src/data/resume.tsx
import {
    Github,
    Linkedin,
    Mail,
    Zap,
    Accessibility,
    MessageSquareText,
} from "lucide-react";
import { SiteConfig } from "@/types";
import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";

export const resume: SiteConfig = {
    name: "Keisha Gwen Paraiso",
    location: "Valenzuela City, Metro Manila",
    email: "keishaparaiso@gmail.com",

    typewriterWords: ["systems.", "user-friendly apps.", "solutions."],

    bio: [
        "I build clean and user-friendly", // Note: Typewriter effect follows this line
        "As an IT student, I focus on developing practical systems such as WinForms applications and web-based projects using PHP and MySQL.",
        "I enjoy designing interfaces that are simple, functional, and visually appealing, while continuously improving my skills in system analysis and software development. :)"
    ],

    contact: {
        socials: [
            { name: "GitHub", url: "https://github.com/xyue23", icon: Github},
            { name: "LinkedIn", url: "https://www.linkedin.com/in/keishaparaiso", icon: Linkedin},
            {
                name: "Instagram",
                url: "https://www.instagram.com/keimmyy/",
                icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" {...props}>
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                    </svg>
                )
            },
            { name: "Email", url: "mailto:keishaparaiso@gmail.com", icon: Mail },
        ]
    },

    skills: [
        "Python", "Java", "HTML", "CSS", "JavaScript", "C#", "PHP",
        "MySQL", "SQL Server", "Git", "UI/UX", "ASP.NET"
    ],

    attributes: [
        {
            label: "Accessibility Focused",
            description: "I build for everyone.",
            icon: Accessibility,
            color: "text-blue-400"
        },
        {
            label: "Performance First",
            description: "I optimize for speed and efficiency.",
            icon: Zap,
            color: "text-amber-400"
        },
        {
            label: "Clear Communication",
            description: "I'll give you jargon or plain English. Whichever you prefer.",
            icon: MessageSquareText,
            color: "text-emerald-400"
        },
    ],

    experience: [
        {
            type: "work",
            company: "Aqua SmartGuard",
            logo: "/experience/aqua.webp",
            icon: "ASG",
            containerClass: "bg-pink-500/10 border-pink-500/20",
            textClass: "text-pink-400",
            title: "Assistant Encoder",
            period: "November 2024 – January 2026",
            highlights: [
                "Encoded and organized receipt data with high accuracy.",
                "Verified and validated information to ensure data consistency.",
                "Handled structured data input and basic record management.",
            ],
        },
        {
            type: "work",
            company: "Upwork",
            logo: "/experience/upwork.webp",
            icon: "UW",
            containerClass: "bg-pink-500/10 border-pink-500/20",
            textClass: "text-pink-400",
            title: "Assistant Bookkeeper",
            period: "May 2020 – May 2020",
            highlights: [
                "Managed and organized financial records with accuracy.",
                "Ensured data consistency and attention to detail.",
            ],
        },
        {
            type: "education",
            company: "Pamantasan ng Lungsod ng Valenzuela",
            logo: "/experience/PamantasanNgLungsodNgValenzuelaLogo.webp",
            icon: "PLV",
            containerClass: "bg-red-500/10 border-red-500/20",
            textClass: "text-red-400",
            title: "BS Information Technology",
            period: "August 2023 - Present",
            highlights: [
                "Focused on System Analysis and Software Development.",
                "Developed multiple academic projects including a WinForms system and PHP-based review system.",
                "Experienced in C#, PHP, MySQL, and basic UI/UX design.",
            ],
        },
        
    ],

    projects: [
        {
            title: "DropSilk",
            client: "Personal Project",
            timeline: "Ongoing",
            techStack: ["JavaScript", "WebRTC", "WebSocket"],
            images: ["/dropsilk/SSIV2.webp", "/dropsilk/ds1.png"],
            description: "DropSilk is a peer-to-peer file sharing application that enables users to transfer files directly between devices without relying on cloud storage. It prioritizes privacy and speed by establishing a secure, direct connection between users.",
            scope: "Frontend & Systems Architecture",
            responsibilities: [
                "Developing the front-end using vanilla JavaScript, HTML, and CSS.",
                "Implementing peer-to-peer file transfer and screen sharing functionality using WebRTC.",
                "Setting up a WebSocket signaling server to facilitate WebRTC connections.",
            ],
            languages: ["JavaScript", "HTML", "CSS"],
            repoUrl: "https://github.com/xyue23/dropsilk",
            demoUrl: "https://dropsilk.xyz",
        },
        {
            title: "CloneReaper Prime",
            client: "Open Source",
            timeline: "4 weeks",
            techStack: ["Python", "Multiprocessing"],
            images: ["crp/crp-ascii.webp"],
            description: "A high-performance, cross-platform utility for finding and managing duplicate files. It leverages parallel processing for fast hashing and offers multiple safe removal options.",
            scope: "System Utility",
            responsibilities: [
                "Developing a high-performance, two-stage scanning engine.",
                "Building both a user-friendly interactive menu and CLI mode.",
            ],
            languages: ["Python"],
            repoUrl: "https://github.com/xyue23/clone-reaper-prime",
        },
        {
            title: "Imgur Archive Viewer",
            client: "Open Source",
            timeline: "3 weeks",
            techStack: ["Python", "Tkinter", "API"],
            images: ["iav/iav.webp"],
            description: "A modern desktop application for finding and recovering lost or deleted Imgur media from the Internet Archive's Wayback Machine.",
            scope: "Desktop Application",
            responsibilities: [
                "Designing the GUI using Tkinter and sv-ttk.",
                "Implementing multi-threaded architecture.",
            ],
            languages: ["Python"],
            repoUrl: "https://github.com/xyue23/imgur-archive-viewer",
        },
        {
            title: "Bandar Breakdowns",
            client: "Personal Project",
            timeline: "Ongoing",
            techStack: ["HTML", "CSS", "JavaScript"],
            images: ["tbb/tbb.webp"],
            description: "A personal blog and website featuring articles and stories on topics like student life, food, and personal experiences.",
            scope: "Frontend Development",
            responsibilities: [
                "Designing and developing the website's front-end.",
                "Envisioning and designing a brand identity.",
            ],
            languages: ["HTML", "CSS", "JavaScript"],
            repoUrl: "https://github.com/xyue23/BandarBreakdowns",
            demoUrl: "https://bandar-breakdowns.vercel.app"
        },
        {
            title: "Gemini Translator",
            client: "Open Source",
            timeline: "4 weeks",
            techStack: ["Browser Ext", "JavaScript"],
            images: ["gt/gtp.webp"],
            description: "A feature-rich browser extension that leverages the Google Gemini API to provide high-quality translations for entire web pages.",
            scope: "Browser Extension",
            responsibilities: [
                "Developing Manifest V3 service worker.",
                "Integrating Google Gemini API.",
            ],
            languages: ["JavaScript", "HTML", "CSS"],
            repoUrl: "https://github.com/xyue23/GeminiTranslate"
        },
        {
            title: "Sorting Visualizer",
            client: "Open Source",
            timeline: "6 weeks",
            techStack: ["Python", "Pygame"],
            images: ["sav/sav.webp"],
            description: "An interactive desktop application that provides a visual and auditory representation of various sorting algorithms.",
            scope: "Desktop Application",
            responsibilities: [
                "Developing core visualization engine using Pygame.",
                "Implementing classic sorting algorithms.",
            ],
            languages: ["Python"],
            repoUrl: "https://github.com/xyue23/sorting-visualizer"
        },
    ],
};