import React, { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "../../firebase";

function ViewPost({ id }) {
  const db = firebase.firestore();
  const [postData, loading, error] = useCollection(
    db.collection("Posts").orderBy("Timestamp", "desc"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  const [post, setPost] = useState({});
  useEffect(() => {
    db.collection("Posts")
      .doc(id)
      .onSnapshot((documentSnapshot) => {
        if (documentSnapshot.exists) {
          setPost(documentSnapshot.data());
        }
      });
  }, []);
  return (
    <div class="">
      <div class="flex max-w-full md:w-1/2 my-10 bg-white shadow-md border rounded-lg overflow-hidden mx-auto">
        <div class="flex items-center justify-center w-full">
          <div class="w-full flex flex-col justify-center items-center">
            <div class="flex flex-row justify-center mt-2 px-2 py-3 mx-3">
              <h1 className="text-lg font-bold text-gray-500 border-b px-3">
                Post Id: {id}
              </h1>
            </div>
            <div class="border-b border-gray-500"></div>
            <div class="text-gray-400 flex flex-col justify-center items-center font-medium text-sm mb-7 mt-6 mx-3 px-2">
              <img class="rounded w-1/2 h-auto" src={post.postImage} />
            </div>
            <div className="w-full border-t py-2 mx-4">
              <div class="text-gray-600 font-bold text-lg mb-2 mx-3 px-2">
                {post.postTitle}
              </div>
              <div class="text-gray-500 font-normal text-sm mb-6 mx-3 px-2">
                {post.postDes}
              </div>
            </div>
            <div class="flex w-full border-t border-gray-100">
              <div class="mt-3 mx-5 flex flex-row">
                <div class="flex text-gray-700 font-bold text-sm rounded-md mb-2 mr-4 items-center">
                  Comments:
                  <div class="ml-1 text-gray-400 font-thin text-ms">
                    {" "}
                    ({post.comment})
                  </div>
                </div>
                <div class="flex text-gray-700 font-bold text-sm rounded-md mb-2 mr-4 items-center">
                  Like:{" "}
                  <div class="ml-1 text-gray-400 font-thin text-ms">
                    {" "}
                    ({post.like})
                  </div>
                </div>
              </div>
              <div class="mt-3 mx-5 w-full flex justify-end"></div>
            </div>
            {/* Comment goes here */}
          </div>
        </div>
      </div>
      <script
        data-name="BMC-Widget"
        data-cfasync="false"
        src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
        data-id="matheusgongo"
        data-description="Support me on Buy me a coffee!"
        data-message="Thank you for visiting! :D"
        data-color="#BD5FFF"
        data-position="Right"
        data-x_margin="18"
        data-y_margin="18"
      ></script>
    </div>
  );
}

export default ViewPost;
