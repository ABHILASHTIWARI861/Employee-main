import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

function All_task() {
  const [user_data] = useContext(AuthContext);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Employee Task Overview
      </h2>

      {/* Table Header */}
      <div className="grid grid-cols-5 text-sm font-semibold text-gray-600 border-b pb-3">
        <span>Employee</span>
        <span className="text-center">New</span>
        <span className="text-center">Active</span>
        <span className="text-center">Completed</span>
        <span className="text-center">Failed</span>
      </div>

      {/* Table Rows */}
      <div className="mt-4 space-y-3">
        {user_data.map((emp, idx) => (
          <div
            key={idx}
            className="grid grid-cols-5 items-center bg-gray-50 rounded-lg px-4 py-3 hover:bg-gray-100 transition"
          >
            <span className="font-medium text-gray-800">
              {emp.firstname}
            </span>

            <span className="text-center text-blue-600 font-semibold">
              {emp.taskStats.newTask}
            </span>

            <span className="text-center text-yellow-600 font-semibold">
              {emp.taskStats.active}
            </span>

            <span className="text-center text-green-600 font-semibold">
              {emp.taskStats.completed}
            </span>

            <span className="text-center text-red-500 font-semibold">
              {emp.taskStats.failed}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default All_task;
