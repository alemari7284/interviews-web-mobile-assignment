import React from 'react'
import { useState } from 'react'
import SingleSearchbar from '../SingleSearchbar/singleSearchbar'

function Sidebar({ getMultiple, getOne }) {
  const [findOne, setFindOne] = useState(false)

  return (
    <div id="sidebar">
      <button id="button1" onClick={getMultiple}>
        Get multiple posts
      </button>
      <button
        id="button2"
        onClick={() => {
          setFindOne(!findOne)
        }}
      >
        Get one post
      </button>
      {findOne && <SingleSearchbar getOne={getOne} />}
      <button id="button3">Delete one post</button>
    </div>
  )
}

export default Sidebar
