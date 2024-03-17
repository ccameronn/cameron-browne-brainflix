import './App.scss';
import { useState , useEffect } from "react";

// IMPORT COMPONENTS
import NavBar from "./components/NavBar/NavBar.js";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer.js";
import VideoDetails from "./components/VideoDetails/VideoDetails.js";
import CommentForm from "./components/CommentForm/CommentForm.js";
import Comments from "./components/Comments/Comments.js";
import SideVideos from "./components/SideVideos/SideVideos.js";

// IMPORT VIDEOS
import VideoListDetails from "./data/video-details.json";
import VideoList from "./data/videos.json";


function App() {

  // DEFINING STATES 
  const [sideVideos, setSideVideos] = useState(VideoList);
  const [selectedVideo, setSelectedVideo] = useState(VideoListDetails[0]);
  const [commentCount, setCommentCount] = useState(0);

  //  UTILS

useEffect(() => {

  // filter imported video list and set
  const filteredSideVideos = VideoList.filter((video) => {
    return video.id !== selectedVideo.id;
  });
  setSideVideos(filteredSideVideos);

  // define comment count
  const selectedVideoComments = selectedVideo.comments;
  setCommentCount(selectedVideoComments.length);
}, [selectedVideo]);




  const clickHandler = (video) => {
    // find the vid in vid details that matches the vid in vid list
    const videoDetails = VideoListDetails.find((element) => element.id === video.id);

    setSelectedVideo(videoDetails);
  };

 


  return (
    <div className="app">

      <NavBar />

      <VideoPlayer video={selectedVideo} />

      <main className="app__main">
          <section className='app__section'>
            <VideoDetails video={selectedVideo} />
            <CommentForm commentCount={commentCount}/>
            <Comments video={selectedVideo} />
          </section>
          <SideVideos videos={sideVideos} clickHandler={clickHandler}/>
      </main>

    </div>
  );
}

export default App;
