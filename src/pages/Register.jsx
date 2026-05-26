import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/login");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "500px",
          background: "white",
          borderRadius: "20px",
          padding: "35px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          margin: "20px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
            fontSize: "clamp(30px, 5vw, 42px)",
            color: "#16a34a",
          }}
        >
          Register
        </h1>

        <label style={labelStyle}>Full Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          style={inputStyle}
        />

        <label style={labelStyle}>Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          style={inputStyle}
        />

        <label style={labelStyle}>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          style={inputStyle}
        />

        <label style={labelStyle}>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm your password"
          style={inputStyle}
        />

        <label style={labelStyle}>Role</label>
        <select style={inputStyle}>
          <option>User</option>
          <option>Manager</option>
          <option>Admin</option>
        </select>

        <button
          onClick={handleRegister}
          style={{
            width: "100%",
            padding: "16px",
            border: "none",
            borderRadius: "10px",
            background: "#16a34a",
            color: "white",
            fontSize: "18px",
            fontWeight: "bold",
            marginTop: "20px",
            cursor: "pointer",
          }}
        >
          Register
        </button>

        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontSize: "14px",
          }}
        >
          Already have an account?{" "}
          <span
            style={{
              color: "#2563eb",
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onClick={() => navigate("/login")}
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
}

const labelStyle = {
  fontWeight: "600",
  display: "block",
  marginBottom: "8px",
};

const inputStyle = {
  width: "100%",
  padding: "16px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  fontSize: "16px",
  marginBottom: "20px",
  boxSizing: "border-box",
};

export default Register;