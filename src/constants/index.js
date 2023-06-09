import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Mohamed proved me wrong.",
      name: "Osama Elzero",
      designation: "CFO",
      company: "Acme Co",
      image: "https://avatars.githubusercontent.com/u/3822745?v=4",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Mohamed does.",
      name: "Mohamed hamad",
      designation: "COO",
      company: "DEF Corp",
      image: "https://avatars.githubusercontent.com/u/4595478?v=4",
    },
    {
      testimonial:
        "After mohammed optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Ahmed Mtwaly",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Metwally_white_desert_01.jpg/300px-Metwally_white_desert_01.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Kasper",
      description:
        "Web-based platform that allows users to search, book, and manage phone rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "Css",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Mohammedfouadd/Kasper",
    },
    {
      name: "Fouad",
      description:
        "Demo web application To test capabilities and highlight my talent while talking about games, it is a responsive application with all screens.",
      tags: [
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Mohammedfouadd/third-project",
    },
    {
      name: "Bondi",
      description:
        "Demo web application To test capabilities and highlight my talent while talking about games, it is a responsive application with all screens.",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrab",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Mohammedfouadd/bondi",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };