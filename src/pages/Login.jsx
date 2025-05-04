import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5173/api/login", {
        email,
        password,
      });

      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", user.role);
      // redirect to the dashboard based on the user role
      if ((user, role === "manager")) {
        navigate("/manager/dashboard");
      } else {
        navigate("/employee/dashboard");
      }
    } catch (error) {
      alert("Login failed: " + err.response?.data?.message || err.message);
    }
  };
  return (
    <div className=" w-[500px] h-100vh mx-auto  my-50 ">
      <form onSubmit={handleLogin} className="w-[500px] ">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your email"
          autofill="off"
          className="w-[500px] h-15 bg-gray-500 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent px-2 my-5"
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Your password"
          className="w-[500px] h-15 bg-gray-500 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent px-2 my-5"
        />
        <br />
        <button
          type="submit"
          className="flex w-20 h-9 bg-rose-500  rounded-lg hover:bg-rose-600 text-white font-bold mx-auto items-center justify-center"
        >
          Sign In
        </button>
        <br />
      </form>
    </div>
  );
}

export default Login;

{
  /* <input
          type="text"
          name="fname"
          placeholder="Enter Your first Name"
          className="w-[500px] h-10 bg-gray-500 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent px-2 my-5"
        />
        <br />
        <input
          type="text"
          name="lname"
          placeholder="Enter Your last Name"
          className="w-[500px] h-10 bg-gray-500 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent px-2 my-5"
        />
        <br /> */
}

//   <div className="flex justify-between">
//   <button
//     onClick={handleClick}
//     className="w-20 h-9 bg-rose-500  rounded-lg hover:bg-rose-600 text-white font-bold"
//   >
//     Manager
//   </button>
//   <button
//     onClick={handleClick}
//     className="w-20 h-9 bg-rose-500  rounded-lg hover:bg-rose-600 text-white font-bold"
//   >
//     Employee
//   </button>
// </div>
