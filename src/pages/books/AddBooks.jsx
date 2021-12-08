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
  const [bookStatus, setBookStatus] = useState({
    value: "In Stock",
    label: "In Stock",
  });
  const [bookImage, setBookImage] = useState("");
  const [paperPrice, setPaperPrice] = useState("");
  const [pdfPrice, setPdfPrice] = useState("");
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
        bookStatus: bookStatus.value,
        bookImage: bookImage,
        paperPrice: paperPrice,
        pdfPrice: pdfPrice,
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
                </label>
                <Select
                  required
                  value={bookStatus}
                  onChange={(e) => setBookStatus(e)}
                  options={options}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="paperBack"
                >
                  Paperback Price
                </label>
                <input
                  id="paperBack"
                  type="number"
                  placeholder="24.5$"
                  value={paperPrice}
                  required
                  onChange={(event) => setPaperPrice(event.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="pdfPrice"
                >
                  Pdf Price
                </label>
                <input
                  id="pdfPrice"
                  type="number"
                  placeholder="19.5$"
                  value={pdfPrice}
                  required
                  onChange={(event) => setPdfPrice(event.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
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
