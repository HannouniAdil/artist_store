import axios from 'axios';

const URL = 'http://localhost:3004';

export function fetchForArtist(keyword){
  const request = axios.get(`${URL}/artists?q=${keyword}`)
                  .then(response => response.data)
  return{
    type:'FETCH_FOR_ARTIST',
    payload: request
  }

}

export function artistListAll(){
 const request = axios.get(`${URL}/artists?_limit=6`)
                  .then(response => response.data)
  return{
    type:'GET_ARTISTS_ALL',
    payload: request
  }

}

export function fetchArtistDetailsById(id){
  const request = axios.get(`${URL}/artists?id=${id}`)
                   .then(response => response.data)
   return{
     type:'FIND_ARTIST_DETAILS',
     payload: request
   }
 
 }

 export function clearArtistData(){
   return{
     type:'CLEAR_ARTIST_DATA',
     payload: null
   }
 
 }