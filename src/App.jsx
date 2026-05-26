import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import ManagerDashboard from "./pages/ManagerDashboard";
import UserDashboard from "./pages/UserDashboard";
import ProtectedRoute from "./components/protectedRoute";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 25px",
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(10px)",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "clamp(28px, 5vw, 36px)",
            fontWeight: "bold",
          }}
        >
          JWT Auth
        </h1>

        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => navigate("/login")}
            style={buttonStyle}
          >
            Login
          </button>

          <button
            onClick={() => navigate("/register")}
            style={{
              ...buttonStyle,
              background: "#22c55e",
              color: "white",
            }}
          >
            Register
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "60px 20px",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "clamp(35px, 7vw, 70px)",
            fontWeight: "bold",
            lineHeight: "1.2",
          }}
        >
          JWT Authentication System
        </h1>

        <p
          style={{
            color: "white",
            fontSize: "clamp(18px, 3vw, 28px)",
            marginTop: "20px",
            padding: "0 20px",
          }}
        >
          Role-Based Access Control with MERN Stack
        </p>

        {/* Features Card */}
        <div
          style={{
            width: "90%",
            maxWidth: "900px",
            background: "white",
            borderRadius: "20px",
            padding: "30px",
            marginTop: "50px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            textAlign: "left",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "30px",
              fontSize: "clamp(28px, 4vw, 36px)",
            }}
          >
            Features
          </h2>

          <p style={featureText}>
            ✅ Secure JWT token-based authentication
          </p>

          <p style={featureText}>
            ✅ Three role levels: User, Manager, and Admin
          </p>

          <p style={featureText}>
            ✅ Protected routes with role-based authorization
          </p>

          <p style={featureText}>
            ✅ Responsive design with React.js
          </p>
        </div>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "40px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <button
            onClick={() => navigate("/login")}
            style={{
              ...buttonStyle,
              padding: "15px 35px",
            }}
          >
            Login
          </button>

          <button
            onClick={() => navigate("/register")}
            style={{
              ...buttonStyle,
              padding: "15px 35px",
              background: "#22c55e",
              color: "white",
            }}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: "12px 25px",
  border: "none",
  borderRadius: "10px",
  background: "white",
  color: "#2563eb",
  fontWeight: "bold",
  fontSize: "16px",
  cursor: "pointer",
};

const featureText = {
  fontSize: "clamp(16px, 2vw, 20px)",
  marginBottom: "18px",
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/manager"
          element={
            <ProtectedRoute allowedRoles={["manager"]}>
              <ManagerDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/user"
          element={
            <ProtectedRoute allowedRoles={["user"]}>
              <UserDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;