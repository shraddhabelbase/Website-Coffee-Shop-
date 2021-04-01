import React,{useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) =>{
  
        const [movies, setMovies] = useState([
            {
                name: 'Harry Potter',
                price: '$10',
                id: 234,
            },
            {   name: 'Pursuit of Happyness',
                price: '$70',
                id: 23,
            },
            {
                name: 'La La Land',
                price: '$80',
                id: 34,
            }
    
        ]);

        return(
            <MovieContext.Provider value={[movies,setMovies]}>
            {props.children}
            </MovieContext.Provider>
        )

}