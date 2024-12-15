import React, { useState } from "react";
import Button from "../../constants/Button/Button";
import SuperModal from "../../components/SuperModal/SuperModal";
import InputField from "../../constants/InputField/InputFiled";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCreateBook } from "../../hooks/useCreateBook"; // Hook for creating a book
import { useGetBooks } from "../../hooks/useGetBooks"; // Hook for fetching books

const Books = () => {
  const [open, setOpen] = useState(false); // State for modal open/close
  const [name, setName] = useState(""); // State for "Name"
  const [author, setAuthor] = useState(""); // State for "Author"
  const [description, setDescription] = useState(""); // State for "Description"

  const { createBook, loading: creating } = useCreateBook(
    "https://675e3a0b63b05ed07979be8b.mockapi.io/Books"
  );

  const {
    books,
    loading: fetching,
    error,
    refetch,
  } = useGetBooks("https://675e3a0b63b05ed07979be8b.mockapi.io/Books");

  const closeModal = () => {
    setOpen(false); // Close modal
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const newBook = {
      name,
      author,
      description,
    };

    try {
      const result = await createBook(newBook); // Use the custom hook
      console.log("Book Added:", result);

      toast.success("🎉 Book added successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });

      closeModal(); // Close modal after successful submission
      // Reset form fields
      setName("");
      setAuthor("");
      setDescription("");
      refetch(); // Refresh the list of books
    } catch (err) {
      toast.error("🚨 " + err.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }
  };

  return (
    <section className="p-[20px] h-full">
      <div className="flex items-center justify-between h-[7%]">
        <div className="flex gap-[10px]">
          <button
            className={`flex gap-[10px] SFPro items-center text-[14px] bg-[#fff] shadow-md text-[#1D1D41] font-medium  rounded-[5px] py-[7px] px-[14px] `}
          >
            <svg
              width={20}
              height={20}
              fill="#1D1D41"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 128-168 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l168 0 0 112c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM384 336l0-48 110.1 0-39-39c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39L384 336zm0-208l-128 0L256 0 384 128z" />
            </svg>
            Export
          </button>
          <button
            className={`flex gap-[10px] SFPro items-center text-[14px] bg-[#fff] shadow-md text-[#1D1D41] font-medium  rounded-[5px] py-[7px] px-[14px] `}
          >
            <svg
              width={20}
              height={20}
              fill="#1D1D41"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128l-368 0zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39L344 184c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 134.1-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z" />
            </svg>
            Import
          </button>
        </div>
        <div className="flex gap-[10px]">
          <form class="max-w-lg mx-auto">
            <div class="flex">
              <label
                for="search-dropdown"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Your Email
              </label>
              <button
                id="dropdown-button"
                data-dropdown-toggle="dropdown"
                class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                type="button"
              >
                All categories{" "}
                <svg
                  class="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdown"
                class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdown-button"
                >
                  <li>
                    <button
                      type="button"
                      class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Mockups
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Templates
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Design
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Logos
                    </button>
                  </li>
                </ul>
              </div>
              <div class="relative w-full">
                <input
                  type="search"
                  id="search-dropdown"
                  class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                  placeholder="Search..."
                  required
                />
                <button
                  type="submit"
                  class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span class="sr-only">Search</span>
                </button>
              </div>
            </div>
          </form>

          <Button onClick={() => setOpen((prev) => !prev)}>Add Book</Button>
        </div>
      </div>

      {fetching ? (
        <p>Loading books...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <ul className="mt-4 h-[93%] overflow-x-auto pe-[5px] scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-100">
          {books.map((book) => (
            <li
              key={book.id}
              className="flex p-4 border rounded-md mb-2 shadow-sm bg-white gap-[10px]"
            >
              <img
                className="object-cover rounded-[5px] w-[80px] h-[100px]"
                src={book.avatar}
                alt=""
                loading="lazy"
              />
              <div className="w-full">
                <h3 className=" text-base font-normal">
                  <span className="text-lg font-semibold">Book title:</span>{" "}
                  {book.name}
                </h3>
                <p className=" text-base font-normal">
                  <span className="text-lg font-semibold">Book author:</span>{" "}
                  {book.author}
                </p>
                <p className=" text-base font-normal mb-[20px]">
                  <span className="text-lg font-semibold ">
                    Book description:
                  </span>{" "}
                  {book.description}
                </p>
                <div className="flex justify-end">
                  <div className="flex gap-[10px] w-[250px]">
                    <button
                      type="submit"
                      className={`flex items-center justify-center gap-[10px] w-1/2 px-4 py-1 rounded-md 
                    bg-blue-500 
                text-white `}
                    >
                      <svg
                        width={20}
                        height={20}
                        fill="#fff"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152L0 424c0 48.6 39.4 88 88 88l272 0c48.6 0 88-39.4 88-88l0-112c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 22.1-17.9 40-40 40L88 464c-22.1 0-40-17.9-40-40l0-272c0-22.1 17.9-40 40-40l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 64z" />
                      </svg>
                      Edit
                    </button>

                    <button
                      type="submit"
                      className={`flex items-center justify-center gap-[10px] w-1/2 px-4 py-1 rounded-md 
                    bg-red-500 
                text-white`}
                    >
                      <svg
                        width={20}
                        height={20}
                        fill="#fff"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z" />
                      </svg>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      {open && (
        <SuperModal close={setOpen}>
          <form
            onSubmit={handleSubmit}
            className="relative w-[600px] p-[20px] bg-white rounded-[10px]"
          >
            <h2 className="text-[#1D1D41] text-[25px] font-semibold text-center mt-[20px]">
              Add Book
            </h2>

            <InputField
              label={"Name"}
              type={"text"}
              placeholder={"Enter Name"}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <InputField
              label={"Author"}
              type={"text"}
              placeholder={"Enter Author"}
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />

            <InputField
              label={"Description"}
              type={"text"}
              placeholder={"Enter Description"}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />

            <div className="flex gap-[10px] items-center mt-4">
              <button
                type="submit"
                className={`w-1/2 px-4 py-2 rounded-md ${
                  creating
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                } text-white`}
                disabled={creating}
              >
                {creating ? "Submitting..." : "Submit"}
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="w-1/2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </form>
        </SuperModal>
      )}
      <ToastContainer />
    </section>
  );
};

export default Books;
