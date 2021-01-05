
export default function(state={}, action){

  switch(action.type){
    case 'GET_ARTISTS_ALL':
      return {...state, artistList:action.payload}
    case 'FETCH_FOR_ARTIST':
      return {...state, artistList:action.payload}  
    default:
      return state;
  }
}