/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/webdev.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
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
      "This project begins with the development of the Home page, where users can view a menu and browse various food items. You will then create a Cart page and an Order page to facilitate the ordering process. Additionally, a Sign In/Sign Up popup will be implemented to enable user authentication The app will be built using React.js, MongoDB, Express, Node.js, and will integrate the Stripe payment gateway for secure online payments. User authentication will allow anyone to create an account and log in, while shopping cart functionality will enable users to add food items and place orders seamlessly. Furthermore, order status update features will enhance the user experience by keeping customers informed about their order progress.",

    url: "https://github.com/Pruthvi070/FOOD.git",
  },
 
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div
        style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}
      >
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
