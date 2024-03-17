import './App.scss';
import { useState , useEffect } from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";

import VideoPage from './pages/VideoPage/VideoPage';
import UploadPage from './pages/UploadPage/UploadPage';


function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VideoPage />} />
        <Route path="/upload" element={<UploadPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// <Route path="/:videoId" element={<VideoPage videoId={videoId}/>} />
