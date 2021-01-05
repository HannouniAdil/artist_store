
export default function(state={}, action){

  switch(action.type){
    case 'GET_ARTISTS_ALL':
      return {...state, artistList:action.payload}
    case 'FETCH_FOR_ARTIST':
      return {...state, artistList:action.payload} 
    case 'FIND_ARTIST_DETAILS':
      return {...state, artistDetails:action.payload} 
    case 'CLEAR_ARTIST_DATA':
      return {...state, artistDetails:action.payload} 
    default:
      return state;
  }
}