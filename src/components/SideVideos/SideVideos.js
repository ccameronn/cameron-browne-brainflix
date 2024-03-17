import "./SideVideos.scss";

import { useNavigate } from "react-router-dom";

const SideVideos = ({videos}) => {

  let navigate = useNavigate();

  return (
    <section className="side-videos">
      <h2 className="side-videos__title">NEXT VIDEOS</h2>
      <ul className="video-list">
        {videos.map((video) => {
          return (
            <li
              onClick={() => {
                navigate(`/video/${video.id}`);
              }}
              key={video.id}
              className="video-list-item"
            >
              <div className="video-list-item__thumbnail">
                <img
                  src={video.image}
                  alt={video.title}
                  className="video-list-item__thumbnail-image"
                />
              </div>
              <div class="video-list-item__details">
                <h3 className="video-list-item__title">{video.title}</h3>
                <p className="video-list-item__channel">{video.channel}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SideVideos;