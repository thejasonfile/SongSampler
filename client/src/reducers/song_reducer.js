export default function(songs = [], action){
  switch(action.type){
    case 'FETCH_SONGS':
      return action.payload;
    case 'REMOVE_SONGS':
      return action.payload;
    default:
      return songs;
  }
}
