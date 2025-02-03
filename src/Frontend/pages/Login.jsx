import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

// Native from web
export function loader({ request }) {
  // console.log(new URL(request.url).searchParams.get('message'));
  return new URL(request.url).searchParams.get('message');
}

export default function Login() {
  const [loginFormData, setLoginFormData] = React.useState({
    email: '',
    password: '',
  });

  // with React-Router
  // const [searchParams, setSearchParams] = useSearchParams();
  // const message = searchParams.get('message');
  // console.log(message);

  // Native
  const message = useLoaderData();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(loginFormData);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="login-container">
      <h1 className="mb-5 text-3xl font-bold">Sign in to your account</h1>
      {message && (
        <h3 className="mb-2 text-lg font-bold text-red-500">{message}</h3>
      )}
      <form onSubmit={handleSubmit} className="login-form">
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={loginFormData.email}
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password}
        />
        <button>Log in</button>
      </form>
    </div>
  );
}
