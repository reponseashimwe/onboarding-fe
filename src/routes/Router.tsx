import { useRoutes } from 'react-router-dom';
import { useState,useEffect } from 'react';
import AppLayout from '../components/layouts/AppLayout';
import Home from '../components/Home';
import UserRegister from '../components/forms/UserRegister';
import UserLogin from '../components/forms/UserLogin';
import DashBoardLayout from '../components/layouts/DashBoardLayout';
import Dashboard from '../components/Dashboard/Dashboard';
import EmployesList from '../components/Dashboard/EmployesList';
import Attendance from '../components/Dashboard/Attendance';
import AddEmployeePage from '../pages/AddEmployeePage';
import CvInfoGenerator from '../components/forms/UploadCvForm';
import UserAuth from '../utils/userAuth';
import { RingLoader } from 'react-spinners';
import MultiStepForm from '../components/ExamplePage';

const Router = () => {
  const routes = useRoutes([
    {
      element: <AppLayout />,
      children: [
        { path: '', element: <Home /> },
        { path: '/register', element: <UserRegister /> },
        { path: '/login', element: <UserLogin /> },
      ],
    },
    {path:"/example",element:<MultiStepForm/>},
    {
      path: '/dashboard',
      element: (
        <UserAuth>
          <DashBoardLayout />
        </UserAuth>
      ),
      children: [
        { path: '', element: <Dashboard /> },
        { path: 'all-employees', element: <EmployesList /> },
        { path: 'attendance', element: <Attendance /> },
        {path: 'extractinfo',
        element: < CvInfoGenerator/>},
        {path:"addEmployee",element:<AddEmployeePage/>}
      ],
    },
  ]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimer);
  }, []);

  if (isLoading) {
    return <div className='w-screen h-screen flex flex-col items-center justify-center'><RingLoader color="#307730"/></div>;
  }

  return routes;
};

export default Router;
