import "./SideVideos.scss";

const SideVideos = ({videos, clickHandler, selectedVideo}) => {

    const filteredVideos = videos.filter((video) => {
    return video.id !== selectedVideo.id;
  });

  return (
    <section className="side-videos">
      <h2 className="side-videos__title">NEXT VIDEOS</h2>
      <ul className="video-list">
        {filteredVideos.map((video) => {
          return (
            <li
              onClick={() => {
                clickHandler(video);
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