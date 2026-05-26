import { useNavigate } from "react-router-dom";

function AdminDashboard() {
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
          boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
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
        {/* Welcome Card */}
        <div
          style={{
            background: "linear-gradient(to right, #dc2626, #ef4444)",
            color: "white",
            padding: "30px",
            borderRadius: "16px",
            marginBottom: "25px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
          }}
        >
          <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
            Admin Dashboard
          </h1>
          <p style={{ fontSize: "18px" }}>
            Welcome, Sagar Singh! You have full system access.
          </p>
        </div>

        {/* Stats Card */}
        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "14px",
            marginBottom: "25px",
            boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
            borderLeft: "6px solid #3b82f6",
          }}
        >
          <h3 style={{ color: "#555" }}>Total Users</h3>
          <h1 style={{ fontSize: "50px", color: "#111827" }}>100</h1>
        </div>

        {/* Admin Actions */}
        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "14px",
            marginBottom: "25px",
            boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2>🛠 Admin Actions</h2>

          {[
            {
              title: "Manage Users",
              desc: "Add, edit, or remove users",
              color: "#dbeafe",
            },
            {
              title: "System Settings",
              desc: "Configure system preferences",
              color: "#f3e8ff",
            },
            {
              title: "View Logs",
              desc: "Access system audit logs",
              color: "#dcfce7",
            },
            {
              title: "Security Settings",
              desc: "Manage security configurations",
              color: "#fee2e2",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background: item.color,
                padding: "18px",
                borderRadius: "12px",
                marginTop: "15px",
              }}
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Admin Info */}
        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "14px",
            marginBottom: "20px",
            boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2>Admin Information</h2>
          <p>
            <strong>Name:</strong> Sagar Singh
          </p>
          <p>
            <strong>Email:</strong> admin@gmail.com
          </p>
          <p>
            <strong>Role:</strong> Admin
          </p>
        </div>

        {/* Warning Box */}
        <div
          style={{
            background: "#fef3c7",
            borderLeft: "5px solid orange",
            padding: "18px",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        >
          ⚠️ <strong>Admin Access Level:</strong> You have full access to manage
          the system.
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
              fontSize: "16px",
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
              fontSize: "16px",
              cursor: "pointer",
            }}
            onClick={() => {
              localStorage.removeItem("user");
              navigate("/");
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;