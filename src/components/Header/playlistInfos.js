import './styles.scss';

const PlaylistInfos = ({ image_url, name, owner_name, nb_tracks, playlistDuration }) => {
  return (
    <div className="playlist-infos">
      <img src={image_url} />
      <div className='box-text'>
        <h2 className="playlist-title">{name}</h2>
        <div>
          <img src="" />
          <span className="playlist-owner">{owner_name}</span>
          <span> - </span>
          <span className="nb-tracks">{nb_tracks} titres</span>
          <span>, </span>
          <span className="playlist-duration">{playlistDuration}</span>
        </div>
      </div>
    </div>
  );
}

export default PlaylistInfos;

