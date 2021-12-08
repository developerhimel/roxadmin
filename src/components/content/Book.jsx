import React from "react";
import { Link } from "react-router-dom";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "../../firebase";
import PageLoader from "../PageLoader";

const Book = () => {
  const db = firebase.firestore();
  const [booksData, loading, error] = useCollection(
    db.collection("Books").orderBy("Timestamp", "desc"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  return (
    <div>
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
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>

          <div className="px-4 py-2 -mx-3">
            <div className="mx-3">
              <span className="font-semibold text-blue-500 dark:text-green-400">
                On The Rox All Books List
              </span>
            </div>
          </div>
        </div>
      </div>

      <a href="/addBooks">
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
      {booksData && (
        <div className="w-full flex flex-row justify-start flex-wrap">
          {booksData.docs.map((doc) => (
            <div
              key={doc.id}
              className="bg-gray-100 flex items-center justify-center my-3 overflow-hidden rounded-lg border mr-3 w-60"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl transform duration-500 cursor-pointer">
                <div className="p-4">
                  <h1 className="mt-4 text-2xl font-bold cursor-pointer truncate overflow-ellipsis overflow-hidden">
                    {doc.data().bookName}
                  </h1>
                  <div className="flex flex-row justify-between items-center">
                    <p className="mt-2 font-sans text-sm font-bold text-gray-400">
                      by {doc.data().authorName}
                    </p>
                    <p
                      className={
                        doc.data().bookStatus === "In Stock"
                          ? "mt-2 font-sans text-sm text-white px-2 py-1 bg-green-500 rounded-full"
                          : "mt-2 font-sans text-sm text-white px-2 py-1 bg-red-500 rounded-full"
                      }
                    >
                      {doc.data().bookStatus}
                    </p>
                  </div>
                </div>
                <div className="relative bg-center w-60 h-52 overflow-hidden justify-center items-center">
                  <img
                    className="w-full h-auto"
                    alt="Rox Book Image"
                    src={doc.data().bookImage}
                  />
                </div>
                <div className="flex flex-col justify-start items-start mx-2 p-2 mt-1 pt-0 rounded-lg border">
                  <p className="mt-2 font-sans text-sm font-bold text-gray-400 border-b w-full pb-2">
                    <span style={{ color: "#7C9AF3" }}>PaperBack :</span>{" "}
                    {doc.data().paperPrice} $
                  </p>
                  <p className="mt-2 font-sans text-sm font-bold text-gray-400">
                    <span style={{ color: "#7C9AF3" }}>Pdf :</span>{" "}
                    {doc.data().pdfPrice} $
                  </p>
                </div>
                <div className="w-full flex flex-row justify-center p-5">
                  <button
                    onClick={() => {
                      if (window.confirm("Are you sure to delete this Book!")) {
                        firebase
                          .firestore()
                          .collection("Books")
                          .doc(doc.id)
                          .delete();
                      }
                    }}
                    className="flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80"
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
                    <span className="mx-1">Delete</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Book;
