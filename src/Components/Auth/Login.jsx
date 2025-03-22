import React, { useState } from "react";

function Login({ LoginHandler }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const FormHandler = (e) => {
    e.preventDefault();
    if (LoginHandler) {
      LoginHandler(email, password);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex w-full h-screen justify-center items-center bg-[#0A0F1D] px-6">
      <form
        onSubmit={FormHandler}
        className="flex flex-col border border-gray-600 shadow-2xl rounded-3xl p-8 sm:p-12 md:p-16 lg:p-20 bg-[#11182B]/80 backdrop-blur-md w-full max-w-md"
      >
        <h2 className="text-white text-3xl font-bold text-center mb-6">Login</h2>

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-[#11182B] border-2 px-6 sm:px-8 py-4 sm:py-5 border-[#334155] text-white font-semibold rounded-full text-lg sm:text-xl outline-none transition-all focus:border-blue-500 hover:border-blue-600"
          type="email"
          placeholder="Enter your email"
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="bg-[#11182B] border-2 px-6 sm:px-8 py-4 sm:py-5 border-[#334155] text-white font-semibold rounded-full text-lg sm:text-xl outline-none transition-all focus:border-blue-500 hover:border-blue-600 mt-4"
          type="password"
          placeholder="Enter your password"
        />

        <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 rounded-full mt-6 transition-all hover:scale-105 hover:from-blue-600 hover:to-blue-700 shadow-lg">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
