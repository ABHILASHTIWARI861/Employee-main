import React from "react";
import { XCircle, Tag, Calendar } from "lucide-react";

function Failed_task({ data }) {
  return (
    <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-5">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-sm font-medium text-red-700">
          <Tag size={16} />
          <span className="px-3 py-1 bg-red-100 rounded-full">
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
      <p className="text-sm text-gray-600 mb-4">
        {data.description}
      </p>

      {/* Status */}
      <div className="flex items-center gap-2 text-red-700 font-medium">
        <XCircle size={18} />
        <span>Task Failed</span>
      </div>

    </div>
  );
}

export default Failed_task;
