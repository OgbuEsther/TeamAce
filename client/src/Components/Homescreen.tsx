import React from "react";
import { NavLink } from "react-router-dom";
import Accept from "./Accept";
import Designed from "./Designed/Designed";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Join from "./Join/Join";
import Methods from "./Methods";
import Solutions from "./Solutions/Solutions";
import Superhero from "./Superhero";
import Team from "./Team/Team";

const Homescreen = () => {
  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <Superhero />
      <br />
      <br />
      <br />
      <Team />
      <br />
      <br />
      <br />
      <Accept />
      <br />
      <br />
      <br />
      <Methods />
      <Footer />
    </div>
  );
};

export default Homescreen;
