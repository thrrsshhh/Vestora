import React from "react";

function Stats() {
  return (
    <>
      <section className="testimonial-section">
        <h2>What Our Users Say</h2>
        <p className="subtext">Join thousands of satisfied traders who trust Vestora</p>

        <div className="testimonial-grid">
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p className="quote">
              "Vestora has transformed my trading experience. The insights are incredible!"
            </p>
            <p className="name">Sarah Johnson</p>
            <p className="role">Day Trader</p>
          </div>

          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p className="quote">
              "The zero commission model and powerful tools make this my go-to platform."
            </p>
            <p className="name">Michael Chen</p>
            <p className="role">Investment Advisor</p>
          </div>

          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p className="quote">
              "Clean interface, reliable data, and excellent customer support. Highly recommended!"
            </p>
            <p className="name">Emily Rodriguez</p>
            <p className="role">Portfolio Manager</p>
          </div>
        </div>
      </section>

      <style>{`
        .testimonial-section {
          max-width: 1100px;
          margin: auto;
          text-align: center;
          padding: 60px 20px;
          font-family: 'Segoe UI', sans-serif;
        }

        .testimonial-section h2 {
          font-size: 2rem;
          color: #0f172a;
          margin-bottom: 10px;
        }

        .subtext {
          color: #475569;
          font-size: 1rem;
          margin-bottom: 40px;
        }

        .testimonial-grid {
          display: flex;
          gap: 30px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .testimonial-card {
          background: white;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
          padding: 30px 20px;
          border-radius: 12px;
          width: 300px;
          text-align: left;
          transition: transform 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
        }

        .stars {
          color: #facc15;
          font-size: 1.2rem;
          margin-bottom: 10px;
        }

        .quote {
          font-style: italic;
          color: #1e293b;
          margin-bottom: 15px;
        }

        .name {
          font-weight: bold;
          color: #0f172a;
          margin-bottom: 3px;
        }

        .role {
          color: #64748b;
          font-size: 0.9rem;
        }
      `}</style>
    </>
  );
}

export default Stats;
