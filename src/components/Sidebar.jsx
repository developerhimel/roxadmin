import React from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "./content/Dashboard";
import Audio from "./content/Audio";
import Video from "./content/Video";
import Book from "./content/Book";
import Chat from "./content/Chat";
import Post from "./content/Post";
import Products from "./content/Products";
import Dark from "./content/Dark";
import StreamOverView from "./content/StreamOverView";
import ViewPost from "./content/ViewPost";
import StreamSet from "./content/StreamSet";
import NotificationList from "./content/NotificationList";
import SubscriptionsList from "./content/SubscriptionsList";
import OrderList from "./content/OrderList";

const Sidebar = ({ active }) => {
  const history = useNavigate();
  const handlelogout = () => {
    localStorage.removeItem("user");
    history("/login");
  };
  return (
    <>
      {/* Notification & Logout Content fixed */}
      <div className="absolute top-1 right-0 z-50 ">
        <div className="flex flex-row justify-between items-center bg-indigo-400 rounded-tl-full rounded-bl-full">
          <a href="/notifications">
            <button className="px-3 py-1 pr-2 hover:bg-indigo-500 rounded-tl-full rounded-bl-full border-r relative">
              <i class="fas fa-bell text-xl p-1 text-white"></i>
              {/* <span className="absolute -top-1 -left-1 w-6 h-6 text-center bg-red-500 text-white rounded-full border-2 border-white text-sm">
                0
              </span> */}
            </button>
          </a>
          <button
            onClick={() => handlelogout()}
            className="px-3 py-1 pl-2 hover:bg-indigo-500"
          >
            <i className="fas fa-sign-out-alt text-xl p-1 text-white"></i>
          </button>
        </div>
      </div>

      <div className="flex flex-row overflow-hidden">
        <div className="fixed z-50">
          <div className="flex flex-col w-64 h-screen px-4 py-8 bg-gray-50 border dark:bg-gray-800 dark:border-gray-600 rounded-r-xl">
            <a href="/">
              <img
                className="mx-auto h-14 w-auto"
                src="./assets/logo.png"
                alt="Rox Logo"
              />
            </a>

            {/* <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 border mt-1">
            <div className="w-2 bg-green-600 dark:bg-gray-900"></div>

            <div className="flex items-center px-2 py-3">
              <img
                className="object-cover w-10 h-10 rounded-full"
                alt="Admin avatar"
                src="/assets/griffin.jpeg"
              />

              <div className="mx-3">
                <p className="text-gray-600 font-bold dark:text-gray-200">
                  V.S.Griffin
                </p>
              </div>
            </div>
          </div> */}

            <div className="flex flex-col justify-between flex-1 mt-3 border-t">
              <nav>
                <a
                  className={
                    active === "dashboard"
                      ? "flex items-center px-4 py-2 mt-5 text-gray-700 bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-200"
                      : "flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                  }
                  href="/"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className="mx-4 font-medium">Dashboard</span>
                </a>

                <a
                  className={
                    active === "audio"
                      ? "flex items-center px-4 py-2 mt-5 text-gray-700 bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-200"
                      : "flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                  }
                  href="/audio"
                >
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
                      d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                    />
                  </svg>

                  <span className="mx-4 font-medium">Audios</span>
                </a>

                <a
                  className={
                    active === "video"
                      ? "flex items-center px-4 py-2 mt-5 text-gray-700 bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-200"
                      : "flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                  }
                  href="/video"
                >
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
                      d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                    />
                  </svg>

                  <span className="mx-4 font-medium">Videos</span>
                </a>

                <a
                  className={
                    active === "book"
                      ? "flex items-center px-4 py-2 mt-5 text-gray-700 bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-200"
                      : "flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                  }
                  href="/books"
                >
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
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>

                  <span className="mx-4 font-medium">Books</span>
                </a>

                <a
                  className={
                    active === "store"
                      ? "flex items-center px-4 py-2 mt-5 text-gray-700 bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-200"
                      : "flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                  }
                  href="/store"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>

                  <span className="mx-4 font-medium">Merch Store</span>
                </a>

                <a
                  className={
                    active === "chat"
                      ? "flex items-center px-4 py-2 mt-5 text-gray-700 bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-200"
                      : "flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                  }
                  href="/roxchat"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="mx-4 font-medium">Rox Chat</span>
                </a>

                <a
                  className={
                    active === "post"
                      ? "flex items-center px-4 py-2 mt-5 text-gray-700 bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-200"
                      : "flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                  }
                  href="/weeklyCheckIn"
                >
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
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>

                  <span className="ml-4 font-medium">Weekly Check In</span>
                </a>

                <a
                  className={
                    active === "dark"
                      ? "flex items-center px-4 py-2 mt-5 text-gray-700 bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-200"
                      : "flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                  }
                  href="/afterDark"
                >
                  <i class="fas fa-comment-times h-6 w-6 text-xl"></i>
                  <span className="ml-4 font-medium">After Dark</span>
                </a>

                <a
                  className={
                    active === "stream"
                      ? "flex items-center px-4 py-2 mt-5 text-gray-700 bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-200"
                      : "flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                  }
                  href="/stream"
                >
                  <img
                    src="/assets/liveStream.svg"
                    className="w-6 h-6"
                    alt="stream logo"
                  />

                  <span className="ml-4 font-medium">Live Stream</span>
                </a>

                <hr className="my-6 dark:border-gray-600" />

                <a
                  className={
                    active === "order"
                      ? "flex items-center px-4 py-2 mt-5 text-gray-700 bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-200"
                      : "flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                  }
                  href="/orders"
                >
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
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>

                  <span className="mx-4 font-medium">Orders</span>
                </a>

                <a
                  className={
                    active === "subscriptions"
                      ? "flex items-center px-4 py-2 mt-5 text-gray-700 bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-200"
                      : "flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                  }
                  href="/subscriptions"
                >
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
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <span className="mx-4 font-medium">Subscriptions</span>
                </a>

                <a
                  className={
                    active === "notification"
                      ? "flex items-center px-4 py-2 mt-5 text-gray-700 bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-200"
                      : "flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                  }
                  href="/notifications"
                >
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
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>

                  <span className="mx-4 font-medium">Notifications</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
        <div className="w-full h-screen ml-64 bg-white overflow-scroll overflow-x-hidden overflow-y-auto max-h-screen">
          <div className="m-3">
            {active === "dashboard" ? (
              <Dashboard />
            ) : active === "audio" ? (
              <Audio />
            ) : active === "video" ? (
              <Video />
            ) : active === "book" ? (
              <Book />
            ) : active === "chat" ? (
              <Chat />
            ) : active === "post" ? (
              <Post />
            ) : active === "store" ? (
              <Products />
            ) : active === "dark" ? (
              <Dark />
            ) : active === "stream" ? (
              <StreamOverView />
            ) : active === "streamset" ? (
              <StreamSet />
            ) : active === "notification" ? (
              <NotificationList />
            ) : active === "subscriptions" ? (
              <SubscriptionsList />
            ) : active === "order" ? (
              <OrderList />
            ) : (
              <ViewPost id={active} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
