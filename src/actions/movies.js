import axios from 'axios';
import {API_BASE} from '../config/env';

export const FETCH_MOVIES_FULLFILLED = "FETCH_MOVIES_FULLFILLED";
export const FETCH_MOVIES_REJECTED = "FETCH_MOVIES_ERROR";
export const ADD_MOVIE = "ADD_MOVIE";
export const DELETE_MOVIE = "ADD_MOVIE";


export function fetchMovies(){
    return dispatch => {
       dispatch({
           type: "FETCH_MOVIES",
           payload:  axios.get(`${API_BASE}/movies`)
           .then(result => result.data.movies)
       })

    }
}

export function addMovies(movTitle,movCover){
    return dispatch => {
        axios.post(`${API_BASE}/movies`, { title: `${movTitle}`,cover: `${movCover}` })
        .then(result => result.data)
        .then(data => dispatch({
            type: ADD_MOVIE,
            payload:  data
        }))
        .catch(err => console.log(err))

    }
}

export function deleteMovies(movId){
    return dispatch => {
        axios.delete(`${API_BASE}/movies/${movId}`)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        .catch(err => console.log(err))
    }
}


