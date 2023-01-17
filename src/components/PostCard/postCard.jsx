import React from 'react'

function PostCard({ userId, id, title, body }) {
  return (
    <div className="postCard">
      <span className="postIdText">#{id}</span>
      <h4>{title}</h4>
      <p>{body}</p>
      <span className="credits">Written by user #{userId}</span>
    </div>
  )
}

export default PostCard
