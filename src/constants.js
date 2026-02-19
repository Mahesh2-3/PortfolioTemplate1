/**
 * =========================================================================================
 *  CONSTANTS & CONFIGURATION FILE
 * =========================================================================================
 *
 *  Welcome! This file allows you to change the content of your website without touching the code.
 *
 *  INSTRUCTIONS:
 *  1. Text: Simply replace the text inside the quotes "".
 *  2. Images:
 *     - Place your images in the "public" folder (located in the root directory).
 *     - Reference them here using the path starting with "/" (e.g., "/my-image.png").
 *  3. Lists: sections like "works" or "projects" are arrays [ ... ]. You can add more items
 *     by copying an existing item (from { to }), pasting it, and modifying the details.
 *
 *  NOTE: Save this file after making changes, and your website will update automatically!
 *
 * =========================================================================================
 */

// NAVIGATION LINKS
// These are the links that appear in the top navbar.
// 'src' is the ID of the section to scroll to (must match the ID in the code, e.g., #home, #projects).
// 'text' is what the user sees in the menu.
export const Navlinks = [
  {
    src: "#home",
    text: "Home",
  },
  {
    src: "#experience",
    text: "Experience",
  },
  {
    src: "#projects",
    text: "Projects",
  },
  {
    src: "#contact",
    text: "Contact",
  },
];

// HERO / HOME SECTION
// This is the first section users see.
export const hero = {
  // Your Name
  name: "John Adams",

  // Your greeting text just before your name
  greeting: "Hello! I am",

  // Your Main Role (e.g., Designer, Developer)
  role: "Designer",

  // A short quote or tagline under your role
  quote: "Who judges a book by its cover...",

  // The text saying where you work
  workingAtTitle: "I'm Currently working at",
  currentlyWorking: "facebook",

  // Your main introduction paragraph
  about:
    "A self-taught UI/UX designer, functioning in the industry for 3+ years now. I make meaningful and delightful digital products that create an equilibrium between user needs and business goals.",

  // IMAGES for the Hero Section
  // Place these in the 'public' folder.
  images: {
    profile: "/Me.svg", // Your profile picture
    gradient: "/Gradient.svg", // Background gradient effect
    arrow: "/Arrow.svg", // Decorative arrow
  },
};

// WORK EXPERIENCE SECTION
export const experiences = {
  heading: "WORK EXPERIENCE",
  // List of your work history
  works: [
    {
      icon: "we1.svg", // Icon file in 'public' folder
      title: "Frontend Developer",
      company: "TechVision",
      desc: "Built and maintained responsive user interfaces with React, improving load time and user experience.",
    },
    {
      icon: "we2.svg",
      title: "Backend Developer",
      company: "CloudCore",
      desc: "Designed and optimized REST APIs using Node.js and MongoDB, ensuring scalability and security.",
    },
    {
      icon: "we3.svg",
      title: "UI/UX Designer",
      company: "PixelCraft",
      desc: "Created wireframes and prototypes, enhancing user satisfaction by focusing on intuitive design.",
    },
    {
      icon: "we4.svg",
      title: "Software Engineer Intern",
      company: "InnoSoft",
      desc: "Collaborated with senior developers to implement new features, debug issues, and improve product performance.",
    },
  ],
};

// SKILLS SECTION
export const skillsContent = {
  heading: "Skills",
  // List of technologies you know
  skills: [
    {
      src: "/tech/html.png", // Icon path
      name: "HTML", // Skill name
    },
    {
      src: "/tech/css.png",
      name: "CSS",
    },
    {
      src: "/tech/javascript.png",
      name: "JavaScript",
    },
    {
      src: "/tech/reactjs.png",
      name: "ReactJS",
    },
    {
      src: "/tech/tailwind.png",
      name: "TailwindCSS",
    },
    {
      src: "/tech/github.png",
      name: "Github",
    },
    {
      src: "/tech/mongodb.png",
      name: "MongoDB",
    },
  ],
};

// PROJECTS SECTION
export const projectsContent = {
  heading: "Projects",
  featuredLabel: "Featured Project",
  liveDemoLabel: "Live Demo",
  githubLabel: "GitHub",

  // List of your projects
  projects: [
    {
      title: "Example Project",
      link: "https://google.com", // Link to the live project
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aspernatur cum quidem, libero illum culpa officiis reiciendis laborum at molestiae asperiores?",
      github: "#", // Link to the GitHub repository
      img: "https://via.placeholder.com/600x400.png?text=Project+1", // Project screenshot
    },
    {
      title: "Example Project",
      link: "https://google.com",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aspernatur cum quidem, libero illum culpa officiis reiciendis laborum at molestiae asperiores?",
      github: "#",
      img: "https://via.placeholder.com/600x400.png?text=Project+2",
    },
    {
      title: "Example Project",
      link: "https://google.com",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aspernatur cum quidem, libero illum culpa officiis reiciendis laborum at molestiae asperiores?",
      github: "#",
      img: "https://via.placeholder.com/600x400.png?text=Project+3",
    },
  ],
};

// CONTACT SECTION
export const ContactContent = {
  heading: "Contact Me",
  line: "I'm currently looking to join a cross-functional team that values improving people's lives through accessible design. Or have a project in mind? Let's connect.",
  email: "example@gmail.com",
  image: "/fist-bump.gif", // Decorative image

  // Social Media Links
  links: [
    {
      name: "LinkedIn",
      url: "#",
    },
    {
      name: "Github",
      url: "#",
    },
    {
      name: "Instagram",
      url: "#",
    },
  ],
};
