import React from "react";
import ContentLoader, { Facebook } from "react-content-loader";

function PageLoader() {
  return (
    <div>
      <div disabled className="flex flex-row justify-center items-center">
        <button
          type="button"
          disabled
          className="bg-gray-200 text-gray-400 font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 animate-spin"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          Loading Content
        </button>
      </div>
      <div className="flex flex-row justify-between items-center m-10">
        <ContentLoader />
        <ContentLoader />
      </div>
      <div className="flex flex-row justify-between items-center m-10">
        <ContentLoader />
        <ContentLoader />
        <ContentLoader />
      </div>
    </div>
  );
}

export default PageLoader;
