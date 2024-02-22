import "./VideoPlayer.scss";


const VideoPlayer = ({video}) => {


  return (
    <div className="video-container">
      
      <video
        className="video"
        width="100%"
        height="100%"
        poster={video.image}
        controls
      >
        <source src="" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;