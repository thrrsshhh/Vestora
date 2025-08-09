import React from "react";

function Hero() {
  return (
    <div className="container py-5">
      {/* Intro Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold" style={{ color: "#7c3aed", fontSize: "2.5rem" }}>
          About Vestora
        </h1>
        <p className="text-muted fs-5 mt-3">
          We're democratizing investing by making sophisticated trading tools accessible to everyone. 
          Built by traders, for traders.
        </p>
      </div>

      {/* Stats Section */}
      <div className="row text-center mb-5">
        {[
          { label: "Active Users", value: "500K+" },
          { label: "Assets Under Management", value: "$2.5B+" },
          { label: "Uptime", value: "99.9%" },
          { label: "Customer Support", value: "24/7" },
        ].map((item, idx) => (
          <div className="col-6 col-md-3 mb-4" key={idx}>
            <h4 className="fw-bold">{item.value}</h4>
            <p className="text-muted mb-0">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Why Choose Us Section */}
      <div className="pt-5 border-top">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Why Choose Vestora</h2>
          <p className="text-muted">
            Professional-grade tools designed for modern investors
          </p>
        </div>

        <div className="row g-4">
          {[
            {
              title: "⚡ Zero Commission Trading",
              desc: "Trade stocks without paying any commission fees.",
            },
            {
              title: "📈 Advanced Analytics",
              desc: "Professional-grade charts and technical analysis tools.",
            },
            {
              title: "📊 Portfolio Management",
              desc: "Comprehensive portfolio tracking and management.",
            },
            {
              title: "🛡️ Bank-Level Security",
              desc: "Multi-layer security with 256-bit encryption.",
            },
          ].map((feature, idx) => (
            <div className="col-md-6" key={idx}>
              <div className="p-4 bg-light rounded shadow-sm h-100">
                <h5 className="mb-2">{feature.title}</h5>
                <p className="text-muted mb-0">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
