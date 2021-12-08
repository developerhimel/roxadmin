import React, { useEffect, useRef, useState } from "react";
import PageLoader from "../PageLoader";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "../../firebase";
import ScrollToBottom from "react-scroll-to-bottom";
import moment from "moment";

const Chat = () => {
  const db = firebase.firestore();
  const [message, setMessage] = useState("");
  const [fetchMessages, setFetchMessages] = useState([]);
  const [chatState, setChatState] = useState(true);
  const [chatData, loading, error] = useCollection(
    db.collection("ChatRoom").orderBy("Timestamp", "desc"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  const firebaseTimeStamp = new Date(
    firebase.firestore.Timestamp.now().seconds * 1000
  );
  const millisec =
    firebaseTimeStamp.getTime() - firebaseTimeStamp.getTimezoneOffset();

  useEffect(() => {
    const fireSms = firebase
      .firestore()
      .collection("ChatRoom")
      .doc("active chat document")
      .collection("ChatMessages")
      .where("roomStatus", "==", "Active")
      .orderBy("Timestamp", "asc")
      .onSnapshot((querySnapshot) => {
        const messages = [];
        querySnapshot.forEach((documentSnapshot) => {
          messages.push({
            ...documentSnapshot.data(),
            docid: documentSnapshot.id,
          });
        });
        setFetchMessages(messages);
      });
    return () => {
      fireSms();
    };
  }, []);
  useEffect(() => {
    firebase
      .firestore()
      .collection("ChatRoom")
      .doc("active chat document")
      .get()
      .then((documentSnapshot) => {
        if (documentSnapshot.exists) {
          setChatState(false);
        }
      });
  }, [fetchMessages]);
  return (
    <div>
      <div className="w-full border-b pb-2">
        <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white border rounded-lg shadow-md dark:bg-gray-800">
          <div className="flex items-center justify-center w-12 bg-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="px-4 py-2 -mx-3">
            <div className="mx-3">
              <span className="font-semibold text-blue-500 dark:text-green-400">
                Rox Chat Room
              </span>
            </div>
          </div>
        </div>
      </div>
      {chatState === true ? (
        <a href="/createChat">
          <button className="flex items-center mt-2 mx-2 px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80">
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
            <span className="mx-1">Start New Chat Room</span>
          </button>
        </a>
      ) : (
        <button className="flex items-center mt-2 mx-2 px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 animate-spin"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          <span className="mx-1">Chat Room Running</span>
        </button>
      )}
      {loading && (
        <div>
          <PageLoader />
        </div>
      )}
      {chatData && (
        <div className="">
          {chatData.docs.map((doc) => (
            <div className="" key={doc.id}>
              {doc.data().chatStatus === "Active" ? (
                <div className="w-full border bg-gray-50 mt-5 p-5 rounded-lg relative">
                  <button
                    onClick={() => {
                      if (window.confirm("Are you sure to Close This Room?")) {
                        firebase
                          .firestore()
                          .collection("ChatRoom")
                          .doc("active chat document")
                          .delete()
                          .then(
                            firebase
                              .firestore()
                              .collection("ChatRoom")
                              .doc("active chat document")
                              .collection("ChatMessages")
                              .get()
                              .then((querySnapshot) => {
                                Promise.all(
                                  querySnapshot.docs.map((d) => d.ref.delete())
                                );
                              })
                          );
                        firebase.firestore().collection("ChatRoom").add({
                          chatTitle: doc.data().chatTitle,
                          question: doc.data().question,
                          chatStatus: "Ended",
                          Timestamp: millisec,
                        });
                        window.location.reload();
                      }
                    }}
                    className="absolute top-0 right-0 bg-red-500 px-3 py-2 hover:bg-red-600 rounded-bl-lg rounded-tr-lg"
                  >
                    <span className="text-white font-bold">Close Room</span>
                  </button>
                  <span className="absolute top-2 left-2 bg-green-600 w-3.5 h-3.5 rounded-full animate-ping z-20"></span>
                  <span className="absolute top-2 left-2 bg-green-600 w-4 h-4 rounded-full animate-pulse z-30"></span>
                  <div className="w-full flex flex-row justify-center items-center border-b pb-4">
                    <h1 className="font-bold text-2xl text-gray-400">
                      {doc.data().chatTitle}
                    </h1>
                  </div>
                  <div className="mt-5">
                    <h1 className="text-3xl font-bold border-b inline pl-2 pr-5">
                      Question?
                    </h1>
                    <br />
                    <div className="mt-4">
                      <i class="fad fa-bolt text-2xl text-yellow-600 animate-pulse"></i>
                      <h1 className="inline ml-3 text-xl font-bold text-gray-500">
                        {doc.data().question}
                      </h1>
                    </div>
                    <h1 className="mt-10 text-xl ml-2 font-bold text-gray-500 ">
                      <i class="fas fa-comment-dots"></i> Chat Box
                    </h1>
                    <div className="bg-white mx-10 mt-3 p-5 pr-0 rounded-lg border">
                      <ScrollToBottom className="h-500 block overflow-scroll overflow-x-hidden chatScroll p-3 bg-gray-100 my-1 rounded-lg">
                        {fetchMessages.map((item) => (
                          <div
                            key={item.docid}
                            className="flex flex-col justify-start"
                          >
                            <div className="border bg-white shadow rounded sm:max-w-2xl my-2 px-5 py-3 flex flex-row justify-between items-center relative">
                              <div className="flex flex-col justify-start">
                                <span className="text-base font-bold flex flex-row justify-start items-center border-b pb-2 mb-3 px-2">
                                  <img
                                    src="/assets/griffin.jpeg"
                                    alt="From Image"
                                    className="h-8 w-8 rounded-full mr-2"
                                  />
                                  {item.from} (Admin)
                                  <span className="ml-5 text-gray-400">
                                    {moment(item.Timestamp).format(
                                      "Do MMM, YYYY   h:mm:ss A"
                                    )}
                                  </span>
                                </span>
                                <span className="text-base font-bold">
                                  Message:{" "}
                                  <span className="font-normal">
                                    {item.message}
                                  </span>
                                </span>
                              </div>
                              <span className="bg-gray-100 text-gray-500 p-1 rounded absolute top-1 right-1">
                                <i class="fas fa-user-shield"></i>
                              </span>
                            </div>
                          </div>
                        ))}
                      </ScrollToBottom>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          db.collection("ChatRoom")
                            .doc(doc.id)
                            .collection("ChatMessages")
                            .add({
                              message: message,
                              from: "V.S.Griffin",
                              roomId: doc.id,
                              Timestamp: millisec,
                              roomStatus: "Active",
                            })
                            .then(setMessage(""));
                        }}
                        className="flex flex-row justify-between items-center"
                      >
                        <textarea
                          required
                          value={message}
                          onChange={(event) => setMessage(event.target.value)}
                          type="text"
                          placeholder="Reply to users"
                          className="border rounded-lg bg-gray-50 p-3 focus:outline-none font-bold sm:max-w-full sm:w-full pr-5 h-32"
                        />
                        <button
                          disabled={message === "" ? true : false}
                          type="submit"
                          className="border p-3 px-8 rounded-lg mx-5 bg-gray-50 hover:border-blue-500 hover:cursor-pointer hover:bg-blue-500"
                        >
                          <i class="fas fa-paper-plane hover:text-white"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full bg-gray-100 border rounded-lg my-4 p-3">
                  <div className="flex flex-row justify-between items-center">
                    <div className="">
                      <h1 className="font-bold text-lg">
                        {doc.data().chatTitle}
                      </h1>
                      <h1 className="text-sm font-bold text-gray-500">
                        {doc.data().question}
                      </h1>
                    </div>
                    <div>
                      <h1 className="font-bold text-gray-500">
                        {moment(doc.data().Timestamp).format(
                          "DD/MM/YYYY__h:mm:ss A"
                        )}
                      </h1>
                    </div>
                    <div className="">
                      <span className="bg-red-600 text-white px-5 py-3 font-bold rounded-lg">
                        {doc.data().chatStatus}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Chat;
