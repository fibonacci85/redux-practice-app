
import './App.css';
import axios from 'axios';
import {MovieList} from './components/MovieList';
import { useState } from 'react';

function App() {

//   const [user, setUser] = useState("")


//   axios.get('https://randomuser.me/api/')
//   .then((res) => {
//   console.log(res.data.results[0])
//     setUser(res.data.results[0])
// })

// console.log(user.gender)
  


  return (
    <div className="App">
      <h1>Studio Ghibli</h1>
      {/* <h2>{user.gender}</h2> */}
      <MovieList />
     
    </div>
  );
}

export default App;
