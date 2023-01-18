import React from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { Pagination } from '@mui/material'
import { useState, useEffect } from 'react'
import PostCard from '../PostCard/postCard'
import { Grid } from '@mui/material'
import CommentsModal from '../Modal/CommentsModal'
import axios from 'axios'

function ResultPage() {
  let { pageNumber } = useParams()
  let location = useLocation()
  let navigate = useNavigate()
  const [page, setPage] = useState(pageNumber)
  const [comments, setComments] = useState()
  const { matrix, error } = location.state

  useEffect(() => {
    console.log(page)
    navigate(`/getallposts/${page}`, { state: { matrix } })
  }, [page])

  useEffect(() => {
    console.log(comments)
  }, [comments])

  const handleChange = (event, value) => {
    setPage(value)
  }

  const getComments = async (id) => {
    try {
      const call = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id + 1}/comments`,
      )
      console.log(call)
      setComments(call.data)
      openModal()
    } catch (error) {
      console.log(error)
    }
  }

  const openModal = () => {
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

  return (
    <div className="content">
      <h1>All Posts</h1>
      {/*FIX: DA AGGIUSTARE IL FATTO CHE BISOGNA FARE DOPPIO CLICK LA PRIMA VOLTA */}
      {comments && <CommentsModal comments={comments} />}
      {!error ? (
        <Grid container rowSpacing={2}>
          {matrix.length > 0 &&
            matrix[pageNumber - 1].map((post, i) => {
              return (
                <Grid key={i} item xs={12} sm={8} md={6} lg={4} xl={3}>
                  <div onClick={() => getComments(i)}>
                    <PostCard post={post} />
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
