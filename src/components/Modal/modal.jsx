import React, { useEffect, useState } from 'react'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import axios from 'axios'

function Modal({ post, setPost, response, setResponse }) {
  const initialValue = { title: '', body: '' }
  const [object, setObject] = useState(initialValue)

  useEffect(() => {
    return () => {
      console.log('cleanupModal')
      setObject(initialValue)
      setResponse()
    }
  }, [])

  const handleSubmit = async () => {
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
        <h3 style={{ textAlign: 'center' }}>Update this post</h3>
        <span class="close">&times;</span>
        {post && (
          <TextField
            fullWidth
            defaultValue={post.title}
            type={'text'}
            label="Enter title"
            variant="outlined"
            className="modalTitle"
            onChange={(e) =>
              setObject({
                id: post.id,
                userId: post.userId,
                title: e.currentTarget.value,
                body: object.body ? object.body : post.body,
              })
            }
          />
        )}
        {post && (
          <TextField
            fullWidth
            defaultValue={post ? post.body : ''}
            type={'text'}
            label="Enter body"
            variant="outlined"
            className="modalBody"
            onChange={(e) =>
              setObject({
                id: post.id,
                userId: post.userId,
                title: object.title ? object.title : post.title,
                body: e.currentTarget.value,
              })
            }
          />
        )}
        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={!object?.title && !object?.body}
        >
          SUBMIT
        </Button>
        {response && <h3>Changes submitted successfully</h3>}
      </div>
    </div>
  )
}

export default Modal
