import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
  // Typically you'd do a token check, fetch data, etc.
  return (
    <>
      <Navbar />
      <div style={{ minHeight: "70vh", padding: "2em" }}>
        <h1>User Dashboard</h1>
        <p>Welcome! Here you can see your real-time usage data and analytics.</p>
        
        <div style={{ marginTop: "2em" }}>
          <h2>Grafana Dashboard Embed</h2>
          <iframe
            title="Grafana"
            src="https://play.grafana.org/d/000000012/grafana-play-home?orgId=1"
            width="100%"
            height="400"
            frameBorder="0"
          />
        </div>

        <div style={{ marginTop: "2em" }}>
          <h2>Power BI Embed (Placeholder)</h2>
          <iframe
            title="PowerBI"
            src="https://app.powerbi.com/view?r=FakePowerBiEmbedLink"
            width="100%"
            height="400"
            frameBorder="0"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
