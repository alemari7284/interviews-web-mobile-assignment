import React, { useState, useEffect } from 'react'
import { Button, TextField } from '@mui/material'
import Loading from '../Loading/loading'
import axios from 'axios'
import { FormControl } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

function CreateNewPost() {
  const [object, setObject] = useState()
  const [response, setResponse] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log(object)
  }, [object])

  const schema = yup.object({
    userId: yup.number().required(),
    title: yup.string().min(4).required(),
    body: yup.string().min(4).required(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async () => {
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextField
            name="userId"
            id="userId"
            type={'number'}
            autoFocus
            label="Enter userId"
            variant="outlined"
            className="modalTitle"
            {...register('userId')}
            onChange={(e) =>
              setObject({ ...object, userId: e.currentTarget.value })
            }
          />
          <p className="error">{errors.userId?.message}</p>
        </div>
        <div>
          <TextField
            name="title"
            id="title"
            type={'text'}
            label="Enter title"
            variant="outlined"
            className="modalTitle"
            {...register('title')}
            onChange={(e) =>
              setObject({ ...object, title: e.currentTarget.value })
            }
          />
          <p className="error">{errors.title?.message}</p>
        </div>
        <div>
          <TextField
            name="body"
            id="body"
            type={'text'}
            label="Enter body"
            variant="outlined"
            className="modalTitle"
            {...register('body')}
            onChange={(e) =>
              setObject({ ...object, body: e.currentTarget.value })
            }
          />
          <p className="error">{errors.body?.message}</p>
        </div>
        <Button variant="contained" type="submit">
          SUBMIT
        </Button>
        {loading && <Loading />}
        {response && <h2>Post #{response?.id} successfully submitted</h2>}
      </form>
    </div>
  )
}

export default CreateNewPost
