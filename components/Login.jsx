"use client";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    let newErrors = { email: "", password: "" };

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

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((err) => err !== "");
    if (hasErrors) return;

    try {
      setLoading(true);
      const res = await signIn("credentials", {
        redirect: false,
        email: formData.email,
        password: formData.password,
      });
      if (res.error) {
        // alert(res.error);
        setError(res.error);
      } else {
        window.location.href = "/user/dashboard";
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
    <div className="flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md border border-teal-100">
        <form onSubmit={handleSubmit} className="space-y-5">
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
              // required
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-2 border border-teal-200 rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
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
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
              className="w-full px-4 py-2 border border-teal-200 rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          {loading ? (
            <div className="flex items-center justify-center h-20 w-full">
              <div className="animate-spin rounded-full h-10 w-10 border-b-4 border-teal-600"></div>
            </div>
          ) : (
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 rounded transition duration-200"
            >
              Login
            </button>
          )}

          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

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
  );
}

export default Login;
