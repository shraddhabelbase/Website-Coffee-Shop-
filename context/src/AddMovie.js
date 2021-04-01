import React, {useState, useContext} from 'react'
import {MovieContext} from './MovieListContext'

export const AddMovie = () =>{
    const[name,setName] = useState('');
    const[price,setPrice] = useState('');
    const[movies, setMovies] = useContext(MovieContext);

    const UpdateName = (e) =>{
        setName(e.target.value);
    };
    const UpdatePrice = (e) =>{
        setPrice(e.target.value);
    };
    const AddMovie = (e) =>{
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies, {name: name, price: price}])
    };
    return (
        <form onSubmit={AddMovie}>
        <input type ="text" name="name" value={name} onChange={UpdateName}/>
        <input type ="text" name="price" value={price} onChange={UpdatePrice}/>
        <button>Submit</button>
        </form>
    )
}

export default AddMovie;