import React from "react";
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

const description =
  "I'm a Computer Science student at Shivaji University, where I focus on developing user-friendly software and exploring cutting-edge technologies.";

const skillsList = [
  "MongoDB",
  "Express.js",
  "React.js",
  "Node.js",
  "RESTful API development",
  "JavaScript (ES6+)",
  "HTML & CSS",
  "Version control (Git)",
  "Responsive web design",
];

const detailOrQuote =
  "I am dedicated to addressing problems through inventive approaches that foster technological growth. By utilizing my knowledge of the MERN stack, I aim to build applications that are accessible to all users.";

const About = () => {
  // Inline styles with responsive adjustments
  const sectionStyle = {
    padding: "2rem",
    position: "relative",
  };

  const imgStyle = {
    width: "100%",
    height: "auto",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
  };

  const aboutContentStyle = {
    backgroundColor: "white",
    width: "80%",
    maxWidth: "700px",
    padding: window.innerWidth < 768 ? "2rem" : "4rem",
    margin: "3rem auto",
    textAlign: "center",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  };

  const skillsListStyle = {
    textAlign: "left",
    columns: window.innerWidth < 768 ? 1 : 2,
    fontSize: window.innerWidth < 480 ? "0.9rem" : "1.25rem",
    margin: window.innerWidth < 768 ? "1rem" : "2rem 3rem",
    gap: window.innerWidth < 768 ? "1.5rem" : "3rem",
  };

  return (
    <section style={sectionStyle} id="about">
      <img style={imgStyle} src={image} alt={imageAltText} />
      <div style={aboutContentStyle}>
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul style={skillsListStyle}>
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
