import axios from 'axios';

export const fetchSongs = (artistName) => {
  const artistNameUrl = `https://api.spotify.com/v1/search?q=${artistName}&type=artist`;
  const nameRequest = axios.get(artistNameUrl);

  return (dispatch) => {
    nameRequest.then(({ data }) => {
      const artistId = data.artists.items[0].id;
      const artistIdUrl = `https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=ES`;
      const IdRequest = axios.get(artistIdUrl);

      IdRequest.then(({ data }) => {
        dispatch({
          type: 'FETCH_SONGS',
          payload: data
        });
      });
    });
  };
};

export const setTerm = (term) => {
  return {
    type: 'SET_TERM',
    payload: term
  };
};
