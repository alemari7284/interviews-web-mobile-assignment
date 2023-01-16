import React, { useEffect } from 'react'
import Element from './element'

export default function Result({ data, type }) {
  useEffect(() => {
    console.log(data)
  }, [])

  return (
    <>
      {type === 'posts' && (
        <div className="posts">
          <h2>List of posts:</h2>
          {data.map((el) => {
            return <Element obj={el} />
          })}
        </div>
      )}
      {type === 'post' && (
        <div className="singlePost">
          <h2>Post found:</h2>
          <Element obj={data} />
        </div>
      )}
    </>
  )
}
