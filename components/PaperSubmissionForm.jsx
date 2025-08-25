"use client";

import { useState } from "react";

export default function PaperSubmissionForm() {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };
  const [formData, setFormData] = useState({
    paperTitle: "",
    category: "",
    authorName: "",
    email: "",
    mobile: "",
    designation: "",
    country: "",
    city: "",
    additionalAuthors: "",
    contactAuthor: "",
    keywords: "",
    abstract: "",
    paperType: "",
    website: "",
    address: "",
    remarks: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg border">
      <h2 className="text-xl font-bold mb-4 border-b pb-2">
        Online Paper Submission
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Paper Title */}
        <div>
          <label className="block text-sm font-medium mb-1">Paper Title</label>
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
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
          >
            <option value="">Select category</option>
            <option value="research">Research</option>
            <option value="review">Review</option>
          </select>
        </div>

        {/* Author Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Author Name</label>
          <input
            type="text"
            name="authorName"
            value={formData.authorName}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
            placeholder="Enter author name"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
            placeholder="Enter email"
          />
        </div>

        {/* Mobile */}
        <div>
          <label className="block text-sm font-medium mb-1">Mobile No</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
            placeholder="Enter mobile number"
          />
        </div>

        {/* Designation */}
        <div>
          <label className="block text-sm font-medium mb-1">Designation</label>
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
            placeholder="Enter designation"
          />
        </div>

        {/* Country + City */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
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

        {/* Keywords */}
        <div>
          <label className="block text-sm font-medium mb-1">Keywords</label>
          <input
            type="text"
            name="keywords"
            value={formData.keywords}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
            placeholder="Enter keywords"
          />
        </div>

        {/* Abstract */}
        <div>
          <label className="block text-sm font-medium mb-1">Abstract</label>
          <textarea
            name="abstract"
            value={formData.abstract}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
            placeholder="Enter abstract"
            rows="3"
          ></textarea>
        </div>

        <div>
          <label className="block font-semibold text-gray-800 mb-2">
            Attach Paper <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            accept=".doc,.docx"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-700 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <p className="text-xs text-red-500 mt-1">
            Word document Format Only.
          </p>
        </div>

        {/* Paper Type */}
        <div>
          <label className="block text-sm font-medium mb-1">Paper Type</label>
          <select
            name="paperType"
            value={formData.paperType}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
          >
            <option value="">Select type</option>
            <option value="original">Original Research</option>
            <option value="short">Short Paper</option>
          </select>
        </div>

        {/* Website */}
        <div>
          <label className="block text-sm font-medium mb-1">Website</label>
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
            placeholder="Enter website"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-medium mb-1">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
            placeholder="Enter address"
            rows="2"
          ></textarea>
        </div>

        {/* Remarks */}
        <div>
          <label className="block text-sm font-medium mb-1">Remarks</label>
          <textarea
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
            placeholder="Enter remarks (if any)"
            rows="2"
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex space-x-3 pt-2">
          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
          >
            Submit
          </button>
          <button
            type="reset"
            className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
