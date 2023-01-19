import React from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { Button, Pagination } from '@mui/material'
import { useState, useEffect, useRef } from 'react'
import PostCard from '../PostCard/postCard'
import { Grid } from '@mui/material'
import axios from 'axios'
import CommentsCard from '../CommentsCard/CommentsCard'
import Loading from '../Loading/loading'

function ResultPage() {
  let { pageNumber } = useParams()
  let location = useLocation()
  let navigate = useNavigate()
  const [page, setPage] = useState(pageNumber)
  const [comments, setComments] = useState()
  const [showComments, setShowComments] = useState(true)
  const [loading, setLoading] = useState(false)
  const [clicked, setClicked] = useState()
  const [disabled, setDisabled] = useState(false)

  const { matrix, error } = location.state
  const refs = useRef([])
  useEffect(() => {
    console.log(refs)
    if (clicked) {
      console.log('clicked', clicked)
      for (let el of refs.current) {
        if (el !== clicked) {
          console.log('el', el)
        }
      }
    }
  }, [clicked])

  useEffect(() => {
    setLoading(false)
    setShowComments(!showComments)
  }, [comments])

  useEffect(() => {
    console.log(page)
    navigate(`/getallposts/${page}`, { state: { matrix } })
  }, [page])

  const handleChange = (event, value) => {
    setPage(value)
  }

  async function fetchComments(id) {
    id += 1
    setLoading(true)
    try {
      const call = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
      )
      console.log('call', call)
      setComments(call.data)
    } catch (error) {
      console.log(error)
    }
  }

  /* FIX: Quando vengono mostrati i commenti di un post, e poi si clicca su un altro
     Button di un altro post, il  primo click non sortisce effetti
  */
  function handleClick(i) {
    if (!showComments) {
      setClicked(refs.current[i])
      fetchComments(i)
    } else {
      setShowComments(!showComments)
    }
  }

  return (
    <div className="content">
      <h1>All Posts</h1>
      {!error ? (
        <Grid container rowSpacing={2}>
          {matrix.length > 0 &&
            matrix[pageNumber - 1].map((post, i) => {
              let increasedId = i + 1
              return (
                <Grid key={i} item xs={12} sm={8} md={6} lg={4} xl={3}>
                  <div className="pcContainer">
                    <PostCard post={post} />
                    <Button
                      variant="contained"
                      ref={(el) => (refs.current[i] = el)}
                      disabled={
                        clicked && showComments && refs.current[i] !== clicked
                      }
                      onClick={() => {
                        handleClick(i)
                      }}
                    >
                      Comments
                    </Button>
                    {loading && clicked == refs.current[i] && <Loading />}
                    {comments &&
                      comments[0]?.postId === increasedId &&
                      showComments && <CommentsCard data={comments} />}
                  </div>
                </Grid>
              )
            })}
        </Grid>
      ) : (
        <h1>No results</h1>
      )}
      <div className="pagination">
        {/* FIX: DA AGGIUSTARE IL CLICK SULLA FRECCIA DX QUANDO CI SI 
        TROVA NELLA PRIMA PAGINA DEI RISULTATI. L'APP CRASHA */}
        <Pagination
          count={matrix.length}
          defaultPage={1}
          page={page}
          onChange={handleChange}
          color="primary"
        />
      </div>
    </div>
  )
}

export default ResultPage
