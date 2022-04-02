import {
    CHANGE_OFFSET,
    ADD_LIST_USER_PLAYLISTS,
  } from '../actions/actions';
  
  const initialState = {
    offset: 0,
    listUserPlaylists: [],
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
      default:
        return state;
    }
  };
  
  export default reducer;