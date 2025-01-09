import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Admin() {
  // In a real app, you'd verify admin role by token or server check
  return (
    <>
      <Navbar />
      <div style={{ minHeight: "70vh", padding: "2em" }}>
        <h1>Admin Panel</h1>
        <p>Manage users, system configurations, and advanced analytics.</p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2em",
            marginTop: "2em",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "2em",
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h3>User Management</h3>
            <p>View and manage registered users, assign roles, and handle permissions.</p>
          </div>
          <div
            style={{
              background: "#fff",
              padding: "2em",
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h3>System Configurations</h3>
            <p>Configure threshold alerts, sensors, and water usage policies.</p>
          </div>
          <div
            style={{
              background: "#fff",
              padding: "2em",
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h3>Advanced Analytics</h3>
            <p>Deeper insights with custom queries, multi-site comparisons, etc.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Admin;
