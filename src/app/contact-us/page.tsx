import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Topbar from "../components/Topbar";
import Breadcrumb from "../components/BreadCrumb";
import BackToTop from "../components/BackToTop";

const page = () => {
  return (
    <>
    <Topbar />
      <Header />
      <Breadcrumb title="Contact Us" subtitle="Get in Touch with Us" />
      <ContactForm />
      <Footer />
         <BackToTop />
    </>
  );
};

export default page;
