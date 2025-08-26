"use client";

import { Asterisk } from "lucide-react";
import { set } from "mongoose";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function PaperSubmissionForm() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();

  console.log(session);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const [formData, setFormData] = useState({
    paperTitle: "",
    category: "",
    authorName: "",
    email: "",
    mobile: "",
    organization: "",
    country: "",
    city: "",
    additionalAuthors: "",
    keywords: "",
    abstract: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });
    if (file) {
      data.append("file", file);
    }

    const res = await fetch("/api/papers", {
      method: "POST",
      body: data,
    });

    const result = await res.json();
    if (result.success) {
      alert("Paper submitted successfully!");
      setLoading(false);
      redirect("/user/dashboard");
    } else {
      alert("Error: " + result.error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (session?.user?.email) {
      setFormData((prev) => ({
        ...prev,
        email: session.user.email,
      }));
    }
  }, [session]);

  return (
    <div className="mx-auto p-6 bg-white shadow-md rounded-lg border">
      <h2 className="text-xl font-bold text-teal-700">
        Online Paper Submission
      </h2>
      <hr className="border-t border-teal-700 my-2" />
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Paper Title */}
        <h3 className="text-md font-semibold text-gray-600">
          General Information
        </h3>
        <div>
          <label className="flex text-sm font-medium mb-1">
            Paper Title <Asterisk size={14} color="red" />
          </label>
          <input
            type="text"
            name="paperTitle"
            value={formData.paperTitle}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
            placeholder="Enter paper title"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="text-sm font-medium mb-1 flex">
            Category <Asterisk size={14} color="red" />
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full border rounded-md px-3 py-2"
          >
            <option value="">Select category</option>
            <option value="research">Research Paper</option>
            <option value="review">Review Paper</option>
            <option value="review">Case Study</option>
            <option value="review">Survey Paper</option>
            <option value="review">Technical Paper</option>
            <option value="review">Short Communication</option>
          </select>
        </div>

        <h3 className="text-md font-semibold text-gray-600">
          Author's Information
        </h3>
        {/* Author Name */}
        <div>
          <label className="flex text-sm font-medium mb-1">
            Author Name <Asterisk size={14} color="red" />
          </label>
          <input
            type="text"
            name="authorName"
            value={formData.authorName}
            onChange={handleChange}
            required
            className="w-full border rounded-md px-3 py-2"
            placeholder="Enter author name"
          />
        </div>

        {/* Email */}
        <div>
          <label className="flex text-sm font-medium mb-1">
            Email ID <Asterisk size={14} color="red" />
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            readOnly
            className="w-full border rounded-md px-3 py-2"
            placeholder="Enter email"
          />
          <p className="text-sm text-gray-500">
            Email ID can be same as your login ID
          </p>
        </div>

        {/* Mobile */}
        <div>
          <label className="flex text-sm font-medium mb-1">
            Mobile No <Asterisk size={14} color="red" />
          </label>
          <input
            type="text"
            name="mobile"
            required
            value={formData.mobile}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
            placeholder="Enter mobile number"
          />
        </div>

        {/* Organization */}
        <div>
          <label className="flex text-sm font-medium mb-1">
            Organization <Asterisk size={14} color="red" />
          </label>
          <input
            type="text"
            name="organization"
            required
            value={formData.organization}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
            placeholder="Enter designation"
          />
        </div>

        {/* Country + City */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="flex text-sm font-medium mb-1">
              Country <Asterisk size={14} color="red" />
            </label>
            <input
              type="text"
              name="country"
              value={formData.country}
              required
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
              placeholder="Enter country"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
              placeholder="Enter city"
            />
          </div>
        </div>

        {/* Additional Authors */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Additional Authors
          </label>
          <textarea
            name="additionalAuthors"
            value={formData.additionalAuthors}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
            placeholder="Enter names of additional authors"
            rows="2"
          ></textarea>
        </div>

        <h3 className="text-md font-semibold text-gray-600">Content</h3>

        {/* Keywords */}
        <div>
          <label className="flex text-sm font-medium mb-1">
            Keywords <Asterisk size={14} color="red" />
          </label>
          <input
            type="text"
            name="keywords"
            value={formData.keywords}
            onChange={handleChange}
            required
            className="w-full border rounded-md px-3 py-2"
            placeholder="Enter keywords"
          />
        </div>

        {/* Abstract */}
        <div>
          <label className="flex text-sm font-medium mb-1">
            Abstract <Asterisk size={14} color="red" />
          </label>
          <textarea
            name="abstract"
            value={formData.abstract}
            onChange={handleChange}
            required
            className="w-full border rounded-md px-3 py-2"
            placeholder="Enter abstract"
            rows="3"
          ></textarea>
        </div>

        <div>
          <label className="flex text-sm font-semibold text-gray-800 mb-2">
            Attach Paper <Asterisk size={14} color="red" />
          </label>
          <input
            type="file"
            accept=".pdf, application/pdf"
            onChange={handleFileChange}
            required
            className="block w-full text-sm p-2 text-gray-700 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <p className="text-xs text-red-500 mt-1">PDF Format Only.</p>
        </div>

        {/* Buttons */}
        <div className="flex space-x-3 pt-2">
          {loading ? (
            <div className="flex items-center justify-center h-12 w-full">
              <div className="animate-spin rounded-full h-10 w-10 border-b-6 border-teal-600"></div>
            </div>
          ) : (
            <button
              type="submit"
              className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 w-full"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
