import React,{useContext} from 'react';
import {MovieContext} from './MovieListContext'


const Nav = () =>{
    const [movies, setMovies] = useContext(MovieContext);  

return(
    <div className="nav">
    <p>List of movies = {movies.length}</p></div>
)
}

export default Nav;
