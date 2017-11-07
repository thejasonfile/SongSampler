export default function(user = null, action){
  switch(action.type){
    case 'GET_CURRENT_USER':
      return action.payload;
    default:
      return user;
  }
}
