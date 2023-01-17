import React from 'react'
import { useState } from 'react'
import SingleSearchbar from '../SingleSearchbar/singleSearchbar'
import { useNavigate } from 'react-router-dom'

function Sidebar({ getMultiple, getOne, getOneAndUpdate }) {
  const [findOne, setFindOne] = useState(false)
  const [showFindUpdate, setShowFindUpdate] = useState(false)
  const [deleteOne, setDeleteOne] = useState(false)
  const [createOne, setCreateOne] = useState(false)
  let navigate = useNavigate()

  return (
    <div id="sidebar">
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
        id="button1"
        onClick={() => {
          navigate('/getallposts')
        }}
      >
        Get multiple posts
      </button>
      <button
        className="btn"
        id="button2"
        onClick={() => navigate('/getsinglepost')}
      >
        Get/Update one post
      </button>
      <button
        className="btn"
        id="button4"
        onClick={() => navigate('/deletepost')}
      >
        Delete one post
      </button>
    </div>
  )
}

export default Sidebar
