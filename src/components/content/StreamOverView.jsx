import React, { useState } from "react";
import PageLoader from "../PageLoader";

function StreamOverView() {
  const [loading, setLoading] = useState(true);
  return (
    <div>
      <div className="w-full border-b pb-2">
        <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white border rounded-lg shadow-md dark:bg-gray-800">
          <div className="flex items-center justify-center w-12 bg-gray-300">
            <img
              src="/assets/liveStream.svg"
              className="w-6 h-6"
              alt="stream logo"
            />
          </div>

          <div className="px-4 py-2 -mx-3">
            <div className="mx-3">
              <span className="font-semibold text-blue-500 dark:text-green-400">
                On The Rox Stream Overview
              </span>
            </div>
          </div>
        </div>
      </div>

      <a href="/streamSetup">
        <button className="flex items-center mt-2 mx-2 px-2 py-2 font-medium tracking-wide text-gray-800 capitalize transition-colors duration-200 transform bg-gray-300 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80">
          <img
            src="/assets/liveStream.svg"
            className="w-6 h-6"
            alt="stream logo"
          />
          <span className="mx-1">Setup New Stream</span>
        </button>
      </a>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full h-auto flex flex-row justify-center items-center">
          <video
            controls
            width="720px"
            className="rounded-xl"
            src="https://sy-vcdn.streamyard.com/vods/1XRWHO3IKDMILD3jlvp4AeLDLAk7dj/vod.mp4?Expires=1638866370&KeyName=vcdn-key&Signature=TIFQ5grFRA-E3W_eyyKF3VwCGs0"
          ></video>
        </div>
        <h1 className="my-3 py-2 px-5 bg-gray-300 rounded-md font-bold">
          Status: <span className="text-red-600">Offline</span>
        </h1>
      </div>
      <div className="w-full border-t m-5 pt-5">
        {loading && (
          <div>
            <PageLoader />
          </div>
        )}
      </div>
    </div>
  );
}

export default StreamOverView;
