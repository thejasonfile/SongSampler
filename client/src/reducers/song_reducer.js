export default function(songs = [], action){
  switch(action.type){
    case 'FETCH_SONGS':
      console.log('fetch songs');
      return action.payload;
    case 'REMOVE_SONGS':
      console.log('remove songs');
      return action.payload;
    default:
      return songs;
  }
}
