import {
    CHANGE_OFFSET,
    ADD_LIST_USER_PLAYLISTS,
    SET_CURRENT_PLAYLIST_ID,
    SET_CURRENT_PLAYLIST_DATA,
    SET_TOKEN,
    SET_CURRENT_USER_INFOS,
  } from '../actions/actions';
  
  const initialState = {
    offset: 0,
    token: '',
    currentUserInfo: [],
    listUserPlaylists: [],
    currentPlaylistId: [],
    currentPlaylistData: [],
  };
  
  const reducer = (state = initialState, action = {}) => {
    // console.log(`le reducer a reçu une action ${action.type}`);
  
    switch (action.type) {
      case CHANGE_OFFSET:
        return {
          ...state,
          offset: action.value,
        };
      case ADD_LIST_USER_PLAYLISTS:
        return {
          ...state,
          listUserPlaylists: state.listUserPlaylists.concat(action.value),
        };  
      case SET_CURRENT_PLAYLIST_ID:
        return {
          ...state,
          currentPlaylistId: action.value,
        };    
      case SET_CURRENT_PLAYLIST_DATA:
        return {
          ...state,
          currentPlaylistData: action.value,
        }; 
      case SET_CURRENT_USER_INFOS:
      return {
        ...state,
        currentPlaylistData: action.value,
      }; 
      case SET_TOKEN:
      return {
        ...state,
        token: action.value,
      }; 
      default:
        return state;
    }
  };
  
  export default reducer;