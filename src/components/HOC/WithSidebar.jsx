import React from 'react'
import Sidebar from '../Sidebar/sidebar'

const withSidebar = (WrappedComponent) => {
  return (props) => {
    return (
      <div>
        <Sidebar />
        <WrappedComponent {...props} />
      </div>
    )
  }
}

export default withSidebar
