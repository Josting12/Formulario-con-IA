import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Reg from './pages/Reg'
import Login from './pages/Login'
import RegChat from './pages/RegChat'
import Logout from './pages/Logout'
import NoAccess from './pages/NoAccess'
import NotFound from './pages/NotFound'
import ListChat from './pages/ListChat'
import { useState } from 'react'
const App = ()=>{
  const [login, setLogin]=useState(false);

  const handleLogin=(()=>{
    setLogin(true)
  })

  const handleLogout=(()=>{
    setLogin(false)
  })
  return(
    <>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/register" element={<Reg></Reg>}></Route>
          <Route path="/login" element={<Login onLogin={handleLogin}></Login>}></Route>
          <Route path="/regchat" element={<RegChat></RegChat>}></Route>
          <Route path="/listchat" element={<ListChat></ListChat>}></Route>
          <Route path="/logout" element={<Logout onLogout={handleLogout}></Logout>}></Route>
          <Route path="/noaccess" element={<NoAccess></NoAccess>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
