// === action types
export const CHANGE_OFFSET = 'CHANGE_OFFSET';
export const ADD_LIST_USER_PLAYLISTS = 'ADD_LIST_USER_PLAYLISTS';
export const SET_CURRENT_PLAYLIST_ID = 'SET_CURRENT_PLAYLIST_ID';
export const SET_CURRENT_PLAYLIST_DATA = 'SET_CURRENT_PLAYLIST_DATA';

export const changeOffset = (newValue) => ({
  type: CHANGE_OFFSET,
  value: newValue,
});

export const addListUserPlaylists = (newValue) => ({
  type: ADD_LIST_USER_PLAYLISTS,
  value: newValue,
});

export const setCurrentPlaylistId = (newValue) => ({
  type: SET_CURRENT_PLAYLIST_ID,
  value: newValue,
});

export const setCurrentPlaylistData = (newValue) => ({
  type: SET_CURRENT_PLAYLIST_DATA,
  value: newValue,
});
