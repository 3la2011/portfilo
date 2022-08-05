import React, { useState, useEffect } from "react";
import "./About.css";
import Navbar from "../../componants/navbar/navbar";
import { AiOutlineHtml5 } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import {
  DiBootstrap,
  DiCss3Full,
  DiJsBadge,
  DiNodejs,
  DiReact,
  DiSass,
} from "react-icons/di";
import { SiTrello, SiMongodb } from "react-icons/si";
import {
  BsFillGeoAltFill,
  BsFillTelephoneFill,
  BsFillTerminalFill,
} from "react-icons/bs";
import { FaGit } from "react-icons/fa";
import file from "./my CV .pdf";
import Footer from "../../componants/footer/Footer";
import Anochor from "../../componants/Anochor/Anochor";
export default function About() {
  const [skillslang] = useState([
    { tech: "html5", logo: <AiOutlineHtml5 /> },
    { tech: "css3", logo: <DiCss3Full /> },
    { tech: "javascript", logo: <DiJsBadge /> },

    { tech: "Bootstrap", logo: <DiBootstrap /> },
    { tech: "sass", logo: <DiSass /> },

    { tech: "reactJs", logo: <DiReact /> },
    { tech: "nodejs", logo: <DiNodejs /> },
    ,
    { tech: "Mongodb", logo: <SiMongodb /> },
  ]);
  const [skillstool] = useState([
    { tech: "git", logo: <FaGit /> },
    { tech: "cmd", logo: <BsFillTerminalFill /> },
    { tech: "Trello", logo: <SiTrello /> },
  ]);
  const imgPupple = document.querySelector("div.img-pupple");
  const dynamicStylesAbout = () => {
    if (imgPupple == null) {
      return "wait...";
    } else {
      imgPupple.style.width = window.innerWidth / 5 + "px";
      imgPupple.style.height = window.innerWidth / 5 + "px";
    }
  };
  const [dark, setDark] = useState();

  window.addEventListener("resize", () => {
    dynamicStylesAbout(imgPupple);
  });

  //intiial set to dark from ls run for 1 time before render

  //re set to dark from ls run if change  before render

  useEffect(() => {}, [imgPupple]);

  return (
    <div className="about page m-0 ">
      <div className={`about page-overlay ${!dark ? "light" : "dark"} `}>
        <Navbar getDark={setDark} />
        <div className="container content">
          <div className="d-flex flex-lg-row flex-column align-items-start justify-content-center h-100 pt-5 ">
            <div className="col-lg-4 col-12">
              <div className=" d-flex flex-column align-items-center">
                <div className="col-12 img-pupple-show">
                  <div className="img-pupple w-100"></div>
                </div>
                <div className="col-12 personal-info d-flex flex-lg-column flex-row justify-content-start">
                  <div className="contacts col-7">
                    <h3 className="head"># Who I am</h3>

                    <h3 className="info name my-2">
                      <span className="me-2 ">Name:</span> Akram Kuairi{" "}
                    </h3>
                    <h3 className="info my-2">
                      {" "}
                      <span className="me-2 ">
                        <BsFillTelephoneFill />
                      </span>{" "}
                      00495435454
                    </h3>
                    <h3 className="info  my-2">
                      <span className="me-2 ">
                        <BsFillGeoAltFill />
                      </span>{" "}
                      Herborn 35745, Germany
                    </h3>
                    <h3 className="info  py-2">
                      <span className="me-2 ">
                        <CgMail />
                      </span>{" "}
                      <Anochor
                        href="mailto:akram.kuairi@gmail.com"
                        // rel="noopener noreferrer"
                        target="_blank"
                        className="text-danger"
                      >
                        akram.kuairi@gmail.com"
                      </Anochor>{" "}
                    </h3>
                  </div>
                  <div className="languages mt-lg-5 mt-0 col-5">
                    <h3 className="head"># Languages</h3>
                    <h3 className="info name my-2">
                      <span className="me-2 ">Ar</span>Arabic (native)
                    </h3>
                    <h3 className="info my-2">
                      {" "}
                      <span className="me-2 ">En</span> English-B1
                    </h3>
                    <h3 className="info name my-2">
                      <span className="me-2 ">GE</span>German-B1
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7  col-12 offset-lg-1 info-pupple mt-lg-0 mt-5">
              <div className="tecnical-info d-flex flex-column">
                <h1 className="head ">
                  About me{" "}
                  <span className="working bg-danger p-2 rounded ">
                    I am looking for work <span className="flag">🏳</span>
                  </span>
                </h1>
                <p className="paragraph">
                  {/* I love to dig into problems and solve them with modern
                  technology. I enjoy learning about many executives throughout
                  my career in engineering and development. My personal and
                  professional experiences have taught me the following about
                  myself: I ed
                  ucate, refine and drive myself to be a better
                  person. */}
                  am an up-and-coming web developer ,I just graduate from my
                  course in full stack development in Digital career institute
                  Berlin-Germany , I am now ready to embark on a new journey an
                  take on an exciting role as Frontend developer
                  <br />
                </p>
                <Anochor
                  className="w-sm-25 w-75"
                  href={file}
                  download={file}
                  // rel="noopener noreferrer"
                  target="_blank"
                >
                  <button className="btn btn-sm btn-success w-100">
                    Download resume
                  </button>
                </Anochor>

                <div className="Education mt-5">
                  <h3 className="head"># Education</h3>
                  <div className="feng d-flex my-5">
                    <div className="feng-img col-2">
                      <img src="./imgs/About/DCI.png" alt="DCI" width={"60%"} />
                    </div>
                    <div className="feng-info col-10">
                      <h3 className="h4">
                        <span className="me-2 ">Digital career institute</span>
                      </h3>
                      <h3 className="h4">
                        <span className="me-2 ">Berlin-Germany</span>
                      </h3>
                      <h3 className="h4">
                        <span className="me-2 "> web development</span>
                      </h3>
                      <h3 className="">
                        .{" "}
                        <Anochor
                          href="https://digitalcareerinstitute.org/"
                          // rel="noopener noreferrer"
                          target="_blank"
                          className="btn btn-sm btn-warning"
                        >
                          ...More
                        </Anochor>{" "}
                      </h3>
                    </div>
                  </div>
                  <div className="feng d-flex">
                    <div
                      className="feng-/* `img` is a self-closing tag. */
                    img col-2"
                    >
                      <img
                        src="./imgs/About/FENG.png"
                        alt="svu"
                        width={"60%"}
                      />
                    </div>
                    <div className="feng-info col-10">
                      <h3 className="">Syrian Virtual University</h3>
                      <h3 className=" my-2">
                        Bachelor information technology (Damascus)
                      </h3>
                      <h3 className="">
                        .{" "}
                        <Anochor
                          href="https://svuonline.org/en"
                          // rel="noopener noreferrer"
                          target="_blank"
                          className="btn btn-sm btn-warning"
                        >
                          ...More
                        </Anochor>{" "}
                      </h3>
                    </div>
                  </div>
                  <div className="feng d-flex my-3">
                    <div className="feng-img col-2">
                      <img
                        src="./imgs/About/ins.png"
                        alt="photo"
                        width={"60%"}
                      />
                    </div>
                    <div className="feng-info col-10">
                      <h3 className="h4">
                        <span className="me-2 "></span>computer engineering
                        institute
                      </h3>
                      <h3 className="h4">
                        <span className="me-2 "></span>Damascus University
                      </h3>
                      <h3 className="h4">
                        <span className="me-2 "></span>(ausbildung)
                      </h3>
                      <h3 className="">
                        .{" "}
                        <Anochor
                          href="http://damascusuniversity.edu.sy/ticc/?lang=1&set=3&id=417"
                          // rel="noopener noreferrer"
                          target="_blank"
                          className="btn btn-sm btn-warning"
                        >
                          ...More
                        </Anochor>{" "}
                      </h3>
                    </div>
                  </div>

                  <div className="Skills d-flex flex-column mb-2">
                    <h3 className="head">
                      # Dev skills{" "}
                      <span role="img" aria-label="rocket">
                        {" "}
                        🚀
                      </span>
                    </h3>
                    <ul className="list-unstyled d-flex flex-wrap skills-list">
                      {skillslang.map((e, index) => (
                        <li className="col-3 mt-2 skills-item" key={index}>
                          <div className="p-1">
                            {e.tech} <span className="">{e.logo}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="Skills d-flex flex-column mb-5 pb-5">
                    <h3 className="head">
                      # Tech skills{" "}
                      <span role="img" aria-label="rocket">
                        🚀
                      </span>
                    </h3>
                    <ul className="list-unstyled d-flex flex-wrap skills-list">
                      {skillstool.map((e, index) => (
                        <li className="col-3 mt-2 skills-item" key={index}>
                          <div className="p-1">
                            {e.tech} <span className="">{e.logo}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
