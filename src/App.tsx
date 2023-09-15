import React from "react";
import "./App.css";
import Sort from "./components/Sort";
import Search from "./components/Search";
import MainComponent from "./components/MainComponent";
import { Routes, Route } from "react-router-dom";
import DownloadComponent from "./components/DownloadComponent";

export default function App() {
  return (
    <React.Fragment>
      <DownloadComponent />
      <div className="sort__search">
        <Sort />
        <Search />
      </div>
      <Routes>
        <Route path="/:folderName/:folderId" element={<MainComponent />} />
        <Route path="/" element={<MainComponent />} />
      </Routes>
    </React.Fragment>
  );
}
