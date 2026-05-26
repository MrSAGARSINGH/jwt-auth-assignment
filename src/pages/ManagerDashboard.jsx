import { useNavigate } from "react-router-dom";

function ManagerDashboard() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f3f4f6",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Navbar */}
      <div
        style={{
          background: "#2563eb",
          color: "white",
          padding: "18px",
          textAlign: "center",
          fontSize: "28px",
          fontWeight: "bold",
        }}
      >
        JWT Auth
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "30px auto",
          padding: "20px",
        }}
      >
        {/* Header Card */}
        <div
          style={{
            background: "linear-gradient(to right, #7e22ce, #a855f7)",
            color: "white",
            padding: "30px",
            borderRadius: "16px",
            marginBottom: "25px",
          }}
        >
          <h1 style={{ fontSize: "42px" }}>
            Manager Dashboard
          </h1>
          <p>
            Welcome, Sagar Singh! Manage your team efficiently.
          </p>
        </div>

        {/* Team Card */}
        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "14px",
            marginBottom: "25px",
            borderLeft: "6px solid #3b82f6",
          }}
        >
          <h3>Team Members</h3>
          <h1 style={{ fontSize: "50px" }}>10</h1>
        </div>

        {/* Activities */}
        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "14px",
            marginBottom: "25px",
          }}
        >
          <h2>📋 Recent Activities</h2>

          <ul style={{ lineHeight: "2", marginTop: "10px" }}>
            <li>Approved project proposal from Team A</li>
            <li>Reviewed performance reports</li>
            <li>Scheduled team meeting for next week</li>
            <li>Assigned new tasks to team members</li>
          </ul>
        </div>

        {/* Info Box */}
        <div
          style={{
            background: "#dbeafe",
            borderLeft: "5px solid #2563eb",
            padding: "18px",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        >
          ℹ️ <strong>Manager Access Level:</strong> You can manage team members and projects.
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "15px" }}>
          <button
            style={{
              flex: 1,
              padding: "14px",
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/user")}
          >
            View User Dashboard
          </button>

          <button
            style={{
              flex: 1,
              padding: "14px",
              background: "#dc2626",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/admin")}
          >
            Go to Admin Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default ManagerDashboard;