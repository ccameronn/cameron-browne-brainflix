import "./VideoPlayer.scss";


const VideoPlayer = ({videoImage}) => {

  return (
    <div className="video-container">
      
      <video
        className="video"
        width="100%"
        height="100%"
        poster={videoImage}
        controls
      >
        <source src="" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;