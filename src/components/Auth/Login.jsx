import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";

function Login({ handle_Login }) {
  const [email, set_email] = useState("");
  const [password, set_password] = useState("");

  function submitted(e) {
    e.preventDefault();
    handle_Login(email, password);
    set_email("");
    set_password("");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Welcome Back 👋
        </h2>

        <form onSubmit={submitted} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <div className="relative">
              <Mail
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                value={email}
                onChange={(e) => set_email(e.target.value)}
                type="email"
                placeholder="you@example.com"
                required
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                value={password}
                onChange={(e) => set_password(e.target.value)}
                type="password"
                placeholder="••••••••"
                required
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

      </div>
    </div>
  );
}

export default Login;
