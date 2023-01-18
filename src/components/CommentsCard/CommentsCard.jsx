import React from 'react'

function CommentsCard({ data }) {
  const { postId, id, name, email, body } = data
  return (
    <div className="commentsCard">
      <span style={{ fontWeight: 'bold' }}>
        postID: <span style={{ fontWeight: 'lighter' }}>#{postId}</span>
      </span>
      <span style={{ fontWeight: 'bold' }}>
        id: <span style={{ fontWeight: 'lighter' }}>{id}</span>
      </span>
      <span style={{ fontWeight: 'bold' }}>
        name: <span style={{ fontWeight: 'lighter' }}>{name}</span>
      </span>
      <span style={{ fontWeight: 'bold' }}>
        email: <span style={{ fontWeight: 'lighter' }}>{email}</span>
      </span>
      <span style={{ fontWeight: 'bold' }}>
        body: <span style={{ fontWeight: 'lighter' }}>{body}</span>
      </span>
    </div>
  )
}

export default CommentsCard
