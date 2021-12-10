import React, { useState } from "react";
import { useNavigate } from "react-router";
import { storage } from "../../firebase";
import firebase from "../../firebase";

const AddAudio = () => {
  const history = useNavigate();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [audioStatus, setAudioStatus] = useState("unlocked");

  const firebaseTimeStamp = new Date(
    firebase.firestore.Timestamp.now().seconds * 1000
  );
  const millisec =
    firebaseTimeStamp.getTime() - firebaseTimeStamp.getTimezoneOffset();

  const formHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const file = e.target[0].files[0];
    // console.log(file.name);
    uploadFiles(file);
  };

  const uploadFiles = (file) => {
    //
    const uploadTask = storage.ref(`roxAudios/${file.name}`).put(file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        storage
          .ref("roxAudios")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            firebase
              .firestore()
              .collection("Audios")
              .doc(file.name)
              .set({
                title: title === "" ? file.name : title,
                artist: artist === "" ? "V.S.Griffin" : artist,
                url: url,
                uploadName: file.name,
                new: true,
                audioStatus: audioStatus,
                Timestamp: millisec,
              })
              .then(setLoading(false), history("/audio"));
          });
      }
    );
  };
  return (
    <div className="w-full h-screen bg-gray-400 pt-20">
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg text-center border-b py-3 font-semibold text-gray-700 capitalize dark:text-white">
          Add New Audio To Rox!
        </h2>
        {loading === true ? (
          <div>
            <h1 className="text-center text-3xl font-bold text-red-600">
              Uploading!
            </h1>
            <div className="w-full mt-3">
              <h2 className="text-center">Uploading {progress}%</h2>
            </div>
          </div>
        ) : null}

        <div>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="username"
              >
                Audio Title
              </label>
              <input
                id="username"
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="artistName"
              >
                Artist Name
              </label>
              <input
                id="artistName"
                type="name"
                value={artist}
                onChange={(event) => setArtist(event.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
          </div>
        </div>

        <form onSubmit={formHandler}>
          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="files">
              Audio File
            </label>
            <input
              id="files"
              required
              accept="audio/*"
              type="file"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>

          <span className="text-gray-700 dark:text-gray-200 mt-2">
            Audio Status
          </span>
          <div className="w-full pr-4 py-2">
            <div className="flex flex-row justify-start items-center">
              <div
                onClick={() =>
                  setAudioStatus(
                    audioStatus === "unlocked" ? "locked" : "unlocked"
                  )
                }
                class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"
              >
                <input
                  type="checkbox"
                  green-400
                  name="toggle"
                  id="toggle"
                  class={
                    audioStatus === "unlocked"
                      ? "toggle-checkbox absolute block w-6 h-6 rounded-full bg-white right-0 border-green-400 border-4 appearance-none cursor-pointer"
                      : "toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                  }
                />
                <label
                  for="toggle"
                  class={
                    audioStatus === "unlocked"
                      ? "toggle-label block overflow-hidden h-6 rounded-full bg-green-400 cursor-pointer"
                      : "toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                  }
                ></label>
              </div>
              {audioStatus === "unlocked" ? (
                <i class="fas fa-unlock text-yellow-400 ml-1"></i>
              ) : (
                <i class="fas fa-lock text-gray-400 ml-1"></i>
              )}
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

export default AddAudio;
