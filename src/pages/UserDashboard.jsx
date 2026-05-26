import { useNavigate } from "react-router-dom";

function UserDashboard() {
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
            background: "linear-gradient(to right, #2563eb, #3b82f6)",
            color: "white",
            padding: "30px",
            borderRadius: "16px",
            marginBottom: "25px",
          }}
        >
          <h1 style={{ fontSize: "42px" }}>
            User Dashboard
          </h1>
          <p>
            Welcome, Sagar Singh! Access your profile and tasks.
          </p>
        </div>

        {/* Tasks Card */}
        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "14px",
            marginBottom: "25px",
            borderLeft: "6px solid #2563eb",
          }}
        >
          <h3>My Tasks</h3>
          <h1 style={{ fontSize: "50px" }}>5</h1>
        </div>

        {/* User Information */}
        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "14px",
            marginBottom: "25px",
          }}
        >
          <h2>👤 User Information</h2>

          <p><strong>Name:</strong> Sagar Singh</p>
          <p><strong>Email:</strong> user@gmail.com</p>
          <p><strong>Role:</strong> User</p>
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
          ℹ️ <strong>User Access Level:</strong> You can view and manage your personal tasks.
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "15px" }}>
          <button
            style={{
              flex: 1,
              padding: "14px",
              background: "#7e22ce",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/manager")}
          >
            Go to Manager Dashboard
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

export default UserDashboard;