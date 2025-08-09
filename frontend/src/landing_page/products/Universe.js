import React from "react";
import {
  FaChartLine,
  FaBullseye,
  FaRobot,
  FaShieldAlt,
  FaFileInvoiceDollar,
  FaGraduationCap,
} from "react-icons/fa";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Vestora Suite</h1>
        <p className="mt-3">
          Power your investment journey with Vestora’s comprehensive ecosystem
        </p>

        <div className="col-4 p-3 mt-5">
          <FaChartLine size={50} />
          <p className="text-muted mt-2" style={{ fontSize: "0.7em" }}>
            Direct stock & mutual fund investing
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <FaBullseye size={50} />
          <p className="text-muted mt-2" style={{ fontSize: "0.7em" }}>
            Smart financial goal planning
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <FaRobot size={50} />
          <p className="text-muted mt-2" style={{ fontSize: "0.7em" }}>
            AI-driven portfolio insights
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <FaShieldAlt size={50} />
          <p className="text-muted mt-2" style={{ fontSize: "0.7em" }}>
            Insurance comparison & advisory
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <FaFileInvoiceDollar size={50} />
          <p className="text-muted mt-2" style={{ fontSize: "0.7em" }}>
            Tax optimization tools
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <FaGraduationCap size={50} />
          <p className="text-muted mt-2" style={{ fontSize: "0.7em" }}>
            Financial literacy & courses
          </p>
        </div>

        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "15%", margin: "0 auto" }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Universe;
