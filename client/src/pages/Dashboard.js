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
            /*src="https://snapshots.raintank.io/dashboard/snapshot/SqiZMlt7aBFzIOM2maGXmXoJKiQ63pNw?orgId=0&refresh=5s&theme=light"*/
            src="https://snapshots.raintank.io/dashboard/snapshot/JDnUC1v7WlBIV9V9pWVGnRCEqXhyEoJs?orgId=0&refresh=5s&theme=light"
            width="100%"
            height="1000"
            frameBorder="0"
          />
        </div>

        <div style={{ marginTop: "2em" }}>
          <h2>Power BI Embed (Placeholder)</h2>
          <iframe
            title="PowerBI"
            src="https://app.powerbi.com/reportEmbed?reportId=4def2165-07cb-4510-993e-d466f45dc4ee&autoAuth=true&ctid=8acbc2c5-c8ed-42c7-8169-ba438a0dbe2f "
            width="100%"
            height="1000"
            frameBorder="0"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
