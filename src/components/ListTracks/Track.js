// == Import
import './styles.scss';

// == Composant
const Track = ({ name, image, artistsList, album }) => {
  let stringArtistsList = '';
  let i = 1;
  artistsList.map((item) => {
    stringArtistsList += item['name'];
    if((artistsList.length > 1) && (artistsList.length != i)){
      stringArtistsList += ', ';
    }
    i++;
  });

return (
    <li className="track">
      <div className='box-img-title'>
        <img className="track-image" src={image} alt="track" />
        <div className='box-track-info'>
          <span className='track-name'>{name}</span>
          <span className='track-artist'>{stringArtistsList}</span>  
        </div>
      </div>
      <span className='album-name'>{album}</span>
      <div className='box-like-time'>
        <i className="heart outline icon"></i>
        <span className='track-duration'>1:20</span>
      </div>
      
    </li>
  );
}

// == Export
export default Track;