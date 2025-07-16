import { useContext } from "react"
import {FaHeart, FaRegHeart} from "react-icons/fa"
import { WatchListContext } from "../context/WatchListContext";
export default function MovieCard({movie}){
    const {toggleWatchList, watchlist}=useContext(WatchListContext);
const inWatchlist= watchlist.some(m=>m.id == movie.id)
    return <div className="movie-card">
<div className="bg-gray-800 p-4 rounded-lg shadow-md text-white relative">
    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="w-full h-80 object-contain rounded-sm"/>
    <h3 className="font-bold text-lg mt-4">{movie.title}</h3>
    <p className="text-sm text-gray-500">{movie.realase_date}</p>
    <button className="absolute top-3 right-2 text-red-500 text-xl" onClick={()=>toggleWatchList(movie)}>
        {inWatchlist ? <FaHeart /> : <FaRegHeart />}
    </button>
</div>
    </div>
}