// == Import
import './styles.scss'

// == Composant
const Playlist = ({ name, image }) => {
  return (
    <li className='playlist'>
      <img
        className='playlist-image'
        src={
          image === undefined
            ? 'https://community.spotify.com/t5/image/serverpage/image-id/25294i2836BD1C1A31BDF2?v=v2'
            : image
        }
        alt='playlist'
      />
      <p className='playlist-name'>{name}</p>
    </li>
  )
}
// == Export
export default Playlist
