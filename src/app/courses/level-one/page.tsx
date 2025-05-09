import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import LevelOne from '@/app/components/LevelOne'
import Topbar from '@/app/components/Topbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Topbar />
      <Header />
      <LevelOne />
      <Footer  />
    </div>
  )
}

export default page
