import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className=" w-[500px] h-100vh mx-auto  my-20 ">
      <form className="w-[500px] ">
        <input
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
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter Your email"
          autofill="off"
          className="w-[500px] h-10 bg-gray-500 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent px-2 my-5"
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter Your password"
          className="w-[500px] h-10 bg-gray-500 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent px-2 my-5"
        />
        <br />
        <h1 className="text-center font-extrabold">Your Role</h1>
        <br />

        <div className="flex justify-between">
          <Link to="/managerdashbord">
            <button className="w-20 h-9 bg-rose-500  rounded-lg hover:bg-rose-600 text-white font-bold">
              Manager
            </button>
          </Link>
          <Link to="/employeedashbord">
            <button className="w-20 h-9 bg-rose-500  rounded-lg hover:bg-rose-600 text-white font-bold">
              Employee
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
