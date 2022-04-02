// == Import
import './styles.scss';

import Playlist from './Playlist';
import { useQuery } from 'react-query';
import { loadPlaylists } from '../requetes';


// == Composant
const ListPlaylists = () => {
  let token = window.localStorage.getItem("token");
  let offset = 0;
  const queryKey = ['playlists', offset];
  const {isLoading, data, error, refetch} = useQuery(queryKey, () => loadPlaylists(token, offset), {
    refetchOnWindowFocus: false,
  });
  const requete = data || false;
  let listPlaylistsFilter = [];

  if(requete){
    let listPlaylists = requete.data.items
    console.log(listPlaylists);
    listPlaylists.map((item) => {
      if(item.owner.id === 'loris.beranger1'){
        listPlaylistsFilter.push(item);
      }
    })
    if(listPlaylists.length === 20){
      console.log('test');
      offset = 20;
      
    }
    console.log(listPlaylistsFilter)
  }
  
  

  return (
    <ul className="list-playlists">
      {
        !isLoading && listPlaylistsFilter.map((item) => (
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
