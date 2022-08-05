import React, { useState, useEffect } from "react";
import Carousel from "../../componants/carousel/carousel";
import Navbar from "../../componants/navbar/navbar";
import Sociallinks from "../../componants/sociallinks/sociallinks";
import "./home.css";

import Footer from "../../componants/footer/Footer";

function Home() {
  const [carrers] = useState([
    {
      data: "full stack developer",
      path: "/imgs/avtars",
      imgSrc: "coffe",
      bg: "998ccd",
    },
    {
      data: "full stack developer",
      path: "/imgs/avtars",

      imgSrc: "coffe",
      bg: "3D2C8D",
    },
    {
      data: "computer maintenance",
      path: "/imgs/avtars",
      imgSrc: "coffe",
      bg: "916BBF",
    },
    {
      data: "MERN stack",
      path: "/imgs/avtars",
      imgSrc: "coffe",
      bg: "1C0C5B",
    },
  ]);

  const [Cindex, setCindex] = useState(0);

  useEffect(() => {}, [Cindex]);

  const [dark, setDark] = useState();

  return (
    <div className="m-0 page">
      <div className={` page-overlay ${!dark ? "light" : "dark"} `}>
        <Navbar getDark={setDark} />
        <div className="container content pt-5">
          <div className="d-flex flex-lg-row  flex-column    justify-content-center align-items-center ">
            <div className="col-lg-4 col-12  my-info  text-lg-start text-center py-4">
              <h2 className="hi text-capitalize">Hello! I'm</h2>
              <h2 className="name h1 text-capitalize"> Akram</h2>
              <h2 className="job ">
                {/* {linearS.lines}{" "} */}
                <span className="d-inline-block m-0 p-0 text-capitalize h3">
                  {carrers[Cindex].data}
                </span>
              </h2>
            </div>
            <div className="text-center col-lg-8 col-12 py-md-5 ">
              <Carousel content={carrers} getIndex={setCindex} />
            </div>
          </div>
          <div className="social-media">
            <Sociallinks />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
