import React from 'react'
import logo from './logo.png'
import { useNavigate } from 'react-router-dom'

function DashboardSidebar() {
  let navigate = useNavigate()

  return (
    <>
      <nav className="dashSidebar">
        <ul>
          <li className="logo">
            <a className="logo">
              <img src={logo} width={'150px'} height={'150px'} alt="" />
              <span className="nav-item">Xtream APP</span>
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                navigate('/')
              }}
            >
              <i className="fas fa-home"></i>
              <span className="nav-item">Home</span>
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                navigate('/createnewpost')
              }}
            >
              <i class="fas fa-square-plus"></i>
              <span className="nav-item">New Post</span>
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                navigate('/getallposts')
              }}
            >
              <i class="fas fa-circle-down"></i>
              <span className="nav-item">Get All Posts</span>
            </a>
          </li>
          <li>
            <a onClick={() => navigate('/getsinglepost')}>
              <i class="fas fa-pen-to-square"></i>
              <span className="nav-item">Get/Update Post</span>
            </a>
          </li>
          <li>
            <a onClick={() => navigate('/deletepost')}>
              <i class="fas fa-trash-can"></i>
              <span className="nav-item">Delete Post</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default DashboardSidebar
