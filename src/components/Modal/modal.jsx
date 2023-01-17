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
    // DA RIVEDERE!! non funziona il ternario
    const newObject = {
      userId: post.userId,
      id: post.id,
      title: newTitle ? newTitle : post.title,
      body: newBody ? newBody : post.newBody,
    }
    console.log(newObject)

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
          />
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
          />
        )}
        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={!newTitle && !newBody}
        >
          SUBMIT
        </Button>
        {response && <h4>Changes submitted successfully</h4>}
      </div>
    </div>
  )
}

export default Modal
