import React from "react";
import { LogOut, User } from "lucide-react";

function Header({ change_user, data }) {

  function logOut() {
    localStorage.setItem("loggedInUser", "");
    change_user("");
  }

  return (
    <div className="flex items-center justify-between p-6 bg-white shadow-md rounded-xl mb-6">
      
      {/* Left Section */}
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600">
          <User size={20} />
        </div>

        <div>
          <p className="text-sm text-gray-500">Hello</p>
          <h1 className="text-xl font-semibold text-gray-800">
            {data ? data.firstname : "Admin"} ✌️
          </h1>
        </div>
      </div>

      {/* Logout Button */}
      <button
        onClick={logOut}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition-all duration-200"
      >
        <LogOut size={16} />
        Log Out
      </button>

    </div>
  );
}

export default Header;
