import { useState } from "react"

export default function GenreFilter({genres, setSelectedGenre}){

    return <>
<select className="p-2 bg-gray-800 bg-opacity-60 backdrop-blur-md text-white rounded" onChange={(e)=>{setSelectedGenre(e.target.value)}}>
    <option value="All">All Genres</option>
    {genres.map((genre)=>{
return (
    
    <option key={genre} value={genre.id}>{genre.name}</option>
)
    })}
</select>
    </>
}
