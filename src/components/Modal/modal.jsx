import React, { useEffect } from 'react'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import axios from 'axios'

function Modal({
  post,
  setPost,
  newTitle,
  setNewTitle,
  newBody,
  setNewBody,
  response,
  setResponse,
}) {
  // FIX: DA AGGIUSTARE QUANDO SI FANNO RICERCHE MULTIPLE IN SERIE

  const handleSubmit = async () => {
    const { title, body } = post

    const object = {
      ...post,
      title: newTitle ? newTitle : title,
      body: newBody ? newBody : body,
    }
    setPost(object)

    try {
      const result = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${post.id}`,
        object,
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
