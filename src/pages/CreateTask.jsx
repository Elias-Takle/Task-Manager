import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
function CreateTask() {
  const [form, setForm] = useState({
    taskName: "",
    description: "",
  });

  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!form.taskName.trim()) return;

    // Add new task to the list
    setTasks([...tasks, form]);

    // Clear input fields
    setForm({ taskName: "", description: "" });
  };

  return (
    <>
      <div className="w-[500px] mx-auto my-10 space-y-6">
        <form onSubmit={handleAddTask}>
          <input
            name="taskName"
            className="w-[300px] h-12 bg-gray-500 px-2 mb-4 rounded-lg ml-20 text-white placeholder:text-white"
            type="text"
            value={form.taskName}
            onChange={handleChange}
            placeholder="Create Task"
          />
          <br />
          <textarea
            name="description"
            className="w-[300px] h-32 bg-gray-500 px-2 rounded-xl ml-20 text-white placeholder:text-white"
            value={form.description}
            onChange={handleChange}
            placeholder="Add description"
          />
          <br />
          <button
            type="submit"
            className="ml-20 mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Add Task
          </button>
        </form>
      </div>
      {/* ✅ Display tasks only after button is clicked */}
      <div className="flex flex-wrap space-y-4">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-4 rounded-lg ml-20 w-[300px]"
          >
            <h2 className="text-lg font-bold text-gray-800">{task.taskName}</h2>
            <p className="text-gray-600">{task.description}</p>
            <div className="flex justify-between text-white">
              <span className=" bg-red-500 rounded-full p-2">
                <MdDelete />
              </span>
              <span className=" bg-gray-500 rounded-full p-2">
                <FaEdit />
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CreateTask;
