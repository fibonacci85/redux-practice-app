import axios from 'axios';

export const getFilms = () => dispatch => {
    dispatch({type:"FETCH_FILM_DATA"})
        axios.get('https://randomuser.me/api/')
        .then((res) => {
        // console.log(res)
        dispatch({type:"FETCH_FILM_SUCESS", payload:res.data})
        })
        .catch((error) => {
            dispatch({type:"FETCH_FILM_FAIL", payload: error})
        });
};
