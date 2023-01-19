import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Button } from '@mui/material'
import { MAX_TILES } from '../../constants'
import { useNavigate } from 'react-router-dom'
import Loading from '../Loading/loading'

function GetAllPosts() {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState()
  const [matrix, setMatrix] = useState([])
  const [loading, setLoading] = useState(false)

  let navigate = useNavigate()

  useEffect(() => {
    if (posts.length > MAX_TILES) {
      divideIntoPages()
    }
  }, [posts])

  useEffect(() => {
    !error &&
      matrix.length > 0 &&
      navigate('/getallposts/1', { state: { matrix, error, loading } })
  }, [matrix])

  function divideIntoPages() {
    const totalPages = Math.ceil(posts.length / MAX_TILES)
    let left = posts.length
    let mat = []
    let mul = 1
    let a, b, t, c
    for (let i = 0; i < totalPages; i++) {
      a = i * MAX_TILES
      b = mul * MAX_TILES
      if (left >= b) {
        mat.push(posts.slice(a, b))
        mul += 1
      } else {
        t = left - a
        c = a + t
        mat.push(posts.slice(a, c))
      }
    }
    setMatrix(mat)
  }

  function getHandler() {
    getMultiple()
  }

  async function getMultiple() {
    setLoading(true)
    if (posts.length === 0) {
      try {
        const array = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
        )
        setPosts(array.data)
      } catch (error) {
        console.log(error)
        setError(error)
      }
    }
  }

  return (
    <div className="content">
      <h1>All Posts</h1>
      <Button variant="contained" onClick={getHandler}>
        GET
      </Button>
      {loading && <Loading />}
    </div>
  )
}

export default GetAllPosts
