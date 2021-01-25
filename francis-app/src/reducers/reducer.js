

const initialState = {
    isFetching: false,
    film:{},
    error:""
}

export function reducer(state = initialState,action){
    switch(action.type){
        case("FETCH_FILM_DATA"):
            return({
                ...state,
                isFetching: true
            });
        case("FETCH_FILM_SUCCESS"):
            return({
                ...state,
                isFetching:false,
                film:action.payload
            });
        case("FETCH_FILM_FAIL"):
            return({
                ...state,
                error:action.payload,
                isFetching:false
            })    
        default:
            return state;
    };
};