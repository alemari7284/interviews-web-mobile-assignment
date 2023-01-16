import React from 'react'

function Element({ obj }) {
  return (
    <div>
      <h3>
        <span className="postField">user id:</span> {obj.userId}
      </h3>
      <h3>
        <span className="postField">post id:</span> {obj.id}
      </h3>
      <h3>
        <span className="postField">post title:</span> {obj.title}
      </h3>
      <h3>
        <span className="postField">post body:</span> {obj.body}
      </h3>
    </div>
  )
}

export default Element
