import React from 'react'
import SingleSearchbar from '../SingleSearchbar/singleSearchbar'
import { useState, useEffect } from 'react'
import Loading from '../Loading/loading'
import PostCard from '../PostCard/postCard'
import { Button } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import DeleteModal from '../Modal/DeleteModal'
import axios from 'axios'

function Delete() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const [post, setPost] = useState()
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (showModal) openModal()
  }, [showModal])

  async function getOne(id) {
    setLoading(true)
    setError(false)
    try {
      const post = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
      )
      if (post.data) {
        setLoading(false)
        setPost(post.data)
      }
    } catch (error) {
      setError(error.response.status)
      setLoading(false)
    }
  }

  async function deleteOne() {
    setLoading(true)
    setError(false)
    try {
      const del = await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${post.id}`,
      )
      console.log(del)
      setLoading(false)
      setPost({ message: `post #${post.id} succesfully deleted` })
      setShowModal(false)
    } catch (error) {
      setError(error.response)
      setLoading(false)
    }
  }

  function openModal() {
    var modal = document.getElementById('delModal')
    var span = document.getElementsByClassName('close')[0]
    modal.style.display = 'block'
    span.onclick = function () {
      // modal.style.display = 'none'
      setShowModal(false)
    }
    window.onclick = function (event) {
      if (event.target == modal) {
        // modal.style.display = 'none'
        setShowModal(false)
      }
    }
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        setShowModal(false)
      }
    })
  }

  return (
    <div className="content">
      <h1>Delete one post</h1>
      <SingleSearchbar getOne={getOne} setError={setError} />
      {showModal && (
        <DeleteModal
          delOne={deleteOne}
          setShowModal={setShowModal}
          loading={loading}
          setLoading={setLoading}
        />
      )}
      {post && post.title && <PostCard post={post} />}
      {error && <h1>No results - {error.message}</h1>}
      {post && post.title && (
        <Button
          onClick={() => {
            setShowModal(true)
          }}
          className="myButton"
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </Button>
      )}
      {post?.message && <h3>{post.message}</h3>}
    </div>
  )
}

export default Delete
