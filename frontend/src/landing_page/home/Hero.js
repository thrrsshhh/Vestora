import React from "react";

const Hero = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Invest with Confidence on <span className="highlight">Vestora</span>
          </h1>
          <p className="hero-description">
            Experience the future of trading with zero commissions, powerful insights,
            and bank-level security. Start building your wealth today.
          </p>
          <div className="hero-buttons">
           <a
            href="https://zerodha-clone-dashboard.vercel.app/register"
           className="btn primary-btn">
              Open Account →
            </a>
            <a href="/about" className="btn secondary-btn">
              Learn More
            </a>
          </div>
        </div>
      </section>

      <style>
        {`
          .hero-section {
            width: 100%;
            background-color: #f9fbff;
            padding: 80px 20px;
            text-align: center;
          }

          .hero-content {
            max-width: 800px;
            margin: 0 auto;
          }

          .hero-title {
            font-size: 2.5rem;
            font-weight: bold;
            color: #1f2937;
            line-height: 1.3;
          }

          .highlight {
            color: #2563eb;
          }

          .hero-description {
            margin-top: 20px;
            font-size: 1.125rem;
            color: #4b5563;
          }

          .hero-buttons {
            margin-top: 30px;
            display: flex;
            justify-content: center;
            gap: 15px;
            flex-wrap: wrap;
          }

          .btn {
            padding: 12px 24px;
            font-size: 0.95rem;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 500;
            transition: background-color 0.3s ease, color 0.3s ease;
          }

          .primary-btn {
            background-color: #111827;
            color: #ffffff;
          }

          .primary-btn:hover {
            background-color: #1f2937;
          }

          .secondary-btn {
            background-color: #ffffff;
            border: 1px solid #d1d5db;
            color: #374151;
          }

          .secondary-btn:hover {
            background-color: #f3f4f6;
          }
        `}
      </style>
    </>
  );
};

export default Hero;
