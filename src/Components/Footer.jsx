import React from "react";
import PropTypes from "prop-types";

import envelopeIcon from "../images/socials/envelope.svg";
import gitHubIcon from "../images/socials/github.svg";
import instagramIcon from "../images/socials/instagram.svg";
import linkedInIcon from "../images/socials/linkedin.svg";
import mediumIcon from "../images/socials/medium.svg";

const Footer = (props) => {
  const {
    devDotTo,
    email,
    gitHub,
    instagram,
    linkedIn,
    medium,
    name,
    primaryColor,
    twitter,
    youTube,
  } = props;

  return (
    <div
      id="footer"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.5rem",
        padding: "2rem 0 2rem",
        backgroundColor: primaryColor,
        width: "100vw",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1.5rem",
          flexWrap: "wrap",
        }}
      >
        {email && (
          <a href={`mailto:chavanpruthviraj9595@gmail.com ${email}`}>
            <img src={envelopeIcon} alt="email" style={{ height: "2rem", width: "2rem" }} />
          </a>
        )}

        {gitHub && (
          <a
            href={`https://github.com/${gitHub}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gitHubIcon} alt="GitHub" style={{ height: "2rem", width: "2rem" }} />
          </a>
        )}
        {instagram && (
          <a
            href={`https://www.instagram.com/p_r_u_t_h_v_i_2151/${instagram}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" style={{ height: "2rem", width: "2rem" }} />
          </a>
        )}
        {linkedIn && (
          <a
            href={`https://www.linkedin.com/in/pruthviraj-chavan-a68068291/${linkedIn}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedInIcon} alt="LinkedIn" style={{ height: "2rem", width: "2rem" }} />
          </a>
        )}
        {medium && (
          <a
            href={`https://medium.com/@${medium}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={mediumIcon} alt="Medium" style={{ height: "2rem", width: "2rem" }} />
          </a>
        )}
      </div>
      <p style={{ marginTop: 0, color: "white", fontSize: "0.9rem" }}>
        Created by {name}
      </p>
    </div>
  );
};

Footer.defaultProps = {
  name: "",
};

Footer.propTypes = {
  devDotTo: PropTypes.string,
  email: PropTypes.string,
  gitHub: PropTypes.string,
  instagram: PropTypes.string,
  linkedIn: PropTypes.string,
  medium: PropTypes.string,
  name: PropTypes.string.isRequired,
  primaryColor: PropTypes.string,
  twitter: PropTypes.string,
  youTube: PropTypes.string,
};

export default Footer;
