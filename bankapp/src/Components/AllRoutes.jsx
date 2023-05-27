import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import Transaction from './Transaction'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Signup/>} ></Route>
            <Route path='/login'  element={<Login/>}></Route>
            <Route path='/tras'element={<Transaction/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes