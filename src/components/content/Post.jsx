import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "../../firebase";
import PageLoader from "../PageLoader";

function Post() {
  const db = firebase.firestore();
  const [productData, loading, error] = useCollection(
    db.collection("Products").orderBy("Timestamp", "desc"),
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
      {productData && (
        <div className="w-full flex flex-row justify-start flex-wrap">
          {productData.docs.map((doc) => (
            <div key={doc.id} className="py-6 mx-2">
              <div className="flex max-w-md bg-white shadow-lg rounded-lg border overflow-hidden">
                <div
                  className="w-1/3 bg-cover"
                  style={{
                    // backgroundImage: `url(${doc.data().productImage})`,
                    backgroundImage:
                      "url('https://vsgriffin.com/wp-content/uploads/2021/11/Chareka-Gadson-872x675.jpg')",
                  }}
                ></div>
                <div className="w-2/3 p-4">
                  <h1 className="text-gray-900 font-bold text-2xl truncate overflow-ellipsis overflow-hidden">
                    {/* {doc.data().productName} */}
                    The Importance Of The Trademark And Why You Should
                  </h1>
                  <p className="mt-2 text-gray-600 text-sm line-clamp-3">
                    {/* {doc.data().productDescription} */}
                    We are currently seeing a surge of entrepreneurs; many
                    individuals are taking advantage of the stillness of the
                    pandemic and are finding ways to multiply the avenues in
                    which they generate income. One of the missteps many
                    business owners take is not protecting the brands they have
                    created. Trademarking is seen as another expense of being an
                    entrepreneur, but not enough of these individuals are
                  </p>
                  {doc.data().totalReview == null ? (
                    <div className="flex item-center mt-2.5 mb-2">
                      <svg
                        className={
                          Math.floor(
                            doc.data().star / doc.data().totalReview
                          ) >= 1
                            ? "w-5 h-5 fill-current text-yellow-500"
                            : "w-5 h-5 fill-current text-gray-400"
                        }
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                      <svg
                        className={
                          Math.floor(
                            doc.data().star / doc.data().totalReview
                          ) >= 2
                            ? "w-5 h-5 fill-current text-yellow-500"
                            : "w-5 h-5 fill-current text-gray-400"
                        }
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                      <svg
                        className={
                          Math.floor(
                            doc.data().star / doc.data().totalReview
                          ) >= 3
                            ? "w-5 h-5 fill-current text-yellow-500"
                            : "w-5 h-5 fill-current text-gray-400"
                        }
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                      <svg
                        className={
                          Math.floor(
                            doc.data().star / doc.data().totalReview
                          ) >= 4
                            ? "w-5 h-5 fill-current text-yellow-500"
                            : "w-5 h-5 fill-current text-gray-400"
                        }
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                      <svg
                        className={
                          Math.floor(
                            doc.data().star / doc.data().totalReview
                          ) >= 5
                            ? "w-5 h-5 fill-current text-yellow-500"
                            : "w-5 h-5 fill-current text-gray-400"
                        }
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    </div>
                  ) : (
                    <div className="flex flex-row items-center mt-2">
                      <h1 className="bg-yellow-500 text-white font-bold px-2 py-0.5 rounded-full">
                        New
                      </h1>
                    </div>
                  )}
                  <div className="flex item-center justify-between mt-3">
                    <h1 className="text-gray-500 font-bold text-sm">
                      {/* ${doc.data().productPrice} */}
                      <i class="fas fa-thumbs-up"></i> (50)
                    </h1>
                    <h1 className="text-gray-500 font-bold text-sm">
                      {/* ${doc.data().productPrice} */}
                      <i class="fas fa-comment"></i> (7)
                    </h1>
                    <div>
                      <button className="px-3 py-2 mr-2 bg-blue-400 hover:bg-blue-500 text-white text-xs font-bold uppercase rounded">
                        <i className="fad fa-edit"></i>
                      </button>
                      <button
                        onClick={() => {
                          if (
                            window.confirm(
                              "Are you sure to delete this Product!"
                            )
                          ) {
                            // firebase
                            //   .firestore()
                            //   .collection("Products")
                            //   .doc(doc.id)
                            //   .delete();
                          }
                        }}
                        className="px-3 py-2 bg-red-400 hover:bg-red-500 text-white text-xs font-bold uppercase rounded"
                      >
                        <i className="fad fa-trash"></i>
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
