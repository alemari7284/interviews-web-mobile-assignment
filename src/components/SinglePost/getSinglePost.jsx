import React from 'react'
import { useState, useEffect } from 'react'
import PostCard from '../PostCard/postCard'
import Loading from '../Loading/loading'
import axios from 'axios'
import SingleSearchbar from '../SingleSearchbar/singleSearchbar'
import { Button } from '@mui/material'
import Modal from '../Modal/modal'

function GetSinglePost() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const [post, setPost] = useState()
  const [newTitle, setNewTitle] = useState()
  const [newBody, setNewBody] = useState()
  const [response, setResponse] = useState()

  function openModal() {
    var modal = document.getElementById('myModal')
    var span = document.getElementsByClassName('close')[0]
    modal.style.display = 'block'
    span.onclick = function () {
      modal.style.display = 'none'
    }
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = 'none'
      }
    }
  }

  async function getOne(id) {
    setLoading(true)
    setError(false)
    try {
      const post = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
      )
      console.log(post)
      if (post.data) {
        setLoading(false)
        setPost(post.data)
      }
    } catch (error) {
      setError(error.response.status)
      setLoading(false)
    }
  }
  return (
    <div className="content">
      <h1>Get/Update one post</h1>
      <Modal
        post={post}
        setPost={setPost}
        newTitle={newTitle}
        setNewTitle={setNewTitle}
        newBody={newBody}
        setNewBody={setNewBody}
        response={response}
        setResponse={setResponse}
      />
      <SingleSearchbar getOne={getOne} />
      {loading && <Loading />}
      {!error && post && (
        <div className="pcEditor">
          <PostCard post={post} />
          <Button id="myBtn" onClick={openModal}>
            EDIT
          </Button>
        </div>
      )}
      {error && <h1>No results</h1>}
    </div>
  )
}

export default GetSinglePost
