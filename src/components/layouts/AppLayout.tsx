import {Outlet} from "react-router-dom"
import NavBar from "../Navigations/NavBar"
import Footer from "../Navigations/Footer"

const AppLayout = () => {
  return (
    <div className="layout">
    <div className="fixed w-full top-0 z-10">
    <NavBar/>
    </div>
    <main className="h-screen m-auto">
        <Outlet/>
    </main>
    <div className="z-10 flex justify-center fixed items-center top-[80%] left-0 right-0 xs:w-[100%]">
        <Footer />
      </div>
    </div>
  )
}

export default AppLayout