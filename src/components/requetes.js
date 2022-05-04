const axios = require('axios').default;

export function loadPlaylists(token, offset) {
    return axios.get('https://api.spotify.com/v1/me/playlists?offset=' + offset, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
}

export function loadTracks(token, playlistId, offset) {
  return axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks?offset=` + offset, {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  })
}


