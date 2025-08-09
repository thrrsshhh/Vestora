import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const styles = {
    navbar: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#fff",
      borderBottom: "1px solid #e5e7eb",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "14px 32px",
      flexWrap: "wrap",
    },
    brandText: {
      fontSize: "22px",
      fontWeight: "600",
      color: "#1f2937",
      textDecoration: "none",
    },
    linksWrapper: {
      display: "flex",
      gap: "20px",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "10px",
    },
    link: {
      textDecoration: "none",
      color: "#1f2937",
      fontSize: "15px",
      padding: "6px 10px",
      borderRadius: "5px",
      transition: "0.2s ease-in-out",
    },
    iconLink: {
      fontSize: "18px",
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <Link to="/" style={styles.brandText}>
          Vestora
        </Link>
        <div style={styles.linksWrapper}>
          <a
            href="https://zerodha-clone-dashboard.vercel.app/register"
            style={styles.link}
          >
            Register
          </a>
          <Link to="/about" style={styles.link}>
            About
          </Link>
          <Link to="/product" style={styles.link}>
            Product
          </Link>
          <Link to="/support" style={styles.link}>
            Support
          </Link>
          <Link to="/" style={{ ...styles.link, ...styles.iconLink }}>
            <i className="fa-solid fa-bars"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
