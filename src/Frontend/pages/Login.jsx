import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

// Native from web
export function loader({ request }) {
  // console.log(new URL(request.url).searchParams.get('message'));
  return new URL(request.url).searchParams.get("message");
}

export default function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const validateForm = () => {
    if (!username || !password) {
      setError("Username and password are required");
      return false;
    }
    setError("");
    return true;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    const formDetail = new URLSearchParams();
    formDetail.append("username", username);
    formDetail.append("password", password);

    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-type": "application/x-www-form-urlencoded",
        },
        body: formDetail,
      });
      setLoading(false);
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.access_token);
        navigate("/host");
      } else {
        const errorData = await response.json();
        setError(errorData.detail || "Authentication failed!");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("An error occured. Please try again later");
    }
  };

  // with React-Router
  // const [searchParams, setSearchParams] = useSearchParams();
  // const message = searchParams.get('message');
  // console.log(message);

  // Native
  const message = useLoaderData();

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log(loginFormData);
  // }

  // function handleChange(e) {
  //   const { name, value } = e.target;
  //   setLoginFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // }

  return (
    <div className="login-container">
      <h1 className="mb-5 text-3xl font-bold">Sign in to your account</h1>
      {message && (
        <h3 className="mb-2 text-lg font-bold text-red-500">{message}</h3>
      )}
      {error && (
        <h3 className="mb-2 text-lg font-bold text-red-500">{error}</h3>
      )}
      <form onSubmit={handleSubmit} className="login-form">
        {/* <input
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email address"
          value={loginFormData.email}
        /> */}
        <input
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
          value={username}
        />
        <input
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          value={password ? password : loginFormData.password}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
