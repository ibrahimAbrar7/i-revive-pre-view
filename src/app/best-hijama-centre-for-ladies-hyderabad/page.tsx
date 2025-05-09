import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import LadiesHijama from '../components/LadiesHijama';
import Topbar from '../components/Topbar';

const page = () => {
  return (
    <>
    <Topbar/>
     <Header/>
     <LadiesHijama/>
     <Footer/> 
    </>
  )
}

export default page
