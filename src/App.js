import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AfterDark from "./pages/AfterDark";
import AddAudio from "./pages/audio/AddAudio";
import AudioList from "./pages/AudioList";
import BookList from "./pages/BookList";
import AddBooks from "./pages/books/AddBooks";
import CreateChat from "./pages/chat/CreateChat";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import AddPost from "./pages/posts/AddPost";
import ProductList from "./pages/ProductList";
import RoxChat from "./pages/RoxChat";
import AddProduct from "./pages/store/AddProduct";
import Stream from "./pages/Stream";
import AddVideo from "./pages/video/AddVideo";
import VideoList from "./pages/VideoList";
import WeeklyCheckIn from "./pages/WeeklyCheckIn";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
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
        <Route path="/addPost" element={<AddPost />} />
        <Route path="/afterDark" element={<AfterDark />} />
        <Route path="/stream" element={<Stream />} />
      </Routes>
    </div>
  );
}

export default App;
