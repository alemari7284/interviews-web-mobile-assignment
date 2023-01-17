import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import PostCard from '../PostCard/postCard'
import { Grid } from '@mui/material'
import Loading from '../Loading/loading'
import { MAX_TILES } from '../../constants'
import { Pagination } from '@mui/material'

function GetAllPosts() {
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])
  const [error, setError] = useState()
  const [matrix, setMatrix] = useState([])

  useEffect(() => {
    getMultiple()
  }, [])

  useEffect(() => {
    if (posts.length > MAX_TILES) {
      divideIntoPages()
    }
  }, [posts])

  useEffect(() => {
    console.log(matrix)
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

  async function getMultiple() {
    setLoading(true)
    if (posts.length === 0) {
      try {
        const array = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
        )
        setPosts(array.data)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setError(error)
      }
    }
  }

  return (
    <div className="content">
      <h1>All Posts</h1>

      {loading && <Loading />}
      {!error ? (
        <Grid container rowSpacing={2}>
          {posts.length > 0 &&
            posts.map((post, i) => {
              return (
                <Grid key={i} item xs={12} sm={8} md={6} lg={4} xl={3}>
                  <PostCard post={posts[i]} />
                </Grid>
              )
            })}
        </Grid>
      ) : (
        <h1>No results</h1>
      )}
      <div>
        <Pagination count={10} color="primary" />
      </div>
    </div>
  )
}

export default GetAllPosts
