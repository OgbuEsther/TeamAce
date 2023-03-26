import React from "react";
import { NavLink } from "react-router-dom";
import Designed from "./Designed/Designed";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Join from "./Join/Join";
import Solutions from "./Solutions/Solutions";
import Team from "./Team/Team";

const Homescreen = () => {
  return (
    <div>
      <Header />
      <Hero />
      {/* <Solutions /> */}
      {/* <Join /> */}
      <br />
      <br />
      <br />
      <Team />
      <br />
      <br />
      <br />
      <Solutions />
      <br />
      <br />
      <br />
      {/* <Designed /> */}
      <Footer />
    </div>
  );
};

export default Homescreen;
