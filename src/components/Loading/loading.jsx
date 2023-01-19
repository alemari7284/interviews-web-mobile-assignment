import React from 'react'
import { CircularProgress } from '@mui/material'

function Loading({ index }) {
  return (
    <div className="loading">
      <CircularProgress style={{ textAlign: 'center' }} />
    </div>
  )
}

export default Loading
