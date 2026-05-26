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
          padding: "20px 80px",
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(10px)",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "36px",
            fontWeight: "bold",
          }}
        >
          JWT Auth
        </h1>

        <div style={{ display: "flex", gap: "15px" }}>
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

      {/* Hero */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          paddingTop: "80px",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "70px",
            fontWeight: "bold",
          }}
        >
          JWT Authentication System
        </h1>

        <p
          style={{
            color: "white",
            fontSize: "28px",
            marginTop: "20px",
          }}
        >
          Role-Based Access Control with MERN Stack
        </p>

        <div
          style={{
            width: "900px",
            background: "white",
            borderRadius: "20px",
            padding: "40px",
            marginTop: "50px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            textAlign: "left",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "30px",
              fontSize: "36px",
            }}
          >
            Features
          </h2>

          <p>✅ Secure JWT token-based authentication</p>
          <br />
          <p>✅ Three role levels: User, Manager, and Admin</p>
          <br />
          <p>✅ Protected routes with role-based authorization</p>
          <br />
          <p>✅ Responsive design with React.js</p>
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