import React from "react";
import image from "../images/webdev.png";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "Memories Post App 🎉",
    description:
      "The Memories Posting App is a full-stack web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This platform allows users to create, share, and manage their cherished memories through posts, images, and comments. Users can register and log in to their accounts, enabling them to upload photos, write descriptions, and interact with other users' memories. The application features a responsive design, ensuring a seamless experience across devices, and utilizes RESTful APIs for efficient data management. With real-time updates and a user-friendly interface, this app provides a nostalgic space for users to preserve and celebrate their memorable moments.",
    url: "https://github.com/Pruthvi070/mern-memories-posting",
  },
  {
    title: "Food Delivery App",
    description:
      "This project begins with the development of the Home page, where users can view a menu and browse various food items. You will then create a Cart page and an Order page to facilitate the ordering process. Additionally, a Sign In/Sign Up popup will be implemented to enable user authentication. The app will be built using React.js, MongoDB, Express, Node.js, and will integrate the Stripe payment gateway for secure online payments. User authentication will allow anyone to create an account and log in, while shopping cart functionality will enable users to add food items and place orders seamlessly. Furthermore, order status update features will enhance the user experience by keeping customers informed about their order progress.",
    url: "https://github.com/Pruthvi070/FOOD.git",
  },
];

const Portfolio = () => {
  const sectionStyle = {
    padding: "2rem 1rem",
    textAlign: "center",
  };

  const imageContainerStyle = {
    maxWidth: "100%",
    flex: "1 1 40%",
    alignSelf: "center",
  };

  const imageStyle = {
    height: "auto",
    width: "100%",
    maxHeight: "400px",
    objectFit: "cover",
  };

  const projectContainerStyle = {
    flex: "2 1 60%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "0 1rem",
  };

  const projectBoxStyle = {
    margin: "1rem 0",
    padding: "1rem",
    border: "1px solid #ddd",
    borderRadius: "5px",
    textAlign: "left",
  };

  return (
    <section style={sectionStyle} id="portfolio">
      <h2>Portfolio</h2>
      <div
        style={{
          display: "flex",
          flexDirection: window.innerWidth < 768 ? "column" : "row",
          paddingTop: "3rem",
        }}
      >
        <div style={imageContainerStyle}>
          <img
            src={image}
            style={imageStyle}
            alt={imageAltText}
          />
        </div>
        <div style={projectContainerStyle}>
          {projectList.map((project) => (
            <div style={projectBoxStyle} key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3>{project.title}</h3>
              </a>
              <p style={{ fontSize: "0.9rem" }}>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
