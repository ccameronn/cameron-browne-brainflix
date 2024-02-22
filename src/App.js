import './App.scss';
import { useState } from "react";

// IMPORT COMPONENTS
import NavBar from "./components/NavBar/NavBar.js";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer.js";
import VideoDetails from "./components/VideoDetails/VideoDetails.js";
import CommentForm from "./components/CommentForm/CommentForm.js";

// IMPORT VIDEOS
import VideoList from "./data/video-details.json";


function App() {

  // DEFINE SELECTED VIDEO USING STATE  
  const [videos, setVideos] = useState(VideoList);
  const [selectedVideo, setSelectedVideo] = useState(VideoList[0]);


  const clickHandler = (video) => {
    setSelectedVideo(video);
  };




  return (
    <div className="App">

    <NavBar />
    <VideoPlayer video={selectedVideo} />

    <main className="main-section">
        <section className="main-section1">
          <VideoDetails video={selectedVideo} />
          <CommentForm video={selectedVideo} />
          {/*}
          <Comments video={selectedVideo} />
           */}

        </section>
{/*}
        <SideVideos filteredVideo={filteredVideo} />
      */}
      </main>


  {/*}



      
  */}
  
    </div>
  );
}

export default App;
