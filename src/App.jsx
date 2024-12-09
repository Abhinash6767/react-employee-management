import React from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import Demo from './demo/Demo'

const App = () => {
  return (
    <>
      {/* <Login/> */}
      <EmployeeDashboard/>
      <AdminDashboard/>
      {/* <Demo/> */}
    </>
  )
}

export default App