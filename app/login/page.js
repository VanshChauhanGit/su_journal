import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <Wrapper>
      <h1 className="text-2xl font-bold text-teal-700">
        Login to Your Account
      </h1>
      <hr className="border-t border-teal-700 my-2" />

      <div className="flex flex-col justify-center items-center">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md border border-teal-100">
          <form className="space-y-5">
            <div>
              <label
                className="block text-teal-700 font-semibold mb-1"
                htmlFor="email"
              >
                Email ID <span className="text-teal-600">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-2 border border-teal-200 rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                className="block text-teal-700 font-semibold mb-1"
                htmlFor="password"
              >
                Password <span className="text-teal-600">*</span>
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full px-4 py-2 border border-teal-200 rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 rounded transition duration-200"
            >
              Login
            </button>
            <div className="flex justify-between text-sm mt-2">
              <Link href="/signup" className="text-teal-700 hover:underline">
                New User? Sign Up
              </Link>
              <Link
                href="/forgot-password"
                className="text-teal-700 hover:underline"
              >
                Forgot Password
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}

export default page;
