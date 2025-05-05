"use client";

import React, { useState } from "react";
import Axios from "@/lib/http-client";
import Axiosauth from "@/lib/http-auth";

import { supabase } from "@/config";

const SignInTemplate = () => {
  const [newTodo, setNewTodo] = useState<any>();

  const fetchUser = async () => {
    try {
      const response = await Axios.post("/todo", {
        task: "new todao posted",
      });
      console.log("todo created", response);
      return response.data;
    } catch (error: any) {
      console.error("Signup failed:", error.response?.data || error.message);
    }

    
    // try {
    //   const response = await Axiosauth.post("/token?grant_type=password", {
    //       email: 'ajayiezekiel559@gmail.com',
    //     password: 'example-password'
    //   });

    //   console.log("user login", response);
    //   return response.data;
    // } catch (error: any) {
    //   console.error("Signup failed:", error.response?.data || error.message);
    // }
  };

  // try {
  //   const response = await Axios.get('/users');
  //   console.log(response.data);
  // } catch (error) {
  //   console.error('Error fetching users:', error);

  

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
          {newTodo ? newTodo : "Sign In"}
        </h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full rounded-md border p-2 focus:border-blue-500 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 w-full rounded-md border p-2 focus:border-blue-500 focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            onClick={fetchUser}
            className="w-full rounded-md bg-blue-500 p-2 text-white transition hover:bg-blue-600"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInTemplate;
