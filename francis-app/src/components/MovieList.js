import {useEffect} from 'react'
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
        {/* <h3>{props.results[0].gender}</h3> */}
        </>
    )
}

const mapStateToProps = state => {
    return{
    user: state.user,
    isFetching: state.isFetching,
    error: state.error
    }
}

export default connect(mapStateToProps,{getFilms})(MovieList);