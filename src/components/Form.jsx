import React, { useState } from "react";
import Icons from "./Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import IconGoogle from "./assets/IconGoogle";

const Form = ({ formType }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "user@example.com" && password === "password123") {
      alert("Signed in successfully!");
    } else {
      setErrorMessage("Invalid email or password");
    }
  };

  return (
    <div
      className={`bg-white w-full h-full p-8  ${
        formType === "login" ? "rounded-s-lg" : "rounded-e-lg"
      }`}
    >
      <h2 className="text-2xl font-semibold text-center text-black mb-6">
        {formType === "login" ? "Sign In" : "Sign Up"}
      </h2>

      {errorMessage && (
        <div className="text-red-500 text-center mb-4">{errorMessage}</div>
      )}

      <div className="mb-4 flex flex-col gap-4">
        <button className="w-full py-2 px-4 text-black rounded-md flex items-center justify-center gap-2 border border-gray-300 hover:border-black focus:ring-2 focus:ring-black focus:ring-opacity-50">
          <IconGoogle />
          {formType === "login" ? "Sign In" : "Sign Up"} with Google
        </button>
        <button className="w-full py-2 px-4 text-black rounded-md flex items-center justify-center gap-2 border border-gray-300 hover:border-black focus:ring-2 focus:ring-black focus:ring-opacity-50">
          <FontAwesomeIcon icon={faApple} size="xl" />
          {formType === "login" ? "Sign In" : "Sign Up"} with Apple
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <label className="block text-sm mb-4 font-medium text-gray-700 text-start">
          Email
          <input
            type="email"
            name="email"
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-700 focus:border-gray-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@company.com"
            required
          />
        </label>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-4 text-start">
            Password
            <input
              type="password"
              placeholder="******"
              name="password"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black-500 focus:border-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          {formType === "signup" ? (
            <label className="block text-sm font-medium text-gray-700 mb-4 text-start">
              Confirm Password
              <input
                type="password"
                placeholder="******"
                name="password"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black-500 focus:border-black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
          ) : null}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 text-white hover:text-black font-bold hover:bg-white bg-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 transition-colors duration-300 ease-out"
        >
          {formType === "login" ? "Sign In" : "Sign Up"}
        </button>
      </form>
      <Icons />
    </div>
  );
};

export default Form;
