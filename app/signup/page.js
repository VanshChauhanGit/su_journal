"use client";
import Wrapper from "@/components/Wrapper";
import React, { useState } from "react";

function page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setError("");
    e.preventDefault();
    let newErrors = { name: "", email: "", password: "", confirmPassword: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((err) => err !== "");
    if (hasErrors) return;

    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.error) {
        // alert(data.error);
        setError(data.error);
      } else {
        alert(data.message);
        window.location.href = "/login";
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
      return;
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <h1 className="text-2xl font-bold text-teal-700">Create Your Account</h1>
      <hr className="border-t border-teal-700 my-2" />

      <div className="flex items-center justify-center">
        <div className="bg-white rounded shadow-md p-8 w-full max-w-3xl border border-teal-100">
          <form
            // onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div>
              <label className="block text-teal-700 font-semibold mb-1">
                Name <span className="text-teal-600">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-2 border border-teal-200 rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="block text-teal-700 font-semibold mb-1">
                Email ID <span className="text-teal-600">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="Email ID"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-2 border border-teal-200 rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-teal-700 font-semibold mb-1">
                Password <span className="text-teal-600">*</span>
              </label>
              <input
                type="password"
                required
                placeholder="Password"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full px-4 py-2 border border-teal-200 rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
              />

              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
            <div>
              <label className="block text-teal-700 font-semibold mb-1">
                Re-Type Password <span className="text-teal-600">*</span>
              </label>
              <input
                type="password"
                required
                placeholder="Re-Type Password"
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                className="w-full px-4 py-2 border border-teal-200 rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
            {/* <div>
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
              </select>
            </div> */}
          </form>
          <div className="flex items-center justify-between gap-4 mt-8">
            {loading ? (
              <div className="flex items-center justify-center h-20 w-40">
                <div className="animate-spin rounded-full h-10 w-10 border-b-4 border-teal-600"></div>
              </div>
            ) : (
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-2 rounded transition duration-200"
              >
                Submit
              </button>
            )}

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            <div className="space-x-2">
              <a
                href="/login"
                className="text-teal-700 hover:underline text-sm"
              >
                Already have an account? Login
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
      </div>
    </Wrapper>
  );
}

export default page;
