import './App.css';
import Movie from './movie';
import MovieList from './MovieList.js';
import { MovieProvider } from './MovieListContext';
import Nav from './nav.js';
import {AddMovie} from './AddMovie'


function App() {
  return (
    <MovieProvider>
    <div className="App">
    <Nav/>
     <MovieList/> 
     <Movie/>
     <MovieProvider/>
     <AddMovie/>
    </div>
    </MovieProvider>
  );
}

export default App;
