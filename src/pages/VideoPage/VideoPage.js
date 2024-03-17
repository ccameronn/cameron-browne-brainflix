import './VideoPage.scss';
import { useState , useEffect } from "react";
import { useParams , useNavigate } from "react-router-dom";

// IMPORT COMPONENTS
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer.js";
import VideoDetails from "../../components/VideoDetails/VideoDetails.js";
import CommentForm from "../../components/CommentForm/CommentForm.js";
import Comments from "../../components/Comments/Comments.js";
import SideVideos from "../../components/SideVideos/SideVideos.js";

// IMPORT VIDEOS
import VideoListDetails from "../../data/video-details.json";
import VideoList from "../../data/videos.json";


function VideoPage() {

  // DEFINING STATES 
  const [sideVideos, setSideVideos] = useState(VideoList);
  const [selectedVideo, setSelectedVideo] = useState(VideoListDetails[0]);
  const [commentCount, setCommentCount] = useState(0);


  const { videoId } = useParams();

// When videoId is changed, rerender selectedVideo

  useEffect(() => {
    VideoListDetails.forEach((video) => {
        if (videoId === video.id) {setSelectedVideo(video)}
    })
  }, [videoId]);


  //  When selectedVideo is updated, rerender sideVideos

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


// When a video is clicked, redirect to page with that video id and update videoId to trigger rerender

    let navigate = useNavigate();

  const clickHandler = (video) => {
    // find the vid in vid details that matches the vid in vid list
    const videoDetails = VideoListDetails.find((element) => element.id === video.id);

    navigate(`/video/${videoDetails.id}`);

    // setSelectedVideo(videoDetails);
  };

 


  return (
    <div className="vid-page">

      <VideoPlayer video={selectedVideo} />

      <main className="vid-page__main">
          <section className='vid-page__section'>
            <VideoDetails video={selectedVideo} />
            <CommentForm commentCount={commentCount}/>
            <Comments video={selectedVideo} />
          </section>
          <SideVideos videos={sideVideos} clickHandler={clickHandler}/>
      </main>

    </div>
  );
}

export default VideoPage;
