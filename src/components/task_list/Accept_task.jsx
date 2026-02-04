import React from "react";
import { CheckCircle, XCircle, Tag, Calendar } from "lucide-react";

function Accepted_task({ data }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-5 hover:shadow-lg transition">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-sm font-medium text-blue-600">
          <Tag size={16} />
          <span className="px-3 py-1 bg-blue-100 rounded-full">
            {data.category}
          </span>
        </div>

        <div className="flex items-center gap-1 text-sm text-gray-500">
          <Calendar size={16} />
          <span>{data.date}</span>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800 mb-2">
        {data.title}
      </h2>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-5">
        {data.description}
      </p>

      {/* Actions */}
      <div className="flex gap-4">
        <button
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition"
        >
          <CheckCircle size={16} />
          Mark as Completed
        </button>

        <button
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition"
        >
          <XCircle size={16} />
          Mark as Failed
        </button>
      </div>
    </div>
  );
}

export default Accepted_task;
