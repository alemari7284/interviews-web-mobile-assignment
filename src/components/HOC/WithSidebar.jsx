import React from 'react'
import DashboardSidebar from '../Sidebar/DashboardSidebar'
import Modal from '../Modal/modal'

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
