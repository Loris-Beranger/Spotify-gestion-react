// == Import
import './styles.scss'

import { useSelector, useDispatch } from 'react-redux'
import { loadTracks } from '../requetes'
import { useQuery } from 'react-query'
import { setCurrentPlaylistData } from '../../actions/actions'
import Spinner from '../Spinner'
import Track from './Track'
import { useState } from 'react'
import ContextMenu from '../contextMenu'

// == Composant
const ListTracks = () => {
  const dispatch = useDispatch()
  let token = window.localStorage.getItem('token')
  let currentPlaylistData = useSelector(state => state.currentPlaylistData)
  const currentPlaylistId = window.location.search.replace('?p=', '')

  const [offset, setOffset] = useState(0)
  const [listTracks, setListTracks] = useState([])

  const queryKey = ['tracks', currentPlaylistId, offset]
  const { isLoading, data, error, refetch } = useQuery(
    queryKey,
    () => loadTracks(token, currentPlaylistId, offset),
    {
      refetchOnWindowFocus: false
    }
  )
  const requete = data || false
  if (requete) {
    if (requete.data.total > 100) {
      if (offset === 0) {
        setOffset(100)
      }
      if (listTracks.length <= 100) {
        setListTracks(listTracks.concat(requete.data.items))
      }
      console.log(listTracks)
      if (listTracks.length > 100) {
        const action = setCurrentPlaylistData(listTracks)
        dispatch(action)
      }
    } else {
      const action = setCurrentPlaylistData(requete.data.items)
      dispatch(action)
    }
  }

  if (isLoading) {
    return <Spinner />
  }

  if (currentPlaylistData.length === 0) {
    return <div>...</div>
  }

  return (
    <ul className='list-tracks'>
      <ContextMenu currentPlaylistId={currentPlaylistId} />
      {!isLoading &&
        currentPlaylistData.map(item => (
          <Track
            key={item.id}
            uri={item.track.uri}
            name={item.track.name}
            image={item.track.album.images[0].url}
            artistsList={item.track.artists}
            album={item.track.album.name}
          />
        ))}
    </ul>
  )
}

// == Export
export default ListTracks
