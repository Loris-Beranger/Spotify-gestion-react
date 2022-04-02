// == Import
import './styles.scss';

import Playlist from './Playlist';
import { useQuery, useMutation } from 'react-query';
import { loadPlaylists } from '../requetes';
import { useSelector, useDispatch } from 'react-redux';
import { changeOffset, addListUserPlaylists } from '../../actions/actions';


// == Composant
const ListPlaylists = () => {
  const dispatch = useDispatch();
  let token = window.localStorage.getItem("token");

  let offset = useSelector((state) => state.offset);
  let listUserPlaylists = useSelector((state) => state.listUserPlaylists);
  console.log(listUserPlaylists)

  const queryKey = ['playlists', offset];
  const {isLoading, data, error, refetch} = useQuery(queryKey, () => loadPlaylists(token, offset), {
    refetchOnWindowFocus: false,
  });
  const requete = data || false;
  
  
  if(requete) {    
    let listPlaylists = requete.data.items

    console.log(requete)
     if(offset < requete.data.total){
      let filter = []; 
      listPlaylists.map((item) => {
        if(item.owner.id === 'loris.beranger1'){
          filter.push(item);
        }
      })
      const action1 = changeOffset(offset + 20);
      dispatch(action1);
      const action2 = addListUserPlaylists(filter);
      dispatch(action2);
    } 
  } 

  return (
    <ul className="list-playlists">
      {
        !isLoading && listUserPlaylists.map((item) => (
          <Playlist 
            key={item.id}
            name={item.name}
            image={item.images[0].url}
          />
        ))
      }
      {isLoading && <p style={{ color: 'white', margin: 'auto' }}>Loading...</p>}
      
    </ul>
  );
}



// == Export
export default ListPlaylists;
