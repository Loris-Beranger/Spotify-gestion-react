// == Import
import './styles.scss';

import { useSelector, useDispatch } from 'react-redux';
import { loadTracks } from '../requetes';
import { useQuery } from 'react-query';
import { setCurrentPlaylistData } from '../../actions/actions';
import Spinner from '../Spinner';
import Track from './Track';


// == Composant
const ListTracks = () => {
  const dispatch = useDispatch();
  let token = window.localStorage.getItem("token");
  let currentPlaylistId = useSelector((state) => state.currentPlaylistId);
  console.log(currentPlaylistId);
  let currentPlaylistData = useSelector((state) => state.currentPlaylistData);
  console.log(currentPlaylistData);

  const queryKey = ['tracks', currentPlaylistId];
  const {isLoading, data, error, refetch} = useQuery(queryKey, () => loadTracks(token, currentPlaylistId), {
    refetchOnWindowFocus: false,
  });
  const requete = data || false;
  console.log(requete);
  if(requete){
    let listTracks = requete.data.items
    const action = setCurrentPlaylistData(listTracks);
    dispatch(action);
  }

  return (
    <ul className="list-tracks">
      {
        !isLoading && currentPlaylistData.map((item) => (
            <Track 
              key={item.track.id}
              name={item.track.name}
              image={item.track.album.images[0].url}
              artistsList={item.track.artists}
              album={item.track.album.name}
            />          
        ))
      }
      {isLoading && <Spinner />}
    </ul>
  );
}



// == Export
export default ListTracks;
