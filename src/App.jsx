/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed as properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Pruthviraj Chavan",
  title: "MERN Stack Developer",
  email: "chavanpruthviraj9595@gmail.com",
  gitHub: "Pruthvi070",
  instagram: "p_r_u_t_h_v_i_2151",
  linkedIn: "Pruthviraj Chavan",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      {/* Fix the typo here by changing siteProps.na to siteProps.name */}
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer
        {...siteProps}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
      />
    </div>
  );
};

export default App;
