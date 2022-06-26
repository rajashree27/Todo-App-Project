import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../pages/Home'
import Login from "../pages/Login"
import TodoList from '../pages/TodoList'
import TodoItem from '../pages/TodoItem'
import TodoEdit from '../pages/TodoEdit'
import RequiredAuth from "../hoc/RequiredAuth"

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<RequiredAuth><Home /></RequiredAuth>} />
            <Route path="/login" element={<Login />} />
            <Route path="/todo" element={<RequiredAuth><TodoList /></RequiredAuth>} />
				    <Route path="/todo/:id" element={<RequiredAuth><TodoItem /></RequiredAuth>} />
				    <Route path="/todo/:id/edit" element={<RequiredAuth><TodoEdit /></RequiredAuth>} />
            
        </Routes>
    </div>
  )
}

export default AllRoutes