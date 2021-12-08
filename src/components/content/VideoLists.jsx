import React from "react";

const VideoLists = () => {
  return (
    <div className="my-3">
      <div className="flex max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto border">
        <div className="flex flex-col m-5 ">
          <div className="relative">
            <iframe
              src="https://www.youtube.com/embed/b8MruTYkbk0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="absolute bottom-0 w-full bg-gradient-to-r from-black">
              <span className="text-white text-xs uppercase px-2">red</span>
            </div>
          </div>
          <div>
            <div>
              <div className="relative h-1 bg-gray-200">
                <div className="absolute h-full w-1/2 bg-green-500 flex items-center justify-end">
                  <div className="rounded-full w-3 h-3 bg-white shadow"></div>
                </div>
              </div>
            </div>
            <div className="flex justify-center text-xs font-medium text-gray-500 py-1">
              <div className="flex space-x-3 pt-5">
                <button className="rounded-full w-9 h-9 flex items-center justify-center pl-0.5 bg-red-600 focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white -ml-0.5"
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
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoLists;
