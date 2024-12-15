import React, { useState } from "react";

const Group = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the FormData object
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("avatar", avatar);

    try {
      const response = await fetch(
        "https://675707f0c0a427baf94b701c.mockapi.io/todo", // Use the correct API endpoint
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("API Response:", result);
        setSuccess("Todo created successfully!");
        setError("");
      } else {
        const errorData = await response.json();
        console.error("Server Error Response:", errorData);
        setError(`Failed to create todo. Server responded with: ${response.status}`);
      }
    } catch (error) {
      console.error("Network Error:", error);
      setError("An error occurred while creating the todo. Please check your network or try again.");
    }
  };

  return (
    <div className="px-3">
      <div className="border max-w-md mx-auto mt-4 rounded-md hover:shadow-white">
        <h2 className="text-white text-center text-2xl mt-4">
          Create New Todo
        </h2>
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="px-10 pb-4"
        >
          {/* Name Input */}
          <div className="form-group mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
              className="block w-full p-2 border border-gray-500 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring focus:ring-gray-300"
              required
            />
          </div>

          {/* Description Input */}
          <div className="form-group mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-white mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter Description"
              rows="4"
              className="block w-full p-2 border border-gray-500 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring focus:ring-gray-300"
              required
            ></textarea>
          </div>

          {/* Avatar Input */}
          <div className="form-group mb-4">
            <label
              htmlFor="avatar"
              className="block text-sm font-medium text-white mb-2"
            >
              Avatar
            </label>
            <input
              type="file"
              id="avatar"
              onChange={(e) => setAvatar(e.target.files[0])}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-gray-700 file:text-white hover:file:bg-gray-600"
              accept="image/*"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-between items-end mt-2">
            <button
              type="submit"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Send
            </button>
            {error && <p className="text-red-400">{error}</p>}
          </div>
        </form>

        {success && <p className="text-green-400">{success}</p>}
      </div>
    </div>
  );
};

export default Group;
