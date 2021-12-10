import React from "react";
import { Animated } from "react-animated-css";
import { useLocation, useNavigate } from "react-router-dom";
import firebase from "../../firebase";

function AudioActivity() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { id, status, contentName } = state;
  const handleUpdate = () => {
    firebase
      .firestore()
      .collection("Audios")
      .doc(id)
      .update({
        audioStatus: status === "locked" ? "unlocked" : "locked",
      })
      .then(
        setTimeout(() => {
          navigate("/audio");
        }, 500)
      );
  };
  return (
    <div
      class="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
      id="modal-id"
    >
      <div class="absolute bg-black opacity-80 inset-0 z-0"></div>
      <Animated animationIn="zoomIn">
        <div class="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
          <div class="">
            <div class="text-center p-5 flex-auto justify-center">
              {status === "unlocked" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-16 h-16 flex items-center text-red-500 mx-auto"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-16 h-16 flex items-center text-green-500 mx-auto"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                </svg>
              )}

              <h2 class="text-xl font-bold py-4 ">
                {status === "locked"
                  ? "Are you sure to unlock?"
                  : "Are you sure to lock?"}
              </h2>
              <p class="text-sm text-gray-500 px-8">
                Do you really want to {status === "locked" ? "unlock" : "lock"}{" "}
                {contentName}?<p>Book Id: {id}</p>
              </p>
            </div>
            <div class="p-3  mt-2 text-center space-x-4 md:block">
              <button
                onClick={() => navigate("/audio")}
                class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={() => handleUpdate()}
                class={
                  status === "locked"
                    ? "mb-2 md:mb-0 bg-green-500 border border-green-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-600"
                    : "mb-2 md:mb-0 bg-gray-500 border border-gray-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-gray-600"
                }
              >
                {status === "locked" ? "unlock" : "lock"}
              </button>
            </div>
          </div>
        </div>
      </Animated>
    </div>
  );
}

export default AudioActivity;
