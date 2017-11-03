import axios from 'axios';

export const fetchSongs = (artistName) => {
  const artistNameUrl = `https://api.spotify.com/v1/search?q=${artistName}&type=artist`;
};

export const setTerm = (term) => {
  return {
    type: 'SET_TERM',
    payload: term
  };
};
