// App.js
import { useState } from "react";
import Form from "./components/Form";
import Login from "./components/assets/Login";
import Signup from "./components/assets/Signup";

export default function App() {
  const [isLoginVisible, setIsLoginVisible] = useState(true);

  const handleToggle = () => {
    setIsLoginVisible((prev) => !prev);
  };

  return (
    <main className="relative flex items-center justify-center h-screen w-full overflow-hidden">
      <div
        className={`absolute inset-0 transition-all duration-700 ease-in-out
          bg-gradient-to-tr from-[#22c1c3] to-[#fdbb2d] transform ${
            isLoginVisible ? "translate-x-0" : "-translate-x-full"
          }`}
      />
      <div
        className={`absolute inset-0 transition-all duration-700 ease-in-out bg-gradient-to-r from-[#020024] via-[#090979] to-[#00d4ff] transform ${
          isLoginVisible ? "translate-x-full" : "translate-x-0"
        }`}
      />

      <div className="relative flex w-full max-w-4xl bg-white bg-opacity-50 backdrop-blur-lg shadow-lg rounded-lg overflow-hidden">
        {/* Login Form */}
        <div
          className={`flex-1 overflow-hidden transition-all duration-700 ease-in-out ${
            isLoginVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          <Form formType="login" />
        </div>

        {/* Signup Form */}
        <div
          className={`flex-1 flex items-center focus:outline-none justify-center transition-all duration-700 ease-in-out ${
            isLoginVisible
              ? "opacity-0 translate-x-10"
              : "opacity-100 translate-x-0"
          }`}
        >
          <Form formType="signup" />
        </div>

        {/* Button Panel */}
        <div
          className={`absolute inset-y-0 flex flex-col p-8 pt-0 w-1/2 transition-all duration-700 ease-in-out ${
            isLoginVisible ? "left-1/2" : "left-0 "
          }`}
        >
          <div className="flex transition-all h-full -mb-6 items-center justify-center">
            {isLoginVisible ? <Login /> : <Signup />}
          </div>
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
