import axios from 'axios';
import {API_BASE} from '../config/env';

export const FETCH_MOVIES = "FETCH_MOVIES";
export const FETCH_MOVIES_ERROR = "FETCH_MOVIES_ERROR";
export const ADD_MOVIE = "ADD_MOVIE";
export const DELETE_MOVIE = "ADD_MOVIE";


export function fetchMovies(){
    return dispatch => {
        axios.get(`${API_BASE}/movies`)
        .then(result => result.data)
        .then(data => dispatch({
            type: FETCH_MOVIES,
            payload: data.movies
        }))
        .catch(error => dispatch({
            type: FETCH_MOVIES_ERROR,
            payload: error
        }))
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


