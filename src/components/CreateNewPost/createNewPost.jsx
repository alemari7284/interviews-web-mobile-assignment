import React, { useState, useEffect } from 'react'
import { Button, TextField } from '@mui/material'
import Loading from '../Loading/loading'
import axios from 'axios'

function CreateNewPost() {
  const [object, setObject] = useState()
  const [response, setResponse] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log(object)
  }, [object])

  const handleSubmit = async () => {
    setLoading(true)
    try {
      const call = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        object,
      )
      console.log(call)
      setResponse(call.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      return error
    }
  }

  return (
    <div className="content">
      <h1>Create new post</h1>
      <div>
        <TextField
          type={'number'}
          label="Enter userId"
          variant="outlined"
          className="modalTitle"
          onChange={(e) =>
            setObject({ ...object, userId: e.currentTarget.value })
          }
        />
      </div>
      <div>
        <TextField
          type={'text'}
          label="Enter title"
          variant="outlined"
          className="modalTitle"
          onChange={(e) =>
            setObject({ ...object, title: e.currentTarget.value })
          }
        />
      </div>
      <div>
        <TextField
          type={'text'}
          label="Enter body"
          variant="outlined"
          className="modalTitle"
          onChange={(e) =>
            setObject({ ...object, body: e.currentTarget.value })
          }
        />
      </div>
      <Button variant="contained" onClick={handleSubmit}>
        SUBMIT
      </Button>
      {loading && <Loading />}
      {response && <h2>Post #{response?.id} successfully submitted</h2>}
    </div>
  )
}

export default CreateNewPost
