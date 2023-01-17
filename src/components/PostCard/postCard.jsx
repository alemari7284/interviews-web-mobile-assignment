import React from 'react'

function PostCard({ post }) {
  return (
    <div className="postCard">
      <span className="postIdText">#{post.id}</span>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
      <span className="credits">Written by user #{post.userId}</span>
    </div>
  )
}

export default PostCard
