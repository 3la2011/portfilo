import React from "react";
import { SiExpress } from "react-icons/si";

import {
  DiBootstrap,
  DiCss3Full,
  DiNodejs,
  DiReact,
  DiMongodb,

  // DiSass,
} from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { BsTabletLandscape } from "react-icons/bs";
/*
import {
  SiPug,
  SiTypescript,
  SiTrello,
  SiGotomeeting,
  SiFirebase,
  SiMongodb,
} from "react-icons/si";
*/
const web = {
  // head: "web development",
  projects: [
    // # First project#
    {
      name: "Social Network",
      date: "2022-7-20",
      summury:
        "You Can Contact With Other People, Is Final Project From DCI (Digital Career Institute) .",
      techo: "Mern Stack",
      coverImg: "/imgs/works/web/1",
      link: {
        github: "https://github.com/Akramkuairi/social-app",
      },
      use: [
        { tech: "mongo DB", logo: <DiMongodb /> },
        { tech: "express", logo: <SiExpress /> },
        { tech: "REACT JS", logo: <FaReact /> },
        { tech: "node js", logo: <DiNodejs /> },
      ],
      imgs: [""],
      bg: "#ee434c",
      id: 2,
      state: "completed",
      loves: 10,
      hates: 3,
    },
    // # Second project#

    {
      name: "e-commerce",
      date: "2021-2-2",
      summury: "shopping become easier and funny. (not completed)",
      techo: "ReactJs",
      coverImg: "/imgs/works/web/e-commerce",
      link: {
        github: "https://github.com/Akramkuairi/Final_Project_e-commerce",
        demo: "",
      },
      use: [
        { tech: "reactJs", logo: <DiReact /> },
        { tech: "css3", logo: <DiCss3Full /> },

        { tech: "Bootstrap", logo: <DiBootstrap /> },

        { tech: "nodejs", logo: <DiNodejs /> },
      ],
      imgs: [""],
      bg: "#28a745",
      id: 5,
      state: "Not completed",
      loves: 2,
      hates: 0,
    },
    // # Third project#

    {
      name: "weather app",
      date: "2022-4-2",
      summury: "you should konw weather state before leaving.",
      techo: "ReactJs",
      coverImg: "/imgs/works/web/weather",
      link: {
        github: "https://github.com/Akramkuairi/weather-app",
        demo: "",
      },
      use: [
        { tech: "reactJs", logo: <DiReact /> },
        { tech: "css3", logo: <DiCss3Full /> },

        { tech: "Bootstrap", logo: <DiBootstrap /> },
        { tech: "api", logo: <BsTabletLandscape /> },
      ],
      imgs: [""],
      bg: "#5e3e20",
      id: 9,
      state: "completed",
      loves: 60,
      hates: 10,
    },
    // # Fourth project#
    {
      name: "Restaurant",
      date: "2022-3-2",
      summury: "save your usefull repo.",
      techo: "ReactJs",
      coverImg: "/imgs/works/web/resturant",
      link: {
        github: "",
        demo: "",
      },
      use: [
        { tech: "reactJs", logo: <DiReact /> },
        { tech: "css3", logo: <DiCss3Full /> },
        { tech: "Bootstrap", logo: <DiBootstrap /> },
      ],
      imgs: [""],
      bg: "#6246ea",
      id: 10,
      state: "completed",
      loves: 6,
      hates: 10,
    },
    // # Third project#

    {
      name: "search in wiki",
      date: "2022-7-1",
      summury: "you can search about anything in wiki.",
      techo: "ReactJs",
      coverImg: "/imgs/works/web/weather",
      link: {
        github: "https://github.com/Akramkuairi/search-in-wiki",
        demo: "",
      },
      use: [
        { tech: "reactJs", logo: <DiReact /> },
        { tech: "css3", logo: <DiCss3Full /> },

        { tech: "Bootstrap", logo: <DiBootstrap /> },
        { tech: "api", logo: <BsTabletLandscape /> },
      ],
      imgs: [""],
      bg: "#5e3e20",
      id: 9,
      state: "completed",
      loves: 60,
      hates: 10,
    },
  ],
  techarr: ["all", "Mern Stack", "ReactJs", "PureJs"],
};

export { web };
