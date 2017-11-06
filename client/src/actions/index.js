import axios from 'axios';

export const fetchSongs = artistName => async dispatch => {
  const songs = await axios.post('/api/spotify/artist', {artistName})
  console.log(songs);

  dispatch({ type: 'FETCH_SONGS', payload: songs.data })
};

export const setTerm = (term) => {
  return {
    type: 'SET_TERM',
    payload: term
  };
};
