import React from "react";

const BooksLists = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center my-3 overflow-hidden rounded-lg border mr-3">
      <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl transform duration-500 cursor-pointer">
        <div className="p-4">
          <h1 className="mt-4 text-2xl font-bold hover:underline cursor-pointer">
            Phoenix Rising
          </h1>
          <p className="mt-2 font-sans text-sm font-bold text-gray-400">
            by V.S.Griffin
          </p>
        </div>
        <div className="relative">
          <img
            className="w-60"
            src="https://vsgriffin.com/wp-content/uploads/2020/09/mock-00185.png"
          />
        </div>
        <div className='w-full flex flex-row justify-between p-5'>
          <button className="flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            <span className="mx-1">Edit</span>
          </button>
          <button className="flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            <span className="mx-1">Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BooksLists;
