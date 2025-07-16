import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import WatchList from './pages/WatchList'
import { WatchListProvider } from './context/WatchListContext'
function App() {

  return (
    <>
    <WatchListProvider>
      <BrowserRouter>
      {/* Navigation bar */}
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/watchlist" element={<WatchList />}></Route>
       
      </Routes>
      </BrowserRouter>
      </WatchListProvider>
    </>
  )
}

export default App
