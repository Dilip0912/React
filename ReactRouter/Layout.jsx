import React from 'react'
import Header from './src/components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './src/components/Footer/Footer'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout