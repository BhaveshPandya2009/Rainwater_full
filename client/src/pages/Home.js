import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    // Generate some raindrops
    const container = document.getElementById("raindrop-container");
    if (!container) return;
    for (let i = 0; i < 25; i++) {
      const drop = document.createElement("div");
      drop.className = "raindrop";
      drop.style.left = Math.random() * 100 + "%"; // random horizontal position
      drop.style.animationDelay = Math.random() * 2 + "s"; // random delay
      container.appendChild(drop);
    }
  }, []);

  return (
    <>
      <Navbar />

      {/* RAINDROP ANIMATION OVERLAY */}
      <div className="raindrop-container" id="raindrop-container"></div>

      {/* HERO SECTION with wave background */}
      <div className="wave-section">
        <div className="hero-text-wrapper">
          <h1>Harvest Rainwater, Save the Planet</h1>
          <p>
            Empowering communities to conserve water through advanced
            rainwater harvesting solutions.
          </p>
          <Link to="/register" className="btn-primary">
            Get Started
          </Link>
        </div>

        {/* WAVE SVG at bottom */}
        <img
          src="/wave.svg"
          alt="wave"
          className="wave-bottom"
        />
      </div>

      {/* Features */}
      <section className="p-2" style={{ background: "#fff" }}>
        <h2 className="text-center my-4" style={{ fontSize: "2rem" }}>
          Key Features
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2em",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          <FeatureCard
            icon="/images/feature1.png"
            title="Real-Time Data"
            text="Monitor water levels and usage statistics in real-time using Grafana dashboards."
          />
          <FeatureCard
            icon="/images/feature2.png"
            title="In-Depth Analytics"
            text="Gain powerful insights with interactive Power BI reports customized for your setup."
          />
          <FeatureCard
            icon="/images/feature3.png"
            title="Eco-Friendly"
            text="Save water and reduce environmental impact with smart harvesting methods."
          />
          <FeatureCard
            icon="/images/feature4.png"
            title="Automated System"
            text="Fully automated data collection and filtering system for hassle-free operation."
          />
        </div>
      </section>

      {/* Loading Spinner Demo */}
      <section>
        <h2 className="text-center my-4">Loading Spinner Demo</h2>
        <div className="droplet-spinner"></div>
      </section>

      <Footer />
    </>
  );
}

function FeatureCard({ icon, title, text }) {
  return (
    <div
      style={{
        background: "#ffffff",
        padding: "2em",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        transition: "transform 0.3s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      <img
        src={icon}
        alt={title}
        style={{ height: "50px", marginBottom: "1rem" }}
      />
      <h3 style={{ marginBottom: "0.5rem", color: "var(--primary-color)" }}>
        {title}
      </h3>
      <p>{text}</p>
    </div>
  );
}

export default Home;
