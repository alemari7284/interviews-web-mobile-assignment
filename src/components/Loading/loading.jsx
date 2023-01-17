import React from 'react'
import { CircularProgress } from '@mui/material'

function Loading() {
  return (
    <div className="loading">
      <CircularProgress style={{ textAlign: 'center' }} />
    </div>
  )
}

export default Loading
