import React, { useEffect, useState } from 'react'
import Movies from './Movies'
import Loader from './Loader'
import Search from './Search'

export default function Main() {
 
  const [movies , setMovies] = useState([]);
  const [loading, setLoading] = useState(false);


  const searchMovies = (str, type='all') =>{
    setLoading(true)
    fetch(`https://www.omdbapi.com/?apikey=af97bad&s=${str}${type !== 'all' ?  `&type=${type}` : ''}`)
    .then((response) => response.json())
    .then((data) =>{ setMovies(data.Search);
                     setLoading(false);
        }); 
  };

  useEffect(()=>{
     setLoading(true)
    fetch("https://www.omdbapi.com/?apikey=af97bad&s=panda")
    .then((response)=> response.json())
    .then((data)=>{ setMovies(data.Search);
                    setLoading(false);
        });
  }, []);

 

    return (
      <div className='container content'>
          <Search searchMovies = {searchMovies} />

        {loading ? (<Loader/>) : (<Movies movies = {movies} />) }
         
      </div>
    );
  
}

