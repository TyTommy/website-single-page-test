import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Portfolio from "./routes/Portfolio";
import PostDetail from "./components/PostDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
    </>
  );
}

export default App;
