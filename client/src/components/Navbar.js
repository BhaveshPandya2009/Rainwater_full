import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
          <img
            src="D:\Rwater harvesting with backend\client\src\assets\Logo.jpg"
            alt="Stormsaver"
            style={{ height: "40px" }}
          />
        </Link>
      </div>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>
          Home
        </Link>
        <Link to="/dashboard" style={styles.link}>
          Dashboard
        </Link>
        <Link to="/login" style={styles.link}>
          Login
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: "#092961",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1em 2em",
  },
  logo: {
    flex: 1,
  },
  links: {
    flex: 2,
    display: "flex",
    justifyContent: "flex-end",
    gap: "1em",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: 500,
    borderRadius: "4px",
    padding: "0.5em",
    transition: "background 0.2s",
  },
};

export default Navbar;
