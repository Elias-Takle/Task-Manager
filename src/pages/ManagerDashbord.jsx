import React from "react";
import { Link } from "react-router-dom";
function ManagerDashbord() {
  return (
    <div>
      <ul>
        <li className="text-center font-bold text-2xl">Manager Dashbord</li>
        <li className="text-center font-bold text-2xl">
          Welcome to the Manager Dashbord
        </li>
        <Link to={"/createtask"}>
          <li>Create Task</li>
        </Link>
        <Link to={"/create"}>
          <li>Edit Task</li>
        </Link>
        <Link to={"/create"}>
          <li>Delete Task</li>
        </Link>
        <Link to={"/create"}>
          <li>Assign Task</li>
        </Link>
        <Link to={"/create"}>
          <li>Add User</li>
        </Link>
      </ul>
    </div>
  );
}

export default ManagerDashbord;
