import React from 'react'
import Sidebar from '../Sidebar/sidebar'
import DashboardSidebar from '../Sidebar/DashboardSidebar'

const withSidebar = (WrappedComponent) => {
  return (props) => {
    return (
      <div className="wrapper">
        <DashboardSidebar />
        <WrappedComponent {...props} />
      </div>
    )
  }
}

export default withSidebar
