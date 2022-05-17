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

export function getCurrentUser(token) {
  return axios.get('https://api.spotify.com/v1/me', {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  })
}

export function addTrackToPlaylists(token) {
  return axios.post("https://api.spotify.com/v1/playlists/3Vvh6QjcWXXVzBnJnD0NkL/tracks?uris=spotify:track:5fwSHlTEWpluwOM0Sxnh5k", {
    headers: {
      'Authorization': 'Bearer BQCGonszeZa2fiIW5-l4TKb_KaJqaG7Q75jvuQ2JAzMyErAg2U_G28TX3yHEhAnmon6ju8qcs416NOlGeCgG9OdjYQvN8CEjsEIEmH-X15k8xs3_CVOwzfE6ywSVIkWCk_OBHJKTYMWJT6B8Ol0-ejCX9tkBGroWuJnmiorWPQ5mLhtdCagt_IGWDIQCINUfG548q3A8_Tp2T3SPV0BbRhdocZT5QM3ZuDYv5zjLu5SA4j2cDglB9kGcf00BFxtSODRi3BBJUBQ2IRaumZk8l24'
    }
  })
}



