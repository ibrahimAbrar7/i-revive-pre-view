import Header from "../components/Header"
import BookAppointment from "../components/BookAppointment"
import Footer from "../components/Footer"
import Breadcrumb from "../components/BreadCrumb"
import Topbar from "../components/Topbar"
import BackToTop from "../components/BackToTop"
const page = () => {
  return (
    <div>
      <Topbar />
      <Header />
      <Breadcrumb title="Book Appointment" />
      <BookAppointment />
      <Footer />
         <BackToTop />
    </div>
  )
}

export default page
