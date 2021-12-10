import React, { useState } from "react";
import { Animated } from "react-animated-css";
import { useNavigate } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import firebase from "../../firebase";

function StreamSet() {
  const navigate = useNavigate();
  const [streamUrl, setStreamUrl] = useState({
    value: "rtmp://a.rtmp.youtube.com/live2",
    copied: false,
  });
  const [streamKey, setStreamKey] = useState({
    value: "u54q-fy09-r2df-rxm1-b5uv",
    copied: false,
  });
  const firebaseTimeStamp = new Date(
    firebase.firestore.Timestamp.now().seconds * 1000
  );
  const millisec =
    firebaseTimeStamp.getTime() - firebaseTimeStamp.getTimezoneOffset();
  return (
    <div>
      <Animated animationIn="zoomIn">
        <div class="w-full  max-w-xl p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
          <div class="">
            <div>
              <h1>Copy Stream url and set it to streamyard!</h1>
              <div>
                <div class="w-full flex-1 mx-2 svelte-1l8159u">
                  <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <input
                      disabled
                      value={streamUrl.value}
                      placeholder={streamUrl.value}
                      class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    />
                    <CopyToClipboard
                      text={streamUrl.value}
                      onCopy={() => setStreamUrl({ copied: true })}
                    >
                      <span className="cursor-pointer py-2 px-3 h-full bg-gray-300 rounded">
                        {streamUrl.copied === false ? "Copy" : "Copied"}
                      </span>
                    </CopyToClipboard>
                  </div>
                </div>
              </div>
              <h1>Copy Stream Key and set it to streamyard!</h1>
              <div>
                <div class="w-full flex-1 mx-2 svelte-1l8159u">
                  <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <input
                      disabled
                      value={streamKey.value}
                      placeholder={streamKey.value}
                      class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    />
                    <CopyToClipboard
                      text={streamKey.value}
                      onCopy={() => setStreamKey({ copied: true })}
                    >
                      <span className="cursor-pointer py-2 px-3 h-full bg-gray-300 rounded">
                        {streamKey.copied === false ? "Copy" : "Copied"}
                      </span>
                    </CopyToClipboard>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-3  mt-2 text-center space-x-4 md:block">
              <button
                onClick={() => navigate("/stream")}
                class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  firebase
                    .firestore()
                    .collection("Stream")
                    .doc("roxstream24")
                    .set({
                      url: streamUrl.value,
                      key: streamKey.value,
                      liveStatus: "waiting",
                      Timestamp: millisec,
                    })
                    .then(() => navigate("/stream"));
                }}
                class="mb-2 md:mb-0 bg-gray-500 border border-gray-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-gray-600"
              >
                Start
              </button>
            </div>
          </div>
        </div>
      </Animated>
    </div>
  );
}

export default StreamSet;
