// === action types
export const CHANGE_OFFSET = 'CHANGE_OFFSET';
export const ADD_LIST_USER_PLAYLISTS = 'ADD_LIST_USER_PLAYLISTS';

export const changeOffset = (newValue) => ({
  type: CHANGE_OFFSET,
  value: newValue,
});

export const addListUserPlaylists = (newValue) => ({
  type: ADD_LIST_USER_PLAYLISTS,
  value: newValue,
});
