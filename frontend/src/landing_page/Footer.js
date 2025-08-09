import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#0f172a", color: "#fff" }} className="pt-5 pb-4">
      <div className="container">
        <div className="row">
          {/* Logo and Description */}
          <div className="col-md-3 mb-4">
            <h5 style={{ color: "#3b82f6" }}>Vestora</h5>
            <p style={{ color: "#94a3b8" }}>
              The modern trading platform for smart investors.
            </p>
          </div>

          {/* Product Links */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase mb-3">Product</h6>
            <ul className="list-unstyled">
              <li><a href="#trading" className="text-decoration-none text-light">Trading</a></li>
              <li><a href="#analytics" className="text-decoration-none text-light">Analytics</a></li>
              <li><a href="#portfolio" className="text-decoration-none text-light">Portfolio</a></li>
              <li><a href="#mobile" className="text-decoration-none text-light">Mobile App</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase mb-3">Company</h6>
            <ul className="list-unstyled">
              <li><a href="#about" className="text-decoration-none text-light">About</a></li>
              <li><a href="#careers" className="text-decoration-none text-light">Careers</a></li>
              <li><a href="#press" className="text-decoration-none text-light">Press</a></li>
              <li><a href="#contact" className="text-decoration-none text-light">Contact</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase mb-3">Support</h6>
            <ul className="list-unstyled">
              <li><a href="#help" className="text-decoration-none text-light">Help Center</a></li>
              <li><a href="#security" className="text-decoration-none text-light">Security</a></li>
              <li><a href="#privacy" className="text-decoration-none text-light">Privacy</a></li>
              <li><a href="#terms" className="text-decoration-none text-light">Terms</a></li>
            </ul>
          </div>
        </div>

        <hr style={{ borderColor: "#1e293b" }} />

        <div className="text-center" style={{ fontSize: "14px", color: "#94a3b8" }}>
          © 2024 Vestora. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
