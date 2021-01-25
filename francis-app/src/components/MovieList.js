import {useEffect} from 'react';
import {connect} from 'react-redux';
import {getFilms} from '../actions/actions'

export function MovieList(props){
    console.log(props)

  useEffect(() => {
      getFilms()
  },[]);

    return(
        <>
        <h2>Movie List:</h2>
        {/* {props.films.map(item => (
        <h3>{item.title}</h3>    
        ))}; */}
        </>
    )
}

const mapStateToProps = (state) => {
    // console.log(state)
    return{
    films: state.films,
    isFetching: state.isFetching,
    error: state.error
    }

}

export default connect(mapStateToProps,{getFilms})(MovieList);