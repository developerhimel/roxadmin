import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "../../firebase";
import { Link } from "react-router-dom";
import PageLoader from "../PageLoader";

function Post() {
  const db = firebase.firestore();
  const [postData, loading, error] = useCollection(
    db.collection("Posts").orderBy("Timestamp", "desc"),
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
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>

          <div className="px-4 py-2 -mx-3">
            <div className="mx-3">
              <span className="font-semibold text-blue-500 dark:text-green-400">
                On The Rox All Weekly Posts
              </span>
            </div>
          </div>
        </div>
      </div>

      <a href="/addPost">
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
          <span className="mx-1">Add New Post</span>
        </button>
      </a>
      {loading && (
        <div>
          <PageLoader />
        </div>
      )}
      {postData && (
        <div className="w-full flex flex-row justify-start flex-wrap">
          {postData.docs.map((doc) => (
            <div key={doc.id} className="py-6 mx-2">
              <div className="flex max-w-md bg-white shadow-lg rounded-lg border overflow-hidden">
                <div
                  className="w-1/3 bg-cover"
                  style={{
                    backgroundImage: `url(${doc.data().postImage})`,
                  }}
                ></div>
                <div className="w-2/3 p-4">
                  <h1 className="text-gray-900 font-bold text-2xl truncate overflow-ellipsis overflow-hidden">
                    {doc.data().postTitle}
                  </h1>
                  <p className="mt-2 text-gray-600 text-sm line-clamp-3">
                    {doc.data().postDes}
                  </p>
                  <div className="flex flex-row items-center mt-2">
                    <h1 className="bg-yellow-500 text-white font-bold px-2 py-0.5 rounded-full">
                      New
                    </h1>
                  </div>
                  <div className="flex item-center justify-between mt-3">
                    <h1 className="text-gray-500 font-bold text-sm">
                      <i class="fas fa-thumbs-up"></i> ({doc.data().like})
                    </h1>
                    <h1 className="text-gray-500 font-bold text-sm">
                      <i class="fas fa-comment"></i> ({doc.data().comment})
                    </h1>
                    <div>
                      <Link to={`/viewPost?id=${doc.id}`}>
                        <button className="px-3 py-2 mr-2 bg-blue-400 hover:bg-blue-500 text-white text-xs font-bold uppercase rounded">
                          <i className="fas fa-eye"></i>
                        </button>
                      </Link>
                      <button
                        onClick={() => {
                          if (
                            window.confirm(
                              "Are you sure to delete this Post!"
                            )
                          ) {
                            firebase
                              .firestore()
                              .collection("Posts")
                              .doc(doc.id)
                              .delete();
                          }
                        }}
                        className="px-3 py-2 bg-red-400 hover:bg-red-500 text-white text-xs font-bold uppercase rounded"
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Post;
