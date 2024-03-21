import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../Navigations/SideBar';
import TopNavbar from '../Navigations/TopNavbar';

const DashboardLayout: React.FC = () => {
  return (
    <div className="h-screen grid grid-cols-12 grid-rows-12">
      <div className="col-start-1 col-end-2 fixed top-0">
        <SideBar />
      </div>
      
      <div className="col-start-3 col-end-13 bg-[#9b9bd1]">
        <div>
          <TopNavbar />
        </div>
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
