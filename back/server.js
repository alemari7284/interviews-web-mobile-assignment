const express = require('express')
const cors = require('cors')
const app = express()

const mongoose = require('mongoose')
mongoose
  .connect('mongodb://127.0.0.1/xtream', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.error('Could not connect to MongoDB', err))

const postSchema = new mongoose.Schema({
  id: Number,
  userId: Number,
  title: String,
  body: String,
})

const Post = mongoose.model('Post', postSchema)
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('hello world!')
})

app.get('/search/:id', async (req, res) => {
  const n = req.params['id']
  console.log(n)
  let posts
  try {
    n
      ? (posts = await Post.find({ id: n }).select('userId id title body'))
      : (posts = await Post.find())
    return res.status(200).send(posts)
  } catch (error) {
    console.log(error.message)
    return res.send(error)
  }
})

app.post('/add/', async (req, res) => {
  const _id = new mongoose.Types.ObjectId()
  const { userId, title, body } = req.body
  const len = await Post.find().count()

  const post2add = new Post({
    _id,
    id: len,
    userId,
    title,
    body,
  })

  try {
    const result = await post2add.save()
    console.log('result', result)
    return res.status(200).send(result)
  } catch (error) {
    console.log(error.message)
    return res.send(error)
  }
})

app.put('/update/:id', async (req, res) => {
  const id = req.params['id']
  const { title, body } = req.body

  try {
    const result = await Post.updateOne(
      { id },
      {
        title,
        body,
      },
    )
    console.log('result', result)
    return res.status(200).send(result)
  } catch (error) {
    console.log(error.message)
    return res.send(error)
  }
})

app.delete('/delete/:id', async (req, res) => {
  const id = req.params['id']

  try {
    const result = await Post.deleteOne({ id })
    console.log('result', result)
    return res.status(200).send(result)
  } catch (error) {
    console.log(error.message)
    return res.send(error)
  }
})

app.listen(8080, () => {
  console.log('Server listening on port 8080')
})
