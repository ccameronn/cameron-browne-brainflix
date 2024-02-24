import "./VideoDetails.scss";

import viewsIcon from "../../assets/images/icons/views.svg";
import likesIcon from "../../assets/images/icons/likes.svg";

const VideoDetails = ({ video }) => {

    var timestamp = new Date(video.timestamp);

  return (
    <section className="active-video-details">
      <h1 className="active-video-details__title">{video.title}</h1>
      <article className="stats">
        <div className="stats__left">
          <p className="stats__channel">By {video.channel}</p>
          <p className="stats__date">{timestamp.toLocaleDateString()}</p>
        </div>
        <div className="stats__right">
          <div className="stats__views">
            <img src={viewsIcon} className="stats__views--icon"></img>
            <p className="stats__views--count">{video.views}</p>
          </div>
          <div className="stats__likes">
            <img src={likesIcon} className="stats__likes--icon"></img>
            <p className="stats__likes--count">{video.likes}</p>
          </div>
        </div>
      </article>
      <p className="active-video-details__description">{video.description}</p>
    </section>
  );
}

export default VideoDetails;