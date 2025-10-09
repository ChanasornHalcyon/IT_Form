import React, { useState } from "react";
import { useRouter } from "next/router";
import Navbar from "./components/Navbar";

const Index = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    router.push("./Homepage");
    e.preventDefault();
  };

  return (
    <div className="container mx-auto max-w-[1920px] h-dvh bg-white">
      <Navbar />
      <div className="flex justify-center items-center mt-10">
        <div className="bg-white border border-gray-300 shadow-lg rounded-xl p-8 w-[350px] md:w-[400px]">
          <form className="flex flex-col gap-4" onSubmit={login}>
            <div>
              <label
                htmlFor="username"
                className="block mb-1 font-medium text-black text-left"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                placeholder="Enter your username"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block mb-1 font-medium text-black text-left"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
