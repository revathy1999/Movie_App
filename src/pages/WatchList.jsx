import { useContext, useState } from "react";
import GenreFilter from "../components/GenreFilter";
import { WatchListContext } from "../context/WatchListContext";
import MovieCard from "../components/MovieCard";
export default function WatchList() {
  const [search, setsearch] = useState("");
  const [selectedGenre,setSelectedGenre]=useState("")
  const { watchlist,genres} = useContext(WatchListContext);
  const filtersearch = watchlist.filter((movie) => 
    movie.title.toLowerCase().includes(search.toLowerCase())
  ).filter((movie)=>{
    return !Number(selectedGenre) || movie.genre_ids.includes(Number(selectedGenre))
  });
  return (
    <div>
      <input
        type="text"
        placeholder="Search Movies here..."
        className="border border-gray-700 px-4 py-1 w-3/4 md:w-1/2 rounded bg-opacity-60 fixed top-16 left-1/2 transform -translate-x-1/2 bg-transparent z-10"
        onChange={(e) => {
          setsearch(e.target.value);
        }}
      />
      <div className="mt-28 flex justify-center items-center">
        <GenreFilter genres={genres} setSelectedGenre={setSelectedGenre}/>
      </div>
      <div className="movies-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
        {filtersearch.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}
