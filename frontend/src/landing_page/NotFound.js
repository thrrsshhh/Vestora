import React from "react";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", padding: "100px" }}>
      <h1 style={{ fontSize: "4rem", color: "#ff4d4f" }}>404</h1>
      <p style={{ fontSize: "1.5rem" }}>The page you’re looking for doesn’t exist.</p>
      <img
        src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
        alt=""
        style={{ width: "200px", marginTop: "20px" }}
      />
    </div>
  );
};

export default NotFound;
