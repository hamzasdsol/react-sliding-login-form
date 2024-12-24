// App.js
import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";

export default function App() {
  const [isLoginVisible, setIsLoginVisible] = useState(true);

  const handleToggle = () => {
    setIsLoginVisible((prev) => !prev);
  };

  return (
    <main className="relative flex items-center justify-center h-screen w-full overflow-hidden">
      <div
        className={`absolute inset-0 transition-all duration-700 ease-in-out bg-gradient-to-r from-green-400 to-blue-500 transform ${
          isLoginVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      />
      <div
        className={`absolute inset-0 transition-all duration-700 ease-in-out bg-gradient-to-r from-purple-500 to-pink-400 transform ${
          isLoginVisible ? "translate-x-full" : "translate-x-0"
        }`}
      />

      <div className="relative flex w-full max-w-4xl h-3/4 bg-white bg-opacity-50 backdrop-blur-lg shadow-lg rounded-lg overflow-hidden">
        {/* Login Form */}
        <div
          className={`w-1/2 flex items-center justify-center p-8 transition-all duration-700 ease-in-out ${
            isLoginVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          <Login />
        </div>

        {/* Signup Form */}
        <div
          className={`w-1/2 flex items-center focus:outline-none justify-center p-8 transition-all duration-700 ease-in-out ${
            isLoginVisible
              ? "opacity-0 translate-x-10"
              : "opacity-100 translate-x-0"
          }`}
        >
          <Signup />
        </div>

        {/* Button Panel */}
        <div
          className={`absolute inset-y-0 flex items-center justify-center w-1/2 transition-all duration-700 ease-in-out ${
            isLoginVisible ? "left-1/2" : "left-0 "
          }`}
        >
          <button
            className="px-6 py-3 font-bold text-white bg-black rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-0"
            onClick={handleToggle}
          >
            {isLoginVisible ? "Go to Signup" : "Go to Login"}
          </button>
        </div>
      </div>
    </main>
  );
}
