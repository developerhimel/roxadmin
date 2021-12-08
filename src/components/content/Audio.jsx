import React, { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import ReactModal from "react-modal";
import firebase from "../../firebase";
import PageLoader from "../PageLoader";

const Audio = () => {
  const [deleting, setDeleting] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const db = firebase.firestore();
  const [audioData, loading, error] = useCollection(
    db.collection("Audios").orderBy("Timestamp", "desc"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  return (
    <>
      <div>
        <ReactModal
          isOpen={openModal}
          preventScroll={true}
          shouldCloseOnOverlayClick={true}
          onRequestClose={() => setOpenModal(false)}
          style={{
            overlay: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "#00000099",
            },
            content: {
              position: "absolute",
              top: "300px",
              left: "300px",
              right: "300px",
              bottom: "300px",
              border: "1px solid #cccccc00",
              background: "#ffffff00",
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
              borderRadius: "4px",
              outline: "none",
              padding: "20px",
            },
          }}
          overlayClassName="backdrop-filter backdrop-blur-sm"
        >
          <div
            id="full_description"
            className="w-full h-full flex flex-col justify-center items-center"
          >
            <div className="p-2">
              <div className="inline-flex items-center bg-white leading-none text-pink-600 rounded-full p-2 shadow text-teal text-sm">
                {deleting === true ? (
                  <img
                    src="/assets/loading.svg"
                    className="w-5 h-5"
                    alt="loading"
                  />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
                {deleting === true ? (
                  <span className="inline-flex bg-pink-600 text-white rounded-full h-6 px-3 justify-center items-center">
                    Deleting!
                  </span>
                ) : (
                  <span className="inline-flex bg-green-600 text-white rounded-full h-6 px-3 justify-center items-center">
                    Deleted!
                  </span>
                )}
                {deleting === true ? (
                  <span className="inline-flex px-2 text-pink-600">
                    Audio is deleting now!
                  </span>
                ) : (
                  <span className="inline-flex px-2 text-green-600">
                    Audio Successfully Deleted!
                  </span>
                )}
              </div>
            </div>
            {deleting === true ? (
              <button
                disabled
                className="bg-transparent hover:bg-pink-500 text-white font-semibold hover:text-white py-2 px-4 border border-pink-600 hover:border-transparent rounded"
              >
                Deleting Audio
              </button>
            ) : (
              <button
                onClick={() => {
                  setOpenModal(false);
                }}
                className="bg-transparent hover:bg-green-500 text-white font-semibold hover:text-white py-2 px-4 border border-green-600 hover:border-transparent rounded"
              >
                Ok
              </button>
            )}
          </div>
        </ReactModal>
        <div className="w-full border-b pb-2">
          <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white border rounded-lg shadow-md dark:bg-gray-800">
            <div className="flex items-center justify-center w-12 bg-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                />
              </svg>
            </div>

            <div className="px-4 py-2 -mx-3">
              <div className="mx-3">
                <span className="font-semibold text-blue-500 dark:text-green-400">
                  On The Rox All Audios List
                </span>
              </div>
            </div>
          </div>
        </div>

        <a href="/addAudio">
          <button className="flex items-center mt-2 mx-2 px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80">
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
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span className="mx-1">Add New</span>
          </button>
        </a>
        {loading && (
          <div>
            <PageLoader />
          </div>
        )}
        {audioData && (
          <div>
            {audioData.docs.map((doc) => (
              <div className="w-full px-2 mt-5">
                <div className="w-full text-white bg-green-500 my-2 rounded-lg">
                  <div className="container flex items-center justify-between px-6 py-4 mx-auto">
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                        />
                      </svg>

                      <p className="mx-3">
                        {doc.data().uploadName} || Artist: {doc.data().artist}
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        if (
                          window.confirm(
                            "Are you sure to delete" +
                              " (" +
                              doc.data().uploadName +
                              ")"
                          )
                        ) {
                          setOpenModal(true);
                          setDeleting(true);
                          firebase
                            .storage()
                            .ref(`roxAudios/${doc.data().uploadName}`)
                            .delete()
                            .then(() => {
                              firebase
                                .firestore()
                                .collection("Audios")
                                .doc(doc.data().uploadName)
                                .delete()
                                .then(() => {
                                  setDeleting(false);
                                });
                            });
                        }
                      }}
                      className="p-1 transition-colors duration-200 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none"
                    >
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
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Audio;
