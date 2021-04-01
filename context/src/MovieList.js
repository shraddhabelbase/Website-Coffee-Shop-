import React, {useState, useContext} from 'react';
import Movie from './movie.js';
import {MovieContext} from './MovieListContext'

const MovieList = () => {
    const [movies, setMovies] = useContext(MovieContext);  

    return(
        <div>
<h1>
{movies.map(movie=>(
    <Movie name ={movie.name} price={movie.price}/>
))}
</h1>

 
</div>

    );
};
export default MovieList;
