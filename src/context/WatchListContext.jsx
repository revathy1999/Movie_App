import { createContext, useState, useEffect } from "react";
export const WatchListContext=createContext();
export const WatchListProvider=({children})=>{
const[genres,setGenres]=useState([])
     let url = `https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/genre/movie/list?api_key=cf18acdfa87cb0aa1e75a5959d43c26a`;
      useEffect(() => {
        
        fetch(url)
          .then((res) => res.json())
          .then((data) => setGenres(data.genres || []));
      }, []);
    
    const[watchlist,setWatchlist]=useState([])
    const toggleWatchList=(movie)=>{
const index=watchlist.findIndex((m)=>m.id === movie.id)
if(index === -1){
    setWatchlist([...watchlist,movie])
}
else{
    setWatchlist([...watchlist.slice(0,index),
        ...watchlist.slice(index+1)
    ])
}
    }
    
    return (
        <WatchListContext.Provider value={{watchlist, toggleWatchList, genres}}>
{children}
        </WatchListContext.Provider>
    )
}