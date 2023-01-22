import React from "react";
import { useEffect,useState } from "react";
import SearchIcon from "./search.svg";
import Moviecard from "./Moviecard";
import "./App.css";
const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";
// const movie1={
// "Poster": "https://m.media-amazon.com/images/M/MV5BYWM0MDI1ZmItZTYzNi00ZWVlLTg5MTctNzllNjY2ZTI3NDhhXkEyXkFqcGdeQXVyNDk5MjA2MQ@@._V1_SX300.jpg",
// "Title": "Reign of Judges: Title of Liberty - Concept Short",
// "Type": "movie",
// "Year": "2018",
// "imdbID": "tt4275958"
// }
const App = () => {

  const [movies,setMovies]=useState([]); 
  const [searchTerm,setSearchTerm]=useState("");

  const searchMovies= async (title)=>{
        const response =await fetch(`${API_URL}&s={title}`);
        const data =await response.json();
        console.log(data.Search);
        console.log();
        setMovies(data.Search);

    }

  useEffect(()=>{
    searchMovies("Spiderman");

  },[]);


return (
  <div className="app">
    <h1> Movie Land</h1>
  <div className="search">
    <input placeholder="Search for Movies"
    value={searchTerm}
     onChange={(e)=>setSearchTerm(e.target.value)}/>
     
     <img src={SearchIcon} alt="search" onClick={() => {searchMovies(searchTerm)}} />

  </div>

  
   { 
   movies?.length > 0 
   ?(
      <div className="container">
          {movies.map((movie) => (
            <Moviecard movie={movie} />
          ))}
      </div>
      ):
      (<div className="empty"><h2>No movies found</h2></div>)
  } 


  </div>
);
}

export default App