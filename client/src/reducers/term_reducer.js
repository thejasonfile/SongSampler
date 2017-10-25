export default function(term = null, action){
  switch(action.type){
    case 'SET_TERM':
      return action.payload;
    default:
      return term;
  }
}
