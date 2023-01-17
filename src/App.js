import React from 'react'
import Home from './components/Home/home'
import GetAllPosts from './components/Posts/getAllPosts'
import GetSinglePost from './components/SinglePost/getSinglePost'
import { Routes, Route } from 'react-router-dom'
import withSidebar from './components/HOC/WithSidebar'

function App() {
  const HomeWS = withSidebar(Home)
  const GetAllPostsWS = withSidebar(GetAllPosts)
  const GetSinglePostWS = withSidebar(GetSinglePost)
  return (
    <Routes>
      <Route path="/" element={<HomeWS />} />
      <Route path="/getallposts" element={<GetAllPostsWS />} />
      <Route path="/getsinglepost" element={<GetSinglePostWS />} />
    </Routes>
  )
}

export default App
