import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PopulerMovie } from '../pages/PopulerMovie'
import { HasilSearch } from '../pages/HasilSearch'
import { Register } from '../pages/auth/Register'
import { LoginPage } from '../pages/auth/LoginPage'
import { Dashboard } from '../pages/auth/Dashboard'
import { Render } from '../pages/Render'
import { Background } from '../assets/components/Background'
import { HomePage } from '../pages/HomePage'

import TokenProtected from '../assets/components/TokenProtected'
import { UserProfil } from '../pages/UserProfil'
// import { Carasuel2 } from '../assets/components/Carasuel2'

export const RouterList = () => {
  return (
    <BrowserRouter>
    <Routes>
        {/* <Route path='/' element={<ReduxPage/>}/> */}
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Login' element={<LoginPage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={
        <TokenProtected>
          <Dashboard/>
        </TokenProtected>
        }/>
          <Route path='/UserProfil' element={
                   <TokenProtected>
          <UserProfil/>
          </TokenProtected>
          }/>
        <Route path='/PopulerMovie' element={
          <TokenProtected>
            <PopulerMovie/>
          </TokenProtected>
        }/>
        <Route path='/HasilSearch' element={
          <TokenProtected>
            <HasilSearch/>
          </TokenProtected>
        }/>
        <Route path='/Render/:id' element={
         <TokenProtected>
           <Render/>
         </TokenProtected>
        }/>
        <Route path='/Background' element={<Background/>}/>
    </Routes>
    </BrowserRouter>
  )
}
