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




// FUNCTIONS TO CALL API
const url = "https://project-2-api.herokuapp.com"
const apiKey = "?api_key=" + "8e457c3e-7245-4c95-9d54-759c220f1b2d"

const fetchVideos = async () => {
  try {
    const response = await axios.get(url + "/videos" + apiKey);
    const videoListResponse = response.data;
    return videoListResponse;
  } catch (error) {
    console.log("fetchVideos api call failed")
  }
}

const fetchVideoDetails = async (videoId) => {
  try {
    const response = await axios.get(url + "/videos/" + videoId + apiKey);
    const videoDetailsResponse = response.data;
    return videoDetailsResponse;
  } catch (error) {
    console.log("fetchVideoDetails api call failed")
  }
}




function VideoPage() {

  // DEFINING STATES 
  const [videoList, setvideoList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({});
  const [sideVideos, setSideVideos] = useState([]);
  const [commentCount, setCommentCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);


  const { videoId } = useParams();

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


  useEffect(() => {
      if (isLoading === false) {
        // Set commentCount
        const selectedVideoComments = selectedVideo.comments;
        setCommentCount(selectedVideoComments.length);
    
        //  Set sideVideos
        const filteredVideos = videoList.filter((video) => {
          return video.id !== selectedVideo.id;
        });
        setSideVideos(filteredVideos);
      }

  }, [selectedVideo])


 
  if (isLoading === true) {
    return <p>Loading...</p>;
  }


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
