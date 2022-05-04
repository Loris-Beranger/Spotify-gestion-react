// == Import
import './styles.scss';

import { useSelector, useDispatch } from 'react-redux';
import { loadTracks } from '../requetes';
import { useQuery } from 'react-query';
import { setCurrentPlaylistData } from '../../actions/actions';
import Spinner from '../Spinner';
import Track from './Track';
import { useState } from 'react';


// == Composant
const ListTracks = () => {
  const dispatch = useDispatch();
  let token = window.localStorage.getItem("token");
  let currentPlaylistId = useSelector((state) => state.currentPlaylistId);
  console.log(currentPlaylistId);
  let currentPlaylistData = useSelector((state) => state.currentPlaylistData);
  console.log(currentPlaylistData);

  const [offset, setOffset] = useState(0)
  const [listTracks, setListTracks] = useState([])

  console.log(offset)

  const queryKey = ['tracks', currentPlaylistId, offset];
  const {isLoading, data, error, refetch} = useQuery(queryKey, () => loadTracks(token, currentPlaylistId, offset), {
    refetchOnWindowFocus: false,
  });
  const requete = data || false;
  console.log(requete);
  if(requete){
    if(requete.data.total > 100) {
      if(offset === 0) {
        setOffset(100);
      }
      if(listTracks.length <= 100) {
        setListTracks(listTracks.concat(requete.data.items))
      }
      console.log(listTracks)
      if(listTracks.length > 100) {
        const action = setCurrentPlaylistData(listTracks);
        dispatch(action);
      }
      
    }
    else {
      setListTracks(requete.data.items);
      const action = setCurrentPlaylistData(listTracks);
      dispatch(action);
    }
    
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
