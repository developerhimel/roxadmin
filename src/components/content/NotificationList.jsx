import React from "react";

function NotificationList() {
  return (
    <div>
      <div class="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-4 pt-5">
        <div class="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg relative">
          <i class="fas fa-bell absolute top-0 left-1/2 right-1/2 text-xl text-gray-400 font-bold"></i>
          <div class="flex items-start justify-between">
            <div class="flex flex-col space-y-2">
              <span class="text-gray-400">Total Notifications</span>
              <span class="text-lg font-semibold">0</span>
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
    </div>
  );
}

export default NotificationList;
