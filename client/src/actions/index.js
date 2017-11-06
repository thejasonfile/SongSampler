import axios from 'axios';

export const fetchSongs = artistName => async dispatch => {
  if (!artistName) {
    dispatch({ type: 'NO_ARTIST', payload: 'Please select an artist'})
  } else {
    const songs = await axios.post('/api/spotify/artist', {artistName})

    dispatch({ type: 'FETCH_SONGS', payload: songs.data })
  }
};

export const setTerm = (term) => {
  return {
    type: 'SET_TERM',
    payload: term
  };
};
