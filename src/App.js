import './App.scss';
import { useState } from "react";

// IMPORT COMPONENTS
import NavBar from "./components/NavBar/NavBar.js";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer.js";
import VideoDetails from "./components/VideoDetails/VideoDetails.js";
import CommentForm from "./components/CommentForm/CommentForm.js";
import Comments from "./components/Comments/Comments.js";
import SideVideos from "./components/SideVideos/SideVideos.js";

// IMPORT VIDEOS
import VideoList from "./data/video-details.json";


function App() {

  // DEFINING STATES 
  const [videos, setVideos] = useState(VideoList);
  const [selectedVideo, setSelectedVideo] = useState(VideoList[0]);


  const clickHandler = (video) => {
    setSelectedVideo(video);
  };




  return (
    <div className="app">

      <NavBar />
      <VideoPlayer video={selectedVideo} />
      <main className="app__main">
          <section className='app__section'>
            <VideoDetails video={selectedVideo} />
            <CommentForm />
            <Comments video={selectedVideo} />
          </section>
          <SideVideos videos={videos} clickHandler={clickHandler} selectedVideo={selectedVideo} />
      </main>

  
    </div>
  );
}

export default App;
