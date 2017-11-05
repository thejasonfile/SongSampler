import axios from 'axios';

export const fetchSongs = artistName => async dispatch => {
  const artistNameUrl = `https://api.spotify.com/v1/search?q=${artistName}&type=artist`;
  const res =  await axios.get(artistNameUrl)

  dispatch({ type: 'FETCH_SONG', payload: res.data })
};

export const setTerm = (term) => {
  return {
    type: 'SET_TERM',
    payload: term
  };
};
