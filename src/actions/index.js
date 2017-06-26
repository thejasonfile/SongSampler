import axios from 'axios';
import keys from './keys';

export const fetchSongs = (artistName) => {
  const clientId = keys.client_id;
  const clientSecret = keys.client_secret;
  const artistNameUrl = `https://api.spotify.com/v1/search?q=${artistName}&type=artist`;

  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': 'Basic ' + (new Buffer(clientId + ':' + clientSecret).toString('base64'))
    },
    form: {
      grant_type: 'client_credentials'
    },
    json: true
  };

  axios.post(authOptions, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      console.log('it worked', body);
    }
  });

  // const nameRequest = axios.get(artistNameUrl);
  //
  // return (dispatch) => {
  //   nameRequest.then(({ data }) => {
  //     const artistId = data.artists.items[0].id;
  //     const artistIdUrl = `https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=ES`;
  //     const IdRequest = axios.get(artistIdUrl);
  //
  //     IdRequest.then(({ data }) => {
  //       dispatch({
  //         type: 'FETCH_SONGS',
  //         payload: data
  //       });
  //     });
  //   });
  // };
};

export const setTerm = (term) => {
  return {
    type: 'SET_TERM',
    payload: term
  };
};
