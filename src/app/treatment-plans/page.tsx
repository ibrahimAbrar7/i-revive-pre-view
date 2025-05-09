import React from "react";
import Header from "../components/Header";
import WhatWeDo from "../components/WhatWeDo";
import Footer from "../components/Footer";
import Breadcrumb from "../components/BreadCrumb";
import BackToTop from "../components/BackToTop";

const page = () => {
  return (
    <>
      <Header/>
      <Breadcrumb
        title="Treatment Plans"
        subtitle="Explore Our Cupping Therapy Treatments"
      />
      <WhatWeDo showMoreButton={false}/>
      <Footer/>
         <BackToTop />
    </>
  )
}

export default page
