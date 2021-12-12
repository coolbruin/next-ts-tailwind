import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { IProject, IService, ISkill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Python </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about: "stunning user interface designer using <b>Figma</b> ",
  },
];

export const languages: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "40",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "30",
  },
  {
    Icon: BsCircleFill,
    name: "Vue",
    level: "25",
  },
  {
    Icon: BsCircleFill,
    name: "Laravel",
    level: "30",
  },
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "40",
  },
];

export const tools: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "25",
  },
  {
    Icon: BsCircleFill,
    name: "Azure",
    level: "40",
  },
];

export const projects: IProject[] = [
  {
    name: "next-ts-tailwind",
    description: "This app",
    image_path: "/images/",
    deployed_url: "/",
    github_url: "/",
    category: ["react"],
    key_techs: ["Next.js", "TypeScript", "TailwindCSS"],
  },
];
