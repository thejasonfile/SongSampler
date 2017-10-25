export default function(songs = [], action){
  switch(action.type){
    case 'FETCH_SONGS':
      return action.payload.tracks.map(song => {return song});
    default:
      return songs;
  }
}
