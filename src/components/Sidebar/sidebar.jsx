import React from 'react'
import { useNavigate } from 'react-router-dom'

function Sidebar({ getMultiple, getOne, getOneAndUpdate }) {
  let navigate = useNavigate()

  return (
    <div id="sidebar" className="sidebar">
      <button
        className="btn"
        id="button1"
        onClick={() => {
          navigate('/')
        }}
      >
        Home
      </button>
      <button
        className="btn"
        id="button2"
        onClick={() => {
          navigate('/createnewpost')
        }}
      >
        Create new post
      </button>
      <button
        className="btn"
        id="button3"
        onClick={() => {
          navigate('/getallposts')
        }}
      >
        Get multiple posts
      </button>
      <button
        className="btn"
        id="button4"
        onClick={() => navigate('/getsinglepost')}
      >
        Get/Update one post
      </button>
      <button
        className="btn"
        id="button5"
        onClick={() => navigate('/deletepost')}
      >
        Delete one post
      </button>
    </div>
  )
}

export default Sidebar
