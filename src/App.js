import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from "./pages/home/home";
import Contact from "./pages/contact/Contact";
import Work from "./pages/work/Work";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import { web } from "./data.js";
// import Details from "./pages/details/Details";
// import NoMatch from "./pages/NoMatch/NoMatch";
function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} exact />

          <Route path="/work" element={<Work />} exact />

          <Route path="/contact" element={<Contact />} exact />

          <Route
            path="/work/web-development"
            element={<Projects data={web} />}
            exact
          />
          {/* <Route
            path={"/work/web-development/:id"}
            element={<Details />}
            exact
          /> */}

          {/* <Route path="/404" element={<NoMatch />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
