import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/layouts/AppLayout";
import Home from "../components/Home";
import UserRegister from "../components/forms/UserRegister";
import UserLogin from "../components/forms/UserLogin";
import DashBoardLayout from "../components/layouts/DashBoardLayout";
import Dashboard from "../components/Dashboard/Dashboard";
import EmployesList from "../components/Dashboard/EmployesList";
import Attendance from "../components/Dashboard/Attendance";
import AddEmployeePage from "../pages/AddEmployeePage";
import PersonalInfo from "../components/forms/PersonalInfo";
import ProfessionalInfo from "../components/forms/ProfessionalInfo";
import EmployeeDocs from "../components/forms/EmployeeDocs";
import AccountAccess from "../components/forms/AccountAccess";
import CvInfoGenerator from "../components/forms/UploadCvForm";

const Router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: "", element: < Home/> },
        { path: "/register", element: <UserRegister /> },
        {path:"/login",element:<UserLogin/>},
      ],
    },
    {
      path:"/dashboard",element:<DashBoardLayout/>,
      children: [
        { path: "", element: < Dashboard/> },
        { path: "all-employees", element: <EmployesList /> },
        {path:"attendance",element:<Attendance/>},
        {path:"addEmployee",element:<AddEmployeePage/>,
      children:[
        {path:"",element:<CvInfoGenerator/>},
        {path:"personalinfo",element:<PersonalInfo/>},
        {path:"professionalinfo",element:<ProfessionalInfo/>},
        {path:"employeeDocs",element:<EmployeeDocs/>},
        {path:"accountaccess",element:<AccountAccess/>}
      ]}
      ],
    }
  ]);
export default Router;
