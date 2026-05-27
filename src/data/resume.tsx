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
            title: "Servio",
            client: "Capstone Project",
            timeline: "Ongoing",
            techStack: ["JavaScript", "Python", "HTML", "CSS"],
            images: ["servio/dashboard.webp", "/servio/servio-logo.png"],
            description: "Servio is a lightweight, self-hosted web dashboard designed for managing and monitoring Linux systemd services. It allows developers to deploy, configure environment variables, handle process states, and stream live system logs directly on their own infrastructure without central cloud platform dependencies.",
            scope: "Fullstack & System Integration",
            responsibilities: [
                "Architected the system workflows and data models, creating comprehensive UML, Entity-Relationship (ERD), and system architecture diagrams.",
                "Authored the complete technical documentation and project specification manual detailing API endpoints, system requirements, and user flows.",
                "Collaborated with developers to map out the application's sequential logic and component relations, ensuring clear engineering alignment.",
                "Designed high-fidelity wireframes and user interaction diagrams to define the visual layout and user experience (UX) guidelines."
            ],
            languages: ["JavaScript", "HTML", "CSS"],
            repoUrl: "https://github.com/xyue23/ServioCapstone.git",
            demoUrl: "https://servio.runasp.net",
        },
        {
            title: "Chades",
            client: "Web Development Project",
            timeline: "5 weeks",
            techStack: ["HTML", "CSS", "PHP", "JavaScript"],
            images: ["chades/chades.webp"],
            description: "The CHADES website is a proposed digital platform that allows customers to browse the menu and place orders online, improving convenience and accessibility. It aims to streamline operations and expand the business’s reach beyond its current phone-based ordering system.",
            scope: "Website",
            responsibilities: [
                "Led the design and development of the entire website from concept to implementation.",
                "Designed UI/UX layouts and built responsive web pages using HTML and CSS.",
                "Structured and organized all site sections including menu, contact, gallery, and reviews.",
                "Translated business needs into a functional website prototype to improve ordering workflow."
            ],
            languages: ["HTML", "CSS", "PHP", "JavaScript"],
        },
        {
            title: "Class Records",
            client: "Software Development Project",
            timeline: "5 weeks",
            techStack: ["Python", "JavaScript", "PHP"],
            images: ["classrecords/Class Records-logo.webp", "classrecords/crdashboard.webp"],
            description: "The Class Records website is a digital system designed to manage and organize students’ grades, attendance, and academic records in a centralized platform. It enables teachers to efficiently encode, update, and access records while ensuring accuracy and easier monitoring of student performance.",
            scope: "Website",
            responsibilities: [
                "Developed key pages including the student dashboard, login, and index using PHP, HTML, CSS, and JavaScript.",
                "Implemented front-end structure and basic interactivity for user navigation.",
                "Wrote and assisted in SQL queries for storing and retrieving student records.",
                "Collaborated with the team to integrate frontend components with backend functionality."
            ],
            languages: ["Python", "JavaScript", "PHP", "CSS"],
        },

    ],
};
