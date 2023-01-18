import React from 'react'
import CommentsCard from '../CommentsCard/CommentsCard'
import { Grid } from '@mui/material'

function CommentsModal({ comments }) {
  return (
    <div id="myModal" class="modal">
      <div class="modalContent">
        <span class="close">&times;</span>
        <h3>Comments to this post</h3>
        <Grid container rowSpacing={2}>
          {comments.map((obj) => {
            return (
              <Grid item xs={12} sm={8} md={6} lg={4} xl={3}>
                <CommentsCard data={obj} />
              </Grid>
            )
          })}
        </Grid>
      </div>
    </div>
  )
}

export default CommentsModal
