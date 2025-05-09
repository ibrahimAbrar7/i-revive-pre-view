import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutTwo from "../components/About";
import Breadcrumb from "../components/BreadCrumb";
import Topbar from "../components/Topbar";
import OurTeam from "../components/OurTeam";
import ContactForm from "../components/ContactForm";
import BackToTop from "../components/BackToTop";

const page = () => {
  return (
    <>
    <Topbar />
      <Header/>
      <Breadcrumb
        title="About Us"
        subtitle="Guided by Experience, Rooted in Wellness — Discover a Healthier You With Cupping Therapy"
      />
      <AboutTwo />
      <OurTeam />
      <ContactForm />
      <Footer/>
      <BackToTop />
    </>
  )
}

export default page
