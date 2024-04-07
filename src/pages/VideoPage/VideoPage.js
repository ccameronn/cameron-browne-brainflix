import './VideoPage.scss';
import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


// IMPORT COMPONENTS
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer.js";
import VideoDetails from "../../components/VideoDetails/VideoDetails.js";
import CommentForm from "../../components/CommentForm/CommentForm.js";
import Comments from "../../components/Comments/Comments.js";
import SideVideos from "../../components/SideVideos/SideVideos.js";




function VideoPage() {

  // DEFINING STATES 
  const [videoList, setvideoList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({});
  const [isLoading, setIsLoading] = useState(true);


  const { videoId } = useParams();


  
  // FUNCTIONS TO CALL API
  const URL = "https://project-2-api.herokuapp.com"
  const API_KEY ="8e457c3e-7245-4c95-9d54-759c220f1b2d"

  const fetchVideos = async () => {
    try {
      const response = await axios.get(`${URL}/videos?api_key=${API_KEY}`);
      const videoListResponse = response.data;
      return videoListResponse;
    } catch (error) {
      console.log("fetchVideos api call failed")
    }
  }

  const fetchVideoDetails = async (videoId) => {
    try {
      const response = await axios.get(`${URL}/videos/${videoId}?api_key=${API_KEY}`);
      const videoDetailsResponse = response.data;
      return videoDetailsResponse;
    } catch (error) {
      console.log("fetchVideoDetails api call failed")
    }
  }



  // FETCH and SET VIDEO LIST AND SELECTED VIDEO DETAILS WHEN VIDEO ID CHANGES

  useEffect(() => {
    const fetchData = async () => {
      // FETCH VIDEO LIST
      const videoListResponse = await fetchVideos();
      setvideoList(videoListResponse);


      // FETCH SELECTED VIDEO DETAILS
      if (videoId) {
         const videoDetailsResponse = await fetchVideoDetails(videoId);
         setSelectedVideo(videoDetailsResponse);
      } else {
        const videoDetailsResponse = await fetchVideoDetails(videoListResponse[0].id)
        setSelectedVideo(videoDetailsResponse);
      }

      setIsLoading(false);
    }
    
    fetchData()

  }, [videoId]);






 
  if (isLoading === true) {
    return <p>Loading...</p>;
  }


  // DEFINE PROPS TO PASS DOWN
  // selected Video image
  const selectedVideoImage = selectedVideo.image;

  // Comments 
  const selectedVideoComments = selectedVideo.comments;
  // Comment count
  const commentCount =  selectedVideoComments.length;

  // Filter videos for SideVideos
  const filteredVideos = videoList.filter((video) => {
    return video.id !== selectedVideo.id;
  });


  return (
      <div className="vid-page">
        <VideoPlayer videoImage={selectedVideoImage} />
        <main className="vid-page__main">
            <section className='vid-page__section'>
              <VideoDetails video={selectedVideo} />
              <CommentForm commentCount={commentCount}/>
              <Comments comments={selectedVideoComments} />
            </section>
            <SideVideos videos={filteredVideos}/>
        </main>
      </div>
    
  );

}





export default VideoPage;
