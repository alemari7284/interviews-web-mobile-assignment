import React, { Children } from 'react'
import Sidebar from '../Sidebar/sidebar'
import axios from 'axios'
import { useState } from 'react'

function Home() {
  return (
    <div style={{ display: 'flex' }}>
      <div className="content">
        <h1>Welcome to the home page</h1>
        <p>
          You can retrieve fake posts, modify or delete them by calling the
          JSONplaceholder service.
          <br />
          Use the sidebar and enjoy.
        </p>
      </div>
    </div>
  )
}

export default Home
