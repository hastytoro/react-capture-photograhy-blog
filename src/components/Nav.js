import React from "react";
import styled from "styled-components";
// Import Link and add some global navigation.
// React Router is now controlling the URL!
// We don't have any routes that render when the URL changes yet here.
// But Link is changing the URL "without" causing a full-page reload.
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <NavBar>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/work">Our Work</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "50%" : "0%" }}
          />
        </li>
        {/* <li>
          <Link to="/contact">Contact Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
          />
        </li> */}
      </ul>
    </NavBar>
  );
};

const NavBar = styled.nav`
  font-family: "Space Mono", sans-serif;
  position: sticky;
  top: 0;
  z-index: 9999999;

  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  #logo {
    font-size: 2rem;
    font-family: "Space Mono";
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    padding: 1rem 2.5rem;
    #logo {
      /* margin: 2rem; */
      padding-right: 1.6rem;
    }
    ul {
      margin-top: 0.5rem;
      padding: 1rem;
      /* width: 100%; */
    }
    li {
      padding: 0rem;
      margin: 1.5rem;
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -60%;
  left: 50%;
  @media (max-width: 1300px) {
    left: 0%;
    height: 0.2rem;
  }
`;

export default Nav;
