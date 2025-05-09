import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import Breadcrumb from "../components/BreadCrumb";
import Topbar from "../components/Topbar";
import BackToTop from "../components/BackToTop";

const page = () => {
  return (
    <>
    <Topbar />
      <Header/>
      <Breadcrumb
        title="Testimonials"
        subtitle="Healing Journeys Shared by Our Clients"
      />
      <Testimonial />   
      <Footer/>
         <BackToTop />
    </>
  )
}

export default page
