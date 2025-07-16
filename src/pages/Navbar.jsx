import {Link} from "react-router-dom"
import { WatchListContext } from "../context/WatchListContext"
import { useContext } from "react"
export default function Navbar(){
    const {watchlist}=useContext(WatchListContext)
    return <>
    <div className=" bg-blue-950 flex justify-between p-3 fixed top-0 w-full z-10">
        <Link to="/" className="font-bold text-xl text-white">Movie App</Link>
        <Link to="/watchlist" className="text-white font-bold text-xl">WatchList({watchlist.length})</Link>
    </div>
    </>
}