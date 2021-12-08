import React, { useState } from "react";
import { useNavigate } from "react-router";
import firebase from "../../firebase";

const CreateChat = () => {
  const history = useNavigate();
  const [loading, setLoading] = useState(false);
  const [chatTitle, setChatTitle] = useState("");
  const [question, setQuestion] = useState("");

  const firebaseTimeStamp = new Date(
    firebase.firestore.Timestamp.now().seconds * 1000
  );
  const millisec =
    firebaseTimeStamp.getTime() - firebaseTimeStamp.getTimezoneOffset();
  const handleCreate = (e) => {
    e.preventDefault();
    setLoading(true);
    firebase
      .firestore()
      .collection("ChatRoom")
      .doc("active chat document")
      .set({
        chatTitle: chatTitle,
        question: question,
        chatStatus: "Active",
        Timestamp: millisec,
      })
      .then(setLoading(false), history("/roxchat"));
  };
  return (
    <div className="w-full h-screen bg-gray-400 pt-20">
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg text-center border-b py-3 font-semibold text-gray-700 capitalize dark:text-white">
          Create New Chat To Rox!
        </h2>
        {loading === true ? (
          <h1 className="text-center text-3xl font-bold text-red-600">
            Creating Chat!
          </h1>
        ) : null}

        <form onSubmit={handleCreate}>
          <div>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="chattitle"
                >
                  Chat Title
                </label>
                <input
                  id="chattitle"
                  type="text"
                  value={chatTitle}
                  required
                  onChange={(event) => setChatTitle(event.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="question"
                >
                  Question?
                </label>
                <input
                  id="question"
                  type="text"
                  value={question}
                  required
                  onChange={(event) => setQuestion(event.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Create
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default CreateChat;
