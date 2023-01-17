import React from 'react'
import SingleSearchbar from '../SingleSearchbar/singleSearchbar'
import { useState } from 'react'
import Loading from '../Loading/loading'
import PostCard from '../PostCard/postCard'
import { Button } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

function Delete() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const [post, setPost] = useState()

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
    } catch (error) {
      setError(error.response)
      setLoading(false)
    }
  }

  return (
    <div className="content">
      <h1>Delete one post</h1>
      <SingleSearchbar getOne={getOne} />
      {loading && <Loading />}
      {post && post.title && <PostCard post={post} />}
      {error && <h1>No results</h1>}
      {post && post.title && (
        <Button onClick={deleteOne} className="myButton">
          <FontAwesomeIcon icon={faTrashCan} />
        </Button>
      )}
      {post?.message && <h3>{post.message}</h3>}
    </div>
  )
}

export default Delete
