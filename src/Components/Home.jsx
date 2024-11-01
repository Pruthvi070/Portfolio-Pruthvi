import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";
import image from "../images/boy.png";

const imageAltText = "profile image";

const Home = ({ name, title }) => {
  // Inline styles with responsive adjustments
  const sectionStyle = {
    position: "relative",
    minHeight: "100vh",
    overflow: "hidden",
  };

  const imgStyle = {
    width: "100%",
    height: "auto",
    position: "absolute",
    top: 0,
    left: 0,
  };

  const textContainerStyle = {
    position: "absolute",
    top: window.innerWidth < 768 ? "2rem" : "5rem", 
    left: window.innerWidth < 768 ? "1rem" : "2rem", 
    width: window.innerWidth < 768 ? "80%" : "17rem", 
    textAlign: window.innerWidth < 768 ? "center" : "left", 
  };

  const arrowContainerStyle = {
    position: "absolute",
    bottom: "3rem",
    left: "50%",
    transform: "translateX(-50%)", // Center the arrow
  };

  return (
    <section id="home" style={sectionStyle}>
      <img style={imgStyle} src={image} alt={imageAltText} />
      <div style={textContainerStyle}>
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      <div style={arrowContainerStyle}>
        <img
          src={arrowSvg}
          style={{ height: "3rem", width: "3rem" }}
          alt="down arrow"
        />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
