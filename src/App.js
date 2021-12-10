import React from "react";
import { Routes, Route } from "react-router-dom";
import AfterDark from "./pages/AfterDark";
import AddAudio from "./pages/audio/AddAudio";
import AudioList from "./pages/AudioList";
import BookList from "./pages/BookList";
import AddBooks from "./pages/books/AddBooks";
import CreateChat from "./pages/chat/CreateChat";
import AudioActivity from "./pages/contentActivity/AudioActivity";
import BooksActivity from "./pages/contentActivity/BooksActivity";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Notifications from "./pages/Notifications";
import Orders from "./pages/Orders";
import AddPost from "./pages/posts/AddPost";
import ViewPost from "./pages/posts/ViewPost";
import ProductList from "./pages/ProductList";
import RoxChat from "./pages/RoxChat";
import AddProduct from "./pages/store/AddProduct";
import Stream from "./pages/Stream";
import StreamSetup from "./pages/stream/StreamSetup";
import Subscriptions from "./pages/Subscriptions";
import AddVideo from "./pages/video/AddVideo";
import VideoList from "./pages/VideoList";
import WeeklyCheckIn from "./pages/WeeklyCheckIn";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/booksActivity" element={<BooksActivity />} />
        <Route path="/audioActivity" element={<AudioActivity />} />
        <Route path="/audio" element={<AudioList />} />
        <Route path="/addAudio" element={<AddAudio />} />
        <Route path="/video" element={<VideoList />} />
        <Route path="/addVideo" element={<AddVideo />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/addBooks" element={<AddBooks />} />
        <Route path="/store" element={<ProductList />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/roxchat" element={<RoxChat />} />
        <Route path="/createChat" element={<CreateChat />} />
        <Route path="/weeklyCheckIn" element={<WeeklyCheckIn />} />
        <Route path="/viewPost" element={<ViewPost />} />
        <Route path="/addPost" element={<AddPost />} />
        <Route path="/afterDark" element={<AfterDark />} />
        <Route path="/stream" element={<Stream />} />
        <Route path="/streamSetup" element={<StreamSetup />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
}

export default App;
