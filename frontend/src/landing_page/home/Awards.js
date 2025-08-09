import React from "react";

export default function Awards() {
  return (
    <>
      <section className="awards-section">
        <h2>Why Choose Vestora?</h2>
        <p className="subtitle">
          We provide everything you need to succeed in the stock market
        </p>

        <div className="card-grid">
          <div className="card">
            <div className="icon">⚡</div>
            <h3>Zero Commission</h3>
            <p>Trade stocks without paying any commission fees. Keep more of your profits.</p>
          </div>

          <div className="card">
            <div className="icon">📈</div>
            <h3>Powerful Insights</h3>
            <p>Advanced analytics and real-time market data to make informed decisions.</p>
          </div>

          <div className="card">
            <div className="icon">🔒</div>
            <h3>Safe & Secure</h3>
            <p>Bank-level security with 256-bit encryption to protect your investments.</p>
          </div>
        </div>
      </section>

      <style>{`
        .awards-section {
          max-width: 1100px;
          margin: auto;
          text-align: center;
          padding: 60px 20px;
          font-family: 'Segoe UI', sans-serif;
        }

        .awards-section h2 {
          font-size: 2rem;
          color: #0f172a;
          margin-bottom: 10px;
        }

        .subtitle {
          color: #475569;
          font-size: 1rem;
          margin-bottom: 40px;
        }

        .card-grid {
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
        }

        .card {
          background: white;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          padding: 30px 20px;
          border-radius: 12px;
          width: 300px;
          transition: transform 0.3s ease;
        }

        .card:hover {
          transform: translateY(-5px);
        }

        .icon {
          font-size: 2rem;
          margin-bottom: 10px;
          color: #2563eb;
        }

        .card h3 {
          font-size: 1.2rem;
          color: #0f172a;
          margin-bottom: 10px;
        }

        .card p {
          color: #475569;
          font-size: 0.95rem;
        }
      `}</style>
    </>
  );
}
