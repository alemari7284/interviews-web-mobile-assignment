import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import PostCard from '../PostCard/postCard'
import { Grid } from '@mui/material'
import Loading from '../Loading/loading'

function GetAllPosts() {
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])
  const [error, setError] = useState()

  useEffect(() => {
    getMultiple()
  }, [])

  async function getMultiple() {
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
        setError(error)
      }
    }
  }

  return (
    <div className="content">
      {loading && <Loading />}
      {!error ? (
        <Grid container rowSpacing={2}>
          {posts.length > 0 &&
            posts.map((post) => {
              return (
                <Grid item xs={12} sm={8} md={6} lg={4} xl={3}>
                  <PostCard
                    userId={post.userId}
                    id={post.id}
                    title={post.title}
                    body={post.body}
                  />
                </Grid>
              )
            })}
        </Grid>
      ) : (
        <h1>No results</h1>
      )}
    </div>
  )
}

export default GetAllPosts
