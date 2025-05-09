import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import LevelThree from '@/app/components/LevelThree'
import Topbar from '@/app/components/Topbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Topbar />
      <Header />
      <LevelThree />
      <Footer />
    </div>
  )
}

export default page
