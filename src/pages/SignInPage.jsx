import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignInPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate(); // used for redirection
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload
    try {
      const res = await axios.post("http://localhost:3000/api/login", form);
      //   alert(res.data.message);
      console.log("User info:", res.data.user);
      navigate("/managerdashbord"); // 🔁 redirect to the dashboard after successful login
    } catch (err) {
      alert("Login failed: " + err.response.data.message);
    }
  };

  return (
    <div className="w-[500px] mx-auto my-50">
      <form className="w-[500px]" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
          placeholder="Enter Your Email"
          className="w-[500px] h-15 bg-gray-500 rounded-lg px-2 my-5"
        />
        <br />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
          placeholder="Enter Your Password"
          className="w-[500px] h-15 bg-gray-500 rounded-lg px-2 my-5"
        />
        <br />
        <button
          type="submit"
          className="w-20 h-9 bg-rose-500 rounded-lg text-white font-bold ml-50"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignInPage;
