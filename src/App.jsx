

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import Homecurd from './ComponetCRUD/Homecurd'
import Createuser from './ComponetCRUD/Createuser'
import Edituser from './ComponetCRUD/Edituser'
import Users from './ComponetCRUD/Users'

const App = () => {
  return (
    <div>
      <BrowserRouter>
 <Homecurd></Homecurd>
      <Routes>
        <Route path='/a' element={<Createuser></Createuser>}></Route>
        <Route path='/b' element={<Users></Users>}></Route>
        <Route path='/edit/:index' element={<Edituser></Edituser>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
