import React from "react";

function Hero() {
  return (
    <section className="py-5 bg-light text-center">
      <div className="container">
        <h1 className="display-5 fw-semibold mb-3">How can we help you?</h1>
        <p className="lead text-muted mb-4">
          Get the support you need, when you need it. Our team is here 24/7 to help you succeed.
        </p>

        <div className="d-flex flex-column flex-md-row justify-content-center gap-4 mt-4">
          <div className="d-flex align-items-center gap-2 text-success">
            <i className="bi bi-check-circle-fill"></i>
            <span>24/7 Support</span>
          </div>
          <div className="d-flex align-items-center gap-2 text-success">
            <i className="bi bi-clock-fill"></i>
            <span>Average 2min Response</span>
          </div>
          <div className="d-flex align-items-center gap-2 text-success">
            <i className="bi bi-people-fill"></i>
            <span>Expert Team</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
