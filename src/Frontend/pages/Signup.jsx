import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const validateForm = () => {
    if (!username || !password || !email) {
      setError("Username, Email, Password are required");
      return false;
    }
    console.log("Form Validated!");
    setError("");
    return true;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    const formDetail = {
      username: username,
      email: email,
      password: password,
    };
    console.log(formDetail);
    console.log(JSON.stringify(formDetail));

    try {
      const response = await fetch("http://localhost:8000/signup", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formDetail),
      });
      setLoading(false);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        navigate("/login");
      } else {
        const errorData = await response.json();
        setError(errorData.detail || "Sign up failed!");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("An error occured. Please try again later");
    }
  };

  return (
    <div className="login-container">
      <h1 className="mb-5 text-3xl font-bold">Sign in to your account</h1>
      {error && (
        <h3 className="mb-2 text-lg font-bold text-red-500">{error}</h3>
      )}
      <form onSubmit={handleSubmit} className="login-form">
        <input
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
          value={username}
        />
        <input
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email address"
          value={email}
        />
        <input
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          value={password}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Signing up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
}
