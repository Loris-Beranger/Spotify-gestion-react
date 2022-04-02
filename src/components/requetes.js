import { func } from 'prop-types';

const axios = require('axios').default;

export function loadPlaylists(token, offset) {
    return axios.get('https://api.spotify.com/v1/me/playlists?offset=' + offset, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
}


