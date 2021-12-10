import React, { useState } from "react";
import { useNavigate } from "react-router";
import firebase from "../../firebase";

const AddPost = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postImage, setPostImage] = useState("");
  const [postDes, setPostDes] = useState("");

  const firebaseTimeStamp = new Date(
    firebase.firestore.Timestamp.now().seconds * 1000
  );
  const millisec =
    firebaseTimeStamp.getTime() - firebaseTimeStamp.getTimezoneOffset();
  const handleAdd = (e) => {
    e.preventDefault();
    setLoading(true);
    firebase
      .firestore()
      .collection("Posts")
      .add({
        postTitle: postTitle,
        postImage: postImage,
        postDes: postDes,
        comment: 0,
        like: 0,
        Timestamp: millisec,
      })
      .then(setLoading(false), navigate("/weeklyCheckIn"));
  };
  return (
    <div className="w-full h-screen bg-gray-400 pt-20">
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg text-center border-b py-3 font-semibold text-gray-700 capitalize dark:text-white">
          Add New Weekly Post To Rox!
        </h2>
        {loading === true ? (
          <h1 className="text-center text-3xl font-bold text-red-600">
            Posting!
          </h1>
        ) : null}

        <form onSubmit={handleAdd}>
          <div>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="posttitle"
                >
                  Post Title
                </label>
                <input
                  id="posttitle"
                  type="text"
                  value={postTitle}
                  required
                  onChange={(event) => setPostTitle(event.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="postImage"
                >
                  Post Image Link
                </label>
                <input
                  id="postImage"
                  type="text"
                  value={postImage}
                  required
                  onChange={(event) => setPostImage(event.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="postdes"
                >
                  Post's Description
                </label>
                <textarea
                  id="postdes"
                  value={postDes}
                  required
                  onChange={(event) => setPostDes(event.target.value)}
                  className="resize-y border rounded-md block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Post
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddPost;
