import React from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { Pagination } from '@mui/material'
import { useState, useEffect } from 'react'
import PostCard from '../PostCard/postCard'
import { Grid } from '@mui/material'

function ResultPage() {
  let { pageNumber } = useParams()
  let location = useLocation()
  let navigate = useNavigate()
  const [page, setPage] = useState(pageNumber)
  const { matrix, error, posts } = location.state

  useEffect(() => {
    navigate(`/getallposts/${page}`, { state: { matrix } })
  }, [page])

  const handleChange = (event, value) => {
    setPage(value)
  }

  return (
    <div className="content">
      <h1>All Posts</h1>

      {!error ? (
        <Grid container rowSpacing={2}>
          {matrix.length > 0 &&
            matrix[pageNumber - 1].map((post, i) => {
              return (
                <Grid item xs={12} sm={8} md={6} lg={4} xl={3}>
                  <PostCard post={post} />
                </Grid>
              )
            })}
        </Grid>
      ) : (
        <h1>No results</h1>
      )}
      <div className="pagination">
        <Pagination
          count={matrix.length}
          page={page}
          onChange={handleChange}
          color="primary"
        />
      </div>
    </div>
  )
}

export default ResultPage
