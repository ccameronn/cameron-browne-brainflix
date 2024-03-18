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
    return await axios.get(url + "/videos" + apiKey)
  } catch (error) {
    console.log("fetchVideos api call failed")
  }
}

const fetchVideoDetails = async (videoId) => {
  try {
    return await axios.get(url + "/videos/" + videoId + apiKey)
  } catch (error) {
    console.log("fetchVideoDetails api call failed")
  }
}


function VideoPage() {

  // DEFINING STATES 
  const [videoList, setvideoList] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [sideVideos, setSideVideos] = useState([]);
  const [commentCount, setCommentCount] = useState(0);


  const { videoId } = useParams();

  // FETCH and SET VIDEO LIST AND SELECTED VIDEO DETAILS WHEN VIDEO ID CHANGES

  useEffect(() => {
    const fetchData = async () => {
      // FETCH VIDEO LIST
      const videoListApiCall = await fetchVideos();

      // FETCH SELECTED VIDEO DETAILS

      let videoDetailsApiCall = {};

      if (videoId) {
        let videoDetailsApiCall = await fetchVideoDetails(videoId);
      } else {
        let videoDetailsApiCall = await fetchVideoDetails(videoListApiCall.data[0].id)
      
      }

      setvideoList(videoListApiCall.data);
      setSelectedVideo(videoDetailsApiCall.data);


    }
    
    fetchData()


  }, [videoId]);



    // //  Set sideVideos
    // const filteredVideos = videoList.filter((video) => {
    //   return video.id !== selectedVideo.id;
    // });
    // setSideVideos(filteredVideos);
    
    // // Set commentCount
    // const selectedVideoComments = selectedVideo.comments;
    // setCommentCount(selectedVideoComments.length);



 
  if (!selectedVideo || !videoList) {
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
