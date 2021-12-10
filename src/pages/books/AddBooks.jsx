import React, { useState } from "react";
import { useNavigate } from "react-router";
import firebase from "../../firebase";
import Select from "react-select";

const options = [
  { value: "In Stock", label: "In Stock" },
  { value: "Preorder", label: "Preorder" },
];
const AddBooks = () => {
  const history = useNavigate();
  const [loading, setLoading] = useState(false);
  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [bookStatus, setBookStatus] = useState("unlocked");
  const [bookImage, setBookImage] = useState("");
  const [bookDescription, setBookDescription] = useState("");

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
      .collection("Books")
      .add({
        bookName: bookName,
        authorName: authorName,
        bookStatus: bookStatus,
        bookImage: bookImage,
        bookDescription: bookDescription,
        bookLikes: 0,
        totalReview: 0,
        star: 0,
        Timestamp: millisec,
      })
      .then(setLoading(false), history("/books"));
  };
  return (
    <div className="w-full h-screen bg-gray-400 pt-20">
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg text-center border-b py-3 font-semibold text-gray-700 capitalize dark:text-white">
          Add New Book To Rox!
        </h2>
        {loading === true ? (
          <h1 className="text-center text-3xl font-bold text-red-600">
            Adding book!
          </h1>
        ) : null}

        <form onSubmit={handleAdd}>
          <div>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="username"
                >
                  Book Name
                </label>
                <input
                  id="username"
                  type="text"
                  value={bookName}
                  required
                  onChange={(event) => setBookName(event.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="authorName"
                >
                  Author Name
                </label>
                <input
                  id="authorName"
                  type="text"
                  value={authorName}
                  required
                  onChange={(event) => setAuthorName(event.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="bookStatus"
                >
                  Books Status
                  <span className="ml-3">
                    {bookStatus === "locked" ? (
                      <i class="fas fa-lock text-gray-400"></i>
                    ) : (
                      <i class="fas fa-unlock text-green-400"></i>
                    )}
                  </span>
                </label>
                <div className="w-full pr-4 py-2 mt-2">
                  <div
                    onClick={() =>
                      setBookStatus(
                        bookStatus === "unlocked" ? "locked" : "unlocked"
                      )
                    }
                    class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"
                  >
                    <input
                      type="checkbox"
                      name="toggle"
                      id="toggle"
                      class={
                        bookStatus === "unlocked"
                          ? "toggle-checkbox absolute block w-6 h-6 rounded-full bg-white right-0 border-green-400 border-4 appearance-none cursor-pointer"
                          : "toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                      }
                    />
                    <label
                      for="toggle"
                      class={
                        bookStatus === "unlocked"
                          ? "toggle-label block overflow-hidden h-6 rounded-full bg-green-400 cursor-pointer"
                          : "toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                      }
                    ></label>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="bookImage"
                >
                  Book Image Link
                </label>
                <input
                  id="bookImage"
                  type="text"
                  value={bookImage}
                  required
                  onChange={(event) => setBookImage(event.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="bookDescription"
                >
                  Book's Description
                </label>
                <textarea
                  id="bookDescription"
                  value={bookDescription}
                  required
                  onChange={(event) => setBookDescription(event.target.value)}
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
              Add
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddBooks;
