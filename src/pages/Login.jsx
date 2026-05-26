import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const users = [
    {
      email: "admin@gmail.com",
      password: "123",
      role: "admin",
    },
    {
      email: "manager@gmail.com",
      password: "123",
      role: "manager",
    },
    {
      email: "user@gmail.com",
      password: "123",
      role: "user",
    },
  ];

  const handleLogin = () => {
    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!foundUser) {
      alert("Invalid Credentials");
      return;
    }

    localStorage.setItem("user", JSON.stringify(foundUser));

    if (foundUser.role === "admin") {
      navigate("/admin");
    } else if (foundUser.role === "manager") {
      navigate("/manager");
    } else {
      navigate("/user");
    }
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
          width: "420px",
          background: "white",
          borderRadius: "20px",
          padding: "40px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
          Login
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "16px",
            border: "none",
            borderRadius: "10px",
            background: "#2563eb",
            color: "white",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Login
        </button>

        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <p><strong>Test Accounts</strong></p>
          <p>admin@gmail.com / 123</p>
          <p>manager@gmail.com / 123</p>
          <p>user@gmail.com / 123</p>
        </div>
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
  marginBottom: "20px",
};

export default Login;