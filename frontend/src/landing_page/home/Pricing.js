import React from "react";

function Pricing() {
  return (
    <>
      <section className="cta-section">
        <h1 className="cta-heading">Ready to Start Trading?</h1>
        <p className="cta-subtext">
          Join Vestora today and take control of your financial future
        </p>
        <a href="https://zerodha-clone-dashboard.vercel.app/register" className="cta-button">
          Open Account <span className="arrow">→</span>
        </a>
      </section> {/* <-- Added this closing tag */}

      <style>{`
        .cta-section {
          background-color: #2563eb; /* Tailwind's blue-600 equivalent */
          padding: 80px 20px;
          text-align: center;
          color: white;
        }

        .cta-heading {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }

        .cta-subtext {
          font-size: 1.1rem;
          margin-bottom: 30px;
          color: #e0e7ff;
        }

        .cta-button {
          background-color: white;
          color: #1e3a8a;
          padding: 12px 24px;
          font-size: 1rem;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          font-weight: 600;
          text-decoration: none;
          display: inline-block;
        }

        .cta-button .arrow {
          margin-left: 8px;
          font-size: 1.2rem;
        }

        .cta-button:hover {
          background-color: #f1f5f9;
        }

        @media (max-width: 600px) {
          .cta-heading {
            font-size: 1.8rem;
          }

          .cta-subtext {
            font-size: 1rem;
          }

          .cta-button {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </>
  );
}

export default Pricing;
