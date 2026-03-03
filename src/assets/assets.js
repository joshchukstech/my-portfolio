import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot, FaMapMarkerAlt } from 'react-icons/fa';

import profileImg from '../assets/profile.jpg';
import projectImg1 from '../assets/project1.png';
import projectImg2 from '../assets/project2.png';
import projectImg3 from '../assets/project3.png';
import projectImg4 from '../assets/project4.png';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';



export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    // {
    //   icon: FaPaintBrush,
    //   title: 'Design Oriented',
    //   description: 'Beautiful design and user experience are at the heart of everything I create.',
    //   color: 'text-pink'
    // },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React', 'Vue.js', 'Angular', 'TypeScript']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express']
  },
  {
    title: 'Mobile Development',
    icon: FaMobileAlt,
    description: 'Building cross-platform mobile applications with a single codebase.',
    tags: ['React Native']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'PostgreSQL']
  },

  // {
  //   title: 'Cloud & DevOps',
  //   icon: FaCloud,
  //   description: 'Deploying and managing applications in cloud environments.',
  //   tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
  // },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'VSCode', 'Shopify', 'Vercel','...']
  }
];



export const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with shopping cart, user authentication, and payment processing.",
    image: projectImg1,
    tech: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "https://shopnoun.netlify.app/",
    code: "#",
  },
  {
    title: "Real Estate Websites",
    description: "A website featuring property listings with user-friendly interface.",
    image: projectImg2,
    tech: ["React", "Tailwind CSS", "Firebase", "Cloudinary", "TypeScript"],
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
    demo: "https://joshorealestate.netlify.app/",
    code: "#",
  },
  {
    title: "Landing Page",
    description: "A well-designed page, capable of generating leads, driving sales and promoting services/product.",
    image: projectImg3,
    tech: ["React", "Tailwind CSS", "TypeScript"],
    icons: [FaReact, FaDatabase],
    demo: "https://heliosolar.netlify.app/",
    code: "#",
  },
  {
    title: "Church Website",
    description: "An appealing and functional platform that showcases the church mission, values, and activities.",
    image: projectImg4,
    tech: ["Wix"],
    icons: [FaReact, FaCloud],
    demo: "https://gtmchurch.wixsite.com/givingthetruth",
    code: "#",
  },
  {
    title: "Blog Website",
    description: "...article publishing platform, and engaging user experience.",
    image: projectImg5,
    tech: ["Wordpress"],
    icons: [FaReact, FaNodeJs, FaDatabase ],
    demo: "#",
    code: "#",
  },
  {
    title: "AI Image Generator",
    description: "Generate images using AI prompts powered by OpenAI's DALL·E model and Cloudinary.",
    image: projectImg6,
    tech: ["React", "OpenAI API", "Cloudinary", "Tailwind CSS"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "#",
    code: "#",
  }
];


export const workData = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    duration: "2020 - Present",
    description:
      "Leading frontend development for enterprise clients, implementing modern frameworks, and mentoring junior developers.",
    color: "purple"
  },
  {
    role: "Web Developer",
    company: "Digital Solutions LLC",
    duration: "2018 - 2020",
    description:
      "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",
    color: "pink"
  },
  {
    role: "Junior Developer",
    company: "StartUp Ventures",
    duration: "2016 - 2018",
    description:
      "Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.",
    color: "blue"
  }
];
