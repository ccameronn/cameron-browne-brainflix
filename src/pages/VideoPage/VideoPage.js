import './VideoPage.scss';
import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import { axios } from "axios";

// IMPORT COMPONENTS
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer.js";
import VideoDetails from "../../components/VideoDetails/VideoDetails.js";
import CommentForm from "../../components/CommentForm/CommentForm.js";
import Comments from "../../components/Comments/Comments.js";
import SideVideos from "../../components/SideVideos/SideVideos.js";

// IMPORT VIDEOS
import VideoListDetails from "../../data/video-details.json";
import VideoList from "../../data/videos.json";


// api call data functions

const url = "https://project-2-api.herokuapp.com"
const apiKey = "?api_key=" + "dfbe66f6-bc9d-4510-97aa-90a56ae5f1b0"

const fetchVideos = async () => {
  try {
    return await axios.get(url + "/videos" + apiKey)

  } catch (error) {
    console.log("fetchVideos API request failed")
  }
}

const fetchVideoDetails = async (videoId) => {
  try {
    return await axios.get(url + "/videos/" + videoId + apiKey)

  } catch (error) {
    console.log("fetchVideosDetails API request failed")
  }
}


function VideoPage() {

  // DEFINING STATES 
  const [sideVideos, setSideVideos] = useState(VideoList);
  const [selectedVideo, setSelectedVideo] = useState(VideoListDetails[0]);
  const [commentCount, setCommentCount] = useState(0);


  // fetch data




  // When videoId is changed, rerender selectedVideo

  const { videoId } = useParams();

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



  return (
    <div className="vid-page">

      <VideoPlayer video={selectedVideo} />

      <main className="vid-page__main">
          <section className='vid-page__section'>
            <VideoDetails video={selectedVideo} />
            <CommentForm commentCount={commentCount}/>
            <Comments video={selectedVideo} />
          </section>
          <SideVideos videos={sideVideos}/>
      </main>

    </div>
  );
}

export default VideoPage;
