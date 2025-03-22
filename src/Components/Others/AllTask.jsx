import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

function AllTask() {
  const { employees } = useContext(AuthContext);

  return (
    <div className="mt-5 px-4 sm:px-8 w-full">
      {/* Desktop View: Table Layout */}
      <div className="hidden sm:block overflow-x-auto">
        <div className="min-w-[900px] w-full bg-[#1e3a8a] py-4 px-6 grid grid-cols-5 font-semibold text-white rounded-t-lg shadow-lg">
          <h5 className="text-center uppercase">Employee</h5>
          <h5 className="text-center uppercase">New</h5>
          <h5 className="text-center uppercase">Active</h5>
          <h5 className="text-center uppercase">Completed</h5>
          <h5 className="text-center uppercase">Failed</h5>
        </div>

        {/* Table Rows */}
        {employees.map((employee, index) => (
          <div
            key={index}
            className="min-w-[900px] w-full border border-blue-500 py-4 px-6 grid grid-cols-5 text-white text-center bg-gray-900 hover:bg-gray-800 transition-all duration-300 shadow-md"
          >
            <h5 className="text-zinc-50 font-medium">{employee.name}</h5>
            <h5 className="text-[#7c3aed] font-semibold">{employee.taskCount?.newTask || 0}</h5>
            <h5 className="text-[#2563eb] font-semibold">{employee.taskCount?.accepted || 0}</h5>
            <h5 className="text-[#059669] font-semibold">{employee.taskCount?.completed || 0}</h5>
            <h5 className="text-[#dc2626] font-semibold">{employee.taskCount?.failed || 0}</h5>
          </div>
        ))}
      </div>

      {/* Mobile View: Card Layout */}
      <div className="sm:hidden space-y-4 mt-5">
        {employees.map((employee, index) => (
          <div key={index} className="bg-gray-900 p-5 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-white text-center mb-3">{employee.name}</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-[#5b21b6] text-white rounded-md text-center">
                <h5 className="text-[#7c3aed] text-lg font-semibold">New</h5>
                <p className="text-xl font-bold">{employee.taskCount?.newTask || 0}</p>
              </div>
              <div className="p-3 bg-[#1e40af] text-white rounded-md text-center">
                <h5 className="text-[#2563eb] text-lg font-semibold">Active</h5>
                <p className="text-xl font-bold">{employee.taskCount?.accepted || 0}</p>
              </div>
              <div className="p-3 bg-[#065f46] text-white rounded-md text-center">
                <h5 className="text-[#059669] text-lg font-semibold">Completed</h5>
                <p className="text-xl font-bold">{employee.taskCount?.completed || 0}</p>
              </div>
              <div className="p-3 bg-[#7f1d1d] text-white rounded-md text-center">
                <h5 className="text-[#dc2626] text-lg font-semibold">Failed</h5>
                <p className="text-xl font-bold">{employee.taskCount?.failed || 0}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllTask;
