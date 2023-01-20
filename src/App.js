import React from 'react'
import Home from './components/Home/home'
import GetAllPosts from './components/Posts/getAllPosts'
import GetSinglePost from './components/SinglePost/getSinglePost'
import Delete from './components/SinglePost/delete'
import { Routes, Route } from 'react-router-dom'
import withSidebar from './components/HOC/WithSidebar'
import ResultPage from './components/Posts/ResultPage'
import CreateNewPost from './components/CreateNewPost/createNewPost'
function App() {
  const HomeWS = withSidebar(Home)
  const GetAllPostsWS = withSidebar(GetAllPosts)
  const GetSinglePostWS = withSidebar(GetSinglePost)
  const DeleteWS = withSidebar(Delete)
  const ResultPageWS = withSidebar(ResultPage)
  const CreateNewPostWS = withSidebar(CreateNewPost)

  return (
    <Routes>
      <Route path="/" element={<HomeWS />} />
      <Route path="/getallposts" element={<GetAllPostsWS />} />
      <Route path="/getallposts/:pageNumber" element={<ResultPageWS />} />
      <Route path="/getsinglepost" element={<GetSinglePostWS />} />
      <Route path="/createnewpost" element={<CreateNewPostWS />} />
      <Route path="/deletepost" element={<DeleteWS />} />
    </Routes>
  )
}

export default App
