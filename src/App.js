import './App.scss';
import { BrowserRouter , Routes, Route } from "react-router-dom";

import NavBar from './components/NavBar/NavBar'
import VideoPage from './pages/VideoPage/VideoPage';
import UploadPage from './pages/UploadPage/UploadPage';


function App() {
 
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<VideoPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/video/:videoId" element={<VideoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



