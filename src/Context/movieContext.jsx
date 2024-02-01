import { createContext, useState, useContext,useEffect } from 'react';
import { API_URL } from "../API";

// Create our theme context using createContext()
export const MovieContext = createContext();

// Create a custom hook that allows easy access to our MovieContext values
export const useMovie = () => useContext(MovieContext);

// Creating our theme provider. Accepts an argument of "props", here we plucking off the "children" object.
export default function MovieProvider({ children }) {
  // Creating our state
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Method to update our state
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  const useInitalMovieLoad = ()=>{
    useEffect(() => {
        searchMovies("Spiderman");
      }, []);
  }

  // The provider component will wrap all other components inside of it that need access to our global state
  return (
    // States and method for updating states are passed down to all children components
    <MovieContext.Provider value={{ movies,setMovies,searchTerm,setSearchTerm,useInitalMovieLoad,searchMovies }}>
      {children}
    </MovieContext.Provider>
  );
}
