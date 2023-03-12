import { ProjectTypes } from "./types";
import canaraEveningCollege from "@/assets/canaraEveningCollege.png";
import senecaMusicImg from "@/assets/senecaMusic.png";
import TolindoProject from "@/assets/TolindoProject.png";
import CityBike from "@/assets/bikeTrips.png";
//import ekart from "@/assets/ekart.png";
//import platino from "@/assets/platino.png";

export const projectLists: ProjectTypes[] = [
  {
    title: "Seneca Music",
    description:
      "Web application that displays the most updated music information available on Spotify. This app also allows the user to create a list of favorite songs and display them in the favorites section. ",
    imageSrc: senecaMusicImg,
    liveDemoLink: "https://seneca-music-web-app.netlify.app",
    codeLink: "https://github.com/edgarcia-torres/SENECA-MUSIC-WEB-APP",
    tools: ["Angular", "Bootstrap", "Typescript", "Mongo DB", "Express JS"],
  },
  {
    title: "TOlindo deliveries",
    description:
      "Web application for a company dedicated to deliver all kinds of packages. I work in TOlindo as Front end developer enhancing user interface and implementing new functionalities.",
    imageSrc: TolindoProject,
    isCodeAvailable: false,
    liveDemoLink: "https://www.tolindo.ca/",
    tools: ["React.js", "Bootstrap", "Javascript",],
  },
  {
    title: "New York CityBike Trips",
    description: "This is my first project developed with React.js framework. This web app displays information and renders maps of the bike trips registered in a Mongo database and allows the user to modify some information.",
    imageSrc: CityBike,
    liveDemoLink: "https://new-york-citibike-trips.vercel.app/",
    codeLink: "https://github.com/edgarcia-torres/New-York-Citibike-Trips",
    tools: ["React.js", "Node.js", "Mongo DB", "Bootstrap", "SASS"],
  },
  // {
  //   title: "Platino",
  //   description: "A Portfolio resort booking website for platino resort.",
  //   imageSrc: platino,
  //   liveDemoLink: "https://platino-resort.vercel.app/",
  //   codeLink: "https://github.com/Sumukha210/platino-resort",
  //   tools: ["Next.js", "Typescript", "Mongo DB", "Styled Components", "Gsap"],
  // },
];
