import React from "react";

import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

const description =
  "I'm a Computer Science student at Shivaji University,where I focus on developing user-friendly software and exploring cutting-edge technologies.";

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
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
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
