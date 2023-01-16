import React from 'react'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import Result from './result/result'
import Sidebar from './Sidebar/sidebar'
import { CircularProgress } from '@mui/material'

export default function Posts() {
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const [showList, setShowList] = useState(false)
  const [showPost, setShowPost] = useState(false)

  const postId = useRef()

  async function getMultiple() {
    setShowList(true)
    setShowPost(false)
    setLoading(true)
    if (posts.length === 0) {
      console.log('sto qua')
      try {
        const array = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
        )
        console.log(array)
        setPosts(array.data)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    } else {
      console.log('sto qui')
    }
  }

  async function getOne(id) {
    setLoading(true)
    setError(false)
    setShowList(false)
    setShowPost(true)

    try {
      const post = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
      )
      console.log(post)
      if (post.data) {
        setPost(post.data)
        setLoading(false)
      }
    } catch (error) {
      setError(error.response.status)
      setLoading(false)
      setShowPost(false)
    }
  }

  return (
    <div className="container">
      <Sidebar getMultiple={getMultiple} getOne={getOne} />
      <div className="content">
        {loading && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress style={{ textAlign: 'center' }} />
          </div>
        )}
        {!loading && posts.length > 0 && showList && (
          <Result type="posts" data={posts} />
        )}
        {!loading && post && showPost && <Result type="post" data={post} />}
        {!loading && error && error == 404 && (
          <h1 style={{ textAlign: 'center' }}>Nothing was found</h1>
        )}
      </div>
    </div>
  )
}
