import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const validateForm = () => {
    if (!username || !title || !email || !message || !phone) {
      setError('Username, Email, Password are required');
      return false;
    }
    console.log('Form Validated!');
    setError('');
    return true;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    const formDetail = {
      username: username,
      email: email,
      phone: phone,
      title: title,
      message: message,
    };
    console.log(formDetail);
    console.log(JSON.stringify(formDetail));

    try {
      const response = await fetch('http://localhost:8000/contact', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(formDetail),
      });
      setLoading(false);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        navigate('/login');
      } else {
        const errorData = await response.json();
        setError(errorData.detail || 'Sign up failed!');
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError('An error occured. Please try again later');
    }
  };

  return (
    <section className="flex flex-col justify-center items-center max-w-screen max-h-screen">
      <div className="contact-text text-center text-lg mb-3 bg-[#ff8c38] rounded-lg px-4 py-2">
        Contact Us!
      </div>
      <div className="contact-container bg-[#ffcc8d] py-10 px-4 w-lg rounded-xl">
        <h1 className="mb-5 text-3xl font-bold text-center">#VANLIFE</h1>
        <form
          onSubmit={handleSubmit}
          className="contact-form flex flex-col justify-center w-full max-w-[500px] text-black "
        >
          <div className="flex justify-between items-center mb-3">
            <div className="flex flex-col">
              <label htmlFor="username" className="">
                Username
              </label>
              <input
                id="username"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="John Doe"
                value={username}
                className="border rounded-lg p-1 focus:outline-0 text-center"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="">
                Email
              </label>
              <input
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="johndoe@example.com"
                value={email}
                className="border rounded-lg p-1 focus:outline-0 text-center"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between items-center gap-5 mb-3">
            <div className="flex flex-col w-full">
              <label htmlFor="phone" className="">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                placeholder="081234567890"
                value={phone}
                className="w-full border rounded-lg p-1 focus:outline-0"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="title" className="">
                Title
              </label>
              <input
                id="title"
                name="title"
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Help Needed"
                value={title}
                className="w-full border rounded-lg p-1 focus:outline-0"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="message" className="">
                Message
              </label>
              <input
                id="message"
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                type="text"
                placeholder="I need help with..."
                value={message}
                className="w-full border rounded-lg p-1 focus:outline-0"
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-[#ff8c38] border-0 rounded-[6px] h-[55px] mt-6 text-black"
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </section>
  );
}
