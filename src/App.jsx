
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Quotes from './Components/Quotes'
import Personal from './Components/Personal'
import Trending from './Components/Trending'
import { useState } from 'react'





function App() {
  const [posts,setPosts]=useState([]);


  return (
    <>
      <div className="flex lg:grid-cols-3 h-fit bg-black text-white border-r border-color:white">
        <div className="lg:w-1/4 border-r border-slate-600">
          <Personal/>
        </div>
        <div className="lg:w-1/2 border-r border-slate-600">
          <BrowserRouter>
              <Routes>
                <Route exact path="/" element={<Quotes posts={posts} setPosts={setPosts}/>}/>
              </Routes>
          </BrowserRouter>
          </div>
        <div className="lg:w-1/4 border-r border-slate-600">
          <Trending posts={posts} setPosts={setPosts}/>
        </div>
      </div>
    </>
  )
}

export default App
