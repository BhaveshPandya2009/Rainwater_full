import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2025 Stormsaver. All Rights Reserved.</p>
      <p>
        <a href="#privacy" style={styles.link}>Privacy</a> |{" "}
        <a href="#terms" style={styles.link}>Terms</a> |{" "}
        <a href="#contact" style={styles.link}>Contact</a>
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#092961",
    color: "#ccc",
    textAlign: "center",
    padding: "1em 0",
    marginTop: "2em",
  },
  link: {
    color: "#57A5B7",
    textDecoration: "none",
    margin: "0 0.5em",
  },
};

export default Footer;
