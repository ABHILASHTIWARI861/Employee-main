import React from "react";
import { ClipboardList, CheckCircle, PlayCircle, XCircle } from "lucide-react";

function Task_list_number({ data }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

      {/* New Task */}
      <div className="bg-red-500 text-white rounded-2xl p-6 shadow-md">
        <div className="flex items-center justify-between">
          <ClipboardList size={28} />
          <h1 className="text-3xl font-bold">
            {data.taskStats.newTask}
          </h1>
        </div>
        <p className="mt-4 text-lg font-medium">New Tasks</p>
      </div>

      {/* Completed Task */}
      <div className="bg-blue-500 text-white rounded-2xl p-6 shadow-md">
        <div className="flex items-center justify-between">
          <CheckCircle size={28} />
          <h1 className="text-3xl font-bold">
            {data.taskStats.completed}
          </h1>
        </div>
        <p className="mt-4 text-lg font-medium">Completed Tasks</p>
      </div>

      {/* Active Task */}
      <div className="bg-green-500 text-white rounded-2xl p-6 shadow-md">
        <div className="flex items-center justify-between">
          <PlayCircle size={28} />
          <h1 className="text-3xl font-bold">
            {data.taskStats.active}
          </h1>
        </div>
        <p className="mt-4 text-lg font-medium">Accepted Tasks</p>
      </div>

      {/* Failed Task */}
      <div className="bg-yellow-400 text-gray-900 rounded-2xl p-6 shadow-md">
        <div className="flex items-center justify-between">
          <XCircle size={28} />
          <h1 className="text-3xl font-bold">
            {data.taskStats.failed}
          </h1>
        </div>
        <p className="mt-4 text-lg font-medium">Failed Tasks</p>
      </div>

    </div>
  );
}

export default Task_list_number;
