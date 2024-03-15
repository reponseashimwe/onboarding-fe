import ProfileNav from "../components/Navigations/ProfileNav"
import { Outlet } from "react-router-dom"

const AddEmployeePage = () => {
  return (
    <div className="flex flex-col">
        <ProfileNav/>
        <Outlet/>
    </div>
  )
}

export default AddEmployeePage