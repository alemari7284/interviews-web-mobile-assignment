import React from 'react'
import { useEffect } from 'react'

function CommentsCard({ data }) {
  return (
    <div>
      {data.map((comment, i) => {
        const { name, email, body } = comment
        return (
          <div key={i} className="commentsCard">
            #{i + 1}
            <span className="commentFieldName">
              name:
              <span className="commentField">{name}</span>
            </span>
            <span className="commentFieldName">
              email:
              <span className="commentField">{email}</span>
            </span>
            <span className="commentFieldName">
              body:
              <span className="commentField">{body}</span>
            </span>
          </div>
        )
      })}
    </div>
  )
}

export default CommentsCard
