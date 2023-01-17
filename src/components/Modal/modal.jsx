import React from 'react'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import axios from 'axios'

function Modal({
  post,
  newTitle,
  setNewTitle,
  newBody,
  setNewBody,
  response,
  setResponse,
}) {
  const handleSubmit = async () => {
    const newObject = {
      userId: post.userId,
      id: post.id,
      title: newTitle,
      body: newBody,
    }

    try {
      const result = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${post.id}`,
        newObject,
      )
      console.log(result)
      setResponse(result)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div id="myModal" class="modal">
      <div class="modalContent">
        <span class="close">&times;</span>
        {post && (
          <TextField
            fullWidth
            defaultValue={post.title}
            type={'text'}
            label="Enter title"
            variant="outlined"
            className="modalTitle"
            onChange={(e) => setNewTitle(e.currentTarget.value)}
          >
            {post.title}
          </TextField>
        )}
        {post && (
          <TextField
            fullWidth
            defaultValue={post.body}
            type={'text'}
            label="Enter body"
            variant="outlined"
            className="modalBody"
            onChange={(e) => setNewBody(e.currentTarget.value)}
          >
            {post.body}
          </TextField>
        )}
        <Button variant="contained" onClick={handleSubmit}>
          SUBMIT
        </Button>
        {response && <h4>Changes submitted successfully</h4>}
      </div>
    </div>
  )
}

export default Modal
