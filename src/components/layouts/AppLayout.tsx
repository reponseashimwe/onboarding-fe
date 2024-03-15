import {Outlet} from "react-router-dom"
import NavBar from "../Navigations/NavBar"
import Footer from "../Navigations/Footer"

const AppLayout = () => {
  return (
    <>
    <div className="sticky top-0 z-10">
    <NavBar/>
    </div>
    <main className="h-fit">
        <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default AppLayout