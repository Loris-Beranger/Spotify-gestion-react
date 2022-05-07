import './styles.scss';

const PlaylistInfos = ({ image_url, name, owner_name, nb_tracks }) => {
  return (
    <div className="playlist-infos">
      <img src={image_url} />
      <div>
        <h2 className="playlist-title">{name}</h2>
        <div>
          <img src="" />
          <span className="playlist-owner">{owner_name}</span>
          <span className="nb-tracks">{nb_tracks}</span>
          <span className="playlist-duration">46 min 27 s</span>
        </div>
      </div>
    </div>
  );
}

export default PlaylistInfos;

