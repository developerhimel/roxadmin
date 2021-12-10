import React, { useEffect, useState } from "react";
import firebase from "../../firebase";
import moment from "moment";

function SubscriptionsList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const users = firebase
      .firestore()
      .collection("users")
      .where("subscription", "==", "subscribed")
      .onSnapshot((querySnapshot) => {
        const user = [];
        querySnapshot.forEach((documentSnapshot) => {
          user.push({
            ...documentSnapshot.data(),
            docid: documentSnapshot.id,
          });
        });

        setUsers(user);
      });
    return () => users();
  }, []);
  return (
    <div>
      <div class="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-4 pt-5">
        <div class="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg relative">
          <i class="fas fa-usd-circle absolute top-0 left-1/2 right-1/2 text-xl text-gray-400 font-bold"></i>
          <div class="flex items-start justify-between">
            <div class="flex flex-col space-y-2">
              <span class="text-gray-400">Total Subscribed Users</span>
              <span class="text-lg font-semibold">{users.length}</span>
            </div>
            <div class="p-8 bg-gray-200 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 animate-spin text-gray-400"
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
            </div>
          </div>
        </div>
      </div>
      <h3 class="mt-6 text-xl">Subscribed Users</h3>
      <div class="flex flex-col mt-6">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div class="overflow-hidden border-b border-gray-200 rounded-md shadow-md">
              <table class="min-w-full overflow-x-scroll divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      username
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Subscription Ended On
                    </th>
                    <th scope="col" class="relative px-6 py-3">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  {users.map((item) => (
                    <tr
                      key={item.docid}
                      class="transition-all hover:bg-gray-100 hover:shadow-lg"
                    >
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center">
                          <div class="flex-shrink-0 w-10 h-10">
                            <img
                              class="w-10 h-10 rounded-full"
                              src={item.userphoto}
                              alt=""
                            />
                          </div>
                          <div class="ml-4">
                            <div class="text-sm font-medium text-gray-900">
                              {item.fullname}
                            </div>
                            <div class="text-sm text-gray-500">
                              {item.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-900 ml-1">
                          {item.username}
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        {item.subscription === "subscribed" ? (
                          <span class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                            Subscribed
                          </span>
                        ) : (
                          <span class="inline-flex px-2 text-xs font-semibold leading-5 text-red-800 bg-green-100 rounded-full">
                            Unsubscribed
                          </span>
                        )}
                      </td>
                      <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {moment(item.subsEnd).format(
                          "Do MMM, YYYY   h:mm:ss A"
                        )}
                      </td>
                      <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        <a
                          href="#"
                          class="text-red-600 hover:text-white group hover:bg-gray-500 rounded"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7 group-hover:bg-gray-400 rounded p-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionsList;
