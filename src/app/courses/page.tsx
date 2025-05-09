import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CoursesSection from '../components/CoursesSection'
import Topbar from '../components/Topbar'
import Breadcrumb from '../components/BreadCrumb'
import BackToTop from '../components/BackToTop'

const page = () => {
  return (
    <div>
      <Topbar />
      <Header />
      <Breadcrumb
        title="Courses"
        subtitle="Top Courses for Your Wellness Journey"
      />
      <CoursesSection />
      <Footer />
         <BackToTop />
    </div>
  )
}

export default page
