import Wrapper from "@/components/Wrapper";
import React from "react";

function page() {
  return (
    <Wrapper>
      <h1 className="text-2xl font-bold text-teal-700">Create Your Account</h1>
      <hr className="border-t border-teal-700 my-2" />

      <div className="flex items-center justify-center">
        <div className="bg-white rounded shadow-md p-8 w-full max-w-3xl border border-teal-100">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-teal-700 font-semibold mb-1">
                Name <span className="text-teal-600">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Name"
                className="w-full px-4 py-2 border border-teal-200 rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>
            <div>
              <label className="block text-teal-700 font-semibold mb-1">
                Mobile No <span className="text-teal-600">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="Mobile No"
                className="w-full px-4 py-2 border border-teal-200 rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>
            <div>
              <label className="block text-teal-700 font-semibold mb-1">
                Email ID <span className="text-teal-600">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="Email ID"
                className="w-full px-4 py-2 border border-teal-200 rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>
            
            <div>
              <label className="block text-teal-700 font-semibold mb-1">
                Password <span className="text-teal-600">*</span>
              </label>
              <input
                type="password"
                required
                placeholder="Password"
                className="w-full px-4 py-2 border border-teal-200 rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>
            <div>
              <label className="block text-teal-700 font-semibold mb-1">
                Re-Type Password <span className="text-teal-600">*</span>
              </label>
              <input
                type="password"
                required
                placeholder="Re-Type Password"
                className="w-full px-4 py-2 border border-teal-200 rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>
            <div>
              <label className="block text-teal-700 font-semibold mb-1">
                City
              </label>
              <input
                type="text"
                placeholder="City"
                className="w-full px-4 py-2 border border-teal-200 rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>
            <div>
              <label className="block text-teal-700 font-semibold mb-1">
                State
              </label>
              <input
                type="text"
                placeholder="State"
                className="w-full px-4 py-2 border border-teal-200 rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>
            <div>
              <label className="block text-teal-700 font-semibold mb-1">
                Country <span className="text-teal-600">*</span>
              </label>
              <select
                required
                className="w-full px-4 py-2 border border-teal-200 rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
              >
                <option value="">Select</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                {/* Add more countries as needed */}
              </select>
            </div>
            {/* <div className="md:col-span-1 col-span-full">
              <label className="block text-teal-700 font-semibold mb-1">
                Security Code <span className="text-teal-600">*</span>
              </label>
              <div className="flex items-center space-x-2">
                <span className="bg-teal-100 px-4 py-2 font-mono font-semibold text-teal-700 rounded">
                  71608
                </span>
                <input
                  type="text"
                  required
                  placeholder="Security Code"
                  className="flex-1 px-4 py-2 border border-teal-200 rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
              </div>
            </div> */}
          </form>
          <div className="flex items-center gap-4 mt-8">
            <button
              type="submit"
              className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-2 rounded transition duration-200"
            >
              Submit
            </button>
            <a href="/login" className="text-teal-700 hover:underline text-sm">
              Login
            </a>
            <a
              href="/forgot-password"
              className="text-teal-700 hover:underline text-sm"
            >
              Forgot Password
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default page;
