import React from 'react'
import Home from './components/Home/home'
import GetAllPosts from './components/Posts/getAllPosts'
import GetSinglePost from './components/SinglePost/getSinglePost'
import Delete from './components/SinglePost/delete'
import { Routes, Route } from 'react-router-dom'
import withSidebar from './components/HOC/WithSidebar'

function App() {
  const HomeWS = withSidebar(Home)
  const GetAllPostsWS = withSidebar(GetAllPosts)
  const GetSinglePostWS = withSidebar(GetSinglePost)
  const DeleteWS = withSidebar(Delete)
  return (
    <Routes>
      <Route path="/" element={<HomeWS />} />
      <Route path="/getallposts" element={<GetAllPostsWS />} />
      <Route path="/getsinglepost" element={<GetSinglePostWS />} />
      <Route path="/deletepost" element={<DeleteWS />} />
    </Routes>
  )
}

export default App
