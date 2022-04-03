// == Import
import './styles.scss';

// == Composant
const Playlist = ({ name, image }) => (
    <li className="playlist">
      <img className="playlist-image" src={image} alt="playlist" />
      <p className="playlist-name">{name}</p>        
    </li>
  );

// == Export
export default Playlist;