// Array containing project data
const projects = [
  {
    title: "Devdynamos",
    description: "Businesss landing. This project is a page ",
    image: "../src/images/projects/devdynamos.png",
    link: "https://devdynamos.co.ke/",
    stack: ["React", "Tailwind", "Typescript", "Vite"],
  },
  {
    title: "Dambula",
    description: "This isan eccomerce app for purchasing grocery online",
    image: "../src/images/projects/dambula.jpg",
    link: "https://dambula.vercel.app/",
    stack: ["React", "Tailwind", "Typescript", "Vite"],
  },
  {
    title: "ESW",
    description: "This is a mobile and web app project for a cab service",
    image: "../src/images/projects/esw.jpg",
    link: "#",
    stack: ["React-Native", "Tailwind", "Typescript", "Expo"],
  },
  {
    title: "Devdynamos Ui",
    description: "UI components for faster web development",
    image: "../src/images/projects/devdynamos.png",
    link: "https://devdynamos.co.ke/",
    stack: ["React", "Css", "Typescript", "Vite"],
  },
  {
    title: "Mwangale Law",
    description: "Law firm business page",
    image: "../src/images/projects/mwangale.jpg",
    link: "https://mwangale-law.onrender.com/",
    stack: ["JavaScript", "Css", "Tailwind", "Express", "WebPack"],
  },
  // Add more projects here
];

// Function to generate project cards and append to the projects section
function renderProjects() {
  const projectsContainer = document.querySelector(".projects-container");
  const spinner = document.querySelector("#projects-spinner");

  projects.forEach((project) => {
    // Create the project card element
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");

    // Create image element
    const projectImage = document.createElement("img");
    projectImage.src = project.image;
    projectImage.alt = project.title;

    // Create the project info div
    const projectInfo = document.createElement("div");
    projectInfo.classList.add("project-info");

    // Create project title
    const projectTitle = document.createElement("h3");
    projectTitle.textContent = project.title;

    // Create project description
    const projectDescription = document.createElement("p");
    projectDescription.textContent = project.description;

    // Create the project stack container
    const projectStack = document.createElement("div");
    projectStack.classList.add("project-stack");

    // Create and append each tech item to the project stack
    project.stack.forEach((tech) => {
      const techItem = document.createElement("span");
      techItem.classList.add("tech-item");
      techItem.textContent = tech;
      projectStack.appendChild(techItem);
    });

    // Create project link
    const projectLink = document.createElement("a");
    projectLink.classList.add("project-link");
    projectLink.href = project.link;
    projectLink.textContent = "View Project";

    // Append elements to the project info div
    projectInfo.appendChild(projectTitle);
    projectInfo.appendChild(projectDescription);

    projectInfo.appendChild(projectLink);
    projectInfo.appendChild(projectStack); // Append the project stack here
    // Append the image and info to the project card
    projectCard.appendChild(projectImage);
    projectCard.appendChild(projectInfo);

    // Append the project card to the projects container
    projectsContainer.appendChild(projectCard);
  });

  spinner.classList.toggle("hidden");
}

// Execute the function to render projects when the page loads
document.addEventListener("DOMContentLoaded", renderProjects);
