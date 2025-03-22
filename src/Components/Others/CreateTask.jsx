import React, { useState, useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

function CreateTask() {
  const { employees, updateEmployees } = useContext(AuthContext);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskAssignTo, setTaskAssignTo] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      taskCategory,
      taskTitle,
      taskDate,
      taskDescription,
      ActiveTask: false,
      newTask: true,
      failedTask: false,
      CompletedTask: false,
    };

    const updatedData = employees.map((employee) => {
      if (employee.name === taskAssignTo) {
        return {
          ...employee,
          tasks: [...(employee.tasks || []), newTask],
          taskCount: {
            ...employee.taskCount,
            newTask: (employee.taskCount?.newTask || 0) + 1,
          },
        };
      }
      return employee;
    });

    updateEmployees(updatedData);

    setTaskAssignTo("");
    setTaskCategory("");
    setTaskDescription("");
    setTaskDate("");
    setTaskTitle("");
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg rounded-lg p-8 md:p-12">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">
        Create New Task
      </h2>
      <form onSubmit={submitHandler} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Task Title */}
        <div className="text-white">
          <label className="text-lg font-medium">Task Title</label>
          <input
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            type="text"
            className="w-full mt-2 p-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-white"
            placeholder="Enter task title"
            required
          />
        </div>

        {/* Task Date */}
        <div className="text-white">
          <label className="text-lg font-medium">Task Date</label>
          <input
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            type="date"
            className="w-full mt-2 p-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-white"
            required
          />
        </div>

        {/* Assign To */}
        <div className="text-white">
          <label className="text-lg font-medium">Assign To</label>
          <select
            value={taskAssignTo}
            onChange={(e) => setTaskAssignTo(e.target.value)}
            className="w-full mt-2 p-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-white"
            required
          >
            <option value="">Select an Employee</option>
            {employees.map((employee) => (
              <option key={employee.name} value={employee.name}>
                {employee.name}
              </option>
            ))}
          </select>
        </div>

        {/* Task Category */}
        <div className="text-white">
          <label className="text-lg font-medium">Category</label>
          <input
            value={taskCategory}
            onChange={(e) => setTaskCategory(e.target.value)}
            type="text"
            className="w-full mt-2 p-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-white"
            placeholder="Enter task category"
            required
          />
        </div>

        {/* Task Description */}
        <div className="col-span-1 md:col-span-2 text-white">
          <label className="text-lg font-medium">Description</label>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full mt-2 p-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-white h-24"
            placeholder="Enter task description"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2 flex justify-end">
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-300 ease-in-out shadow-md">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
