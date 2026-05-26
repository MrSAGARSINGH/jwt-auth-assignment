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
      }}
    >
      <div
        style={{
          width: "500px",
          background: "white",
          borderRadius: "20px",
          padding: "40px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
            fontSize: "42px",
          }}
        >
          Register
        </h1>

        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          style={inputStyle}
        />

        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          style={inputStyle}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          style={inputStyle}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm your password"
          style={inputStyle}
        />

        <label>Role</label>
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
          }}
        >
          Register
        </button>

        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          Already have an account? Login here
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "16px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  fontSize: "16px",
  marginTop: "8px",
  marginBottom: "20px",
};

export default Register;