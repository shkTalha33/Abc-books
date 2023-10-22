import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminPanel from './Admin'

export default function index() {
  return (
    <>
        <Routes>
            <Route path='/'>
                <Route index element={<AdminPanel />} />
            </Route>
        </Routes>
    </>
  )
}
