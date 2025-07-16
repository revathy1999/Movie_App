import { useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { useState } from "react";
// const movies=[
//      {
//         poster:"https://image.tmdb.org/t/p/w500/7iMBZzVZtG0oBug4TfqDb9ZxAOa.jpg",
//         title:"The Gorge",
//         realase_date:"2025-02-13",
//     },
//     {
//         poster:"https://image.tmdb.org/t/p/w500/7iMBZzVZtG0oBug4TfqDb9ZxAOa.jpg",
//         title:"The Gorge",
//         realase_date:"2025-02-13",
//     },
//     {
//         poster:"https://image.tmdb.org/t/p/w500/7iMBZzVZtG0oBug4TfqDb9ZxAOa.jpg",
//         title:"The Gorge",
//         realase_date:"2025-02-13",
//     },
//     {
//         poster:"https://image.tmdb.org/t/p/w500/7iMBZzVZtG0oBug4TfqDb9ZxAOa.jpg",
//         title:"The Gorge",
//         realase_date:"2025-02-13",
//     },
//     {
//         poster:"https://image.tmdb.org/t/p/w500/7iMBZzVZtG0oBug4TfqDb9ZxAOa.jpg",
//         title:"The Gorge",
//         realase_date:"2025-02-13",
//     },
//     {
//         poster:"https://image.tmdb.org/t/p/w500/7iMBZzVZtG0oBug4TfqDb9ZxAOa.jpg",
//         title:"The Gorge",
//         realase_date:"2025-02-13",
//     },
//     {
//         poster:"https://image.tmdb.org/t/p/w500/7iMBZzVZtG0oBug4TfqDb9ZxAOa.jpg",
//         title:"The Gorge",
//         realase_date:"2025-02-13",
//     },
//     {
//         poster:"https://image.tmdb.org/t/p/w500/7iMBZzVZtG0oBug4TfqDb9ZxAOa.jpg",
//         title:"The Gorge",
//         realase_date:"2025-02-13",
//     },
//     {
//         poster:"https://image.tmdb.org/t/p/w500/7iMBZzVZtG0oBug4TfqDb9ZxAOa.jpg",
//         title:"The Gorge",
//         realase_date:"2025-02-13",
//     },
// ];
export default function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const[search,setSearch]=useState("")
  let url = `https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=cf18acdfa87cb0aa1e75a5959d43c26a`;
  useEffect(() => {
    if(search){
      url=`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/search/movie?query=${search}&api_key=cf18acdfa87cb0aa1e75a5959d43c26a`
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, [page, search]);

  return (
    <div className="p-4 mt-16">
      <input
        type="text"
        placeholder="Search Movies here..."
        className="border border-gray-700 px-4 py-1 w-3/4 md:w-1/2 rounded bg-opacity-60 fixed top-16 left-1/2 transform -translate-x-1/2 bg-transparent z-10"
      onChange={(e)=>{setSearch(e.target.value)}}
      />
      <div className="movies-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
      <div className="pagination-container flex justify-between mt-5">
        <button
          disabled={page == 1}
          className="p-2 bg-gray-800 text-white rounded"
          onClick={() => {
            setPage((prev) => prev - 1);
          }}
        >
          Previous
        </button>
        <button
          className="p-2 bg-gray-800 text-white rounded"
          onClick={() => {
            setPage((prev) => prev + 1);
            console.log("next clicked");
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
