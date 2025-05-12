import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/register",
        form
      );
      alert(response.data.message);
    } catch (error) {
      console.error("Error:", error);
      alert("Submission failed");
    }
  };

  return (
    <>
      <div className="flex justify-end text-black rounded-4xl px-20 mt-10 ">
        <Link className=" bg-rose-500" to={"/signinPage"}>
          Login
        </Link>
      </div>
      <div className="w-[500px] mx-auto my-10">
        <h1 className="text-center font-bold">Create Account</h1>
        <form className="w-[500px]" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fname"
            onChange={(e) =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
            placeholder="Enter Your First Name"
            className="w-[500px] h-15 bg-gray-500 rounded-lg px-2 my-5"
          />
          <br />
          <input
            type="text"
            name="lname"
            onChange={(e) =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
            placeholder="Enter Your Last Name"
            className="w-[500px] h-15 bg-gray-500 rounded-lg px-2 my-5"
          />
          <br />
          <input
            type="email"
            name="email"
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
            onChange={(e) =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
            placeholder="Enter Your Password"
            className="w-[500px] h-15 bg-gray-500 rounded-lg px-2 my-5"
          />
          <br />
          <div className="flex justify-between">
            <button
              type="submit"
              className="w-20 h-9 bg-rose-500 rounded-lg text-white font-bold"
            >
              Manager
            </button>
            <button
              type="submit"
              className="w-20 h-9 bg-rose-500 rounded-lg text-white font-bold"
            >
              Employee
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
