import React, { useState } from "react";
import { useNavigate } from "react-router";
import firebase from "../../firebase";
import Select from "react-select";

const options = [
  { value: "In Stock", label: "In Stock" },
  { value: "Preorder", label: "Preorder" },
];
const AddProduct = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [productName, setProductName] = useState("");
  const [productStatus, setProductStatus] = useState({
    value: "In Stock",
    label: "In Stock",
  });
  const [productImage, setProductImage] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");

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
      .collection("Products")
      .add({
        productName: productName,
        productStatus: productStatus.value,
        productImage: productImage,
        productPrice: productPrice,
        productDescription: productDescription,
        productLikes: 0,
        totalReview: 0,
        star: 0,
        Timestamp: millisec,
      })
      .then(setLoading(false), navigate("/store"));
  };
  return (
    <div className="w-full h-screen bg-gray-400 pt-20">
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg text-center border-b py-3 font-semibold text-gray-700 capitalize dark:text-white">
          Add New Product To Rox!
        </h2>
        {loading === true ? (
          <h1 className="text-center text-3xl font-bold text-red-600">
            Adding Product!
          </h1>
        ) : null}

        <form onSubmit={handleAdd}>
          <div>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="productName"
                >
                  Product Name
                </label>
                <input
                  id="productName"
                  type="text"
                  value={productName}
                  required
                  onChange={(event) => setProductName(event.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="productPrice"
                >
                  Product Price
                </label>
                <input
                  id="productPrice"
                  type="number"
                  placeholder="00.00$"
                  value={productPrice}
                  required
                  onChange={(event) => setProductPrice(event.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="bookStatus"
                >
                  Product Status
                </label>
                <Select
                  required
                  value={productStatus}
                  onChange={(e) => setProductStatus(e)}
                  options={options}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="productImage"
                >
                  Product Image Link
                </label>
                <input
                  id="productImage"
                  type="text"
                  value={productImage}
                  required
                  onChange={(event) => setProductImage(event.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="ProductDescription"
                >
                  Product's Description
                </label>
                <textarea
                  id="ProductDescription"
                  value={productDescription}
                  required
                  onChange={(event) =>
                    setProductDescription(event.target.value)
                  }
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

export default AddProduct;
