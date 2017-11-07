import axios from 'axios';

export const getCurrentUser = () => async dispatch => {
  const user = await axios.get('/auth/current_user');

  dispatch({ type: 'GET_CURRENT_USER', payload: user.data })
}

export const fetchSongs = artistName => async dispatch => {
  const songs = await axios.post('/api/spotify/artist', {artistName})

  dispatch({ type: 'FETCH_SONGS', payload: songs.data })
};

export const removeSongs = () => {
  return {
    type: 'REMOVE_SONGS',
    payload: []
  }
}

export const setTerm = term => {
  return {
    type: 'SET_TERM',
    payload: term
  };
};

export const setArtistValue = value => {
  return {
    type: 'SET_ARTIST_VALUE',
    payload: value
  }
}
