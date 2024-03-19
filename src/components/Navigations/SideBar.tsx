import logo from "../../assets/Logo.svg"
import dashboard from "../../assets/dashboard.svg"
import SideBarLink from "../../helpers/SideBarLink";
import employees from "../../assets/employees.svg"

const SideBar= () => {
    return (
      <div className="flex flex-col h-screen w-[13rem] bg-[#ffffff] shadow-xl rounded-e-xl">
        <div className="p-4">
          <img src={logo} alt="Logo" className="w-16 h-16" />
        </div>
        <nav className="flex-1">
          <ul className="space-y-2">
            <SideBarLink to="/dashboard" label="Dashboard" icon={dashboard} />
            <SideBarLink to="/dashboard/all-employees" label="All Employees" icon={employees} />
            <SideBarLink to="/dashboard/attendance" label="Attendance" icon={dashboard} />
            <SideBarLink to="/dashboard/payroll" label="Payroll" icon={dashboard} />
            <SideBarLink to="/dashboard/jobs" label="Jobs" icon={dashboard} />
            <SideBarLink to="/dashboard/candidates" label="Candidates" icon={dashboard} />
            <SideBarLink to="/dashboard/leaves" label="Leaves" icon={dashboard} />
            <SideBarLink to="/dashboard/holidays" label="Holidays" icon={dashboard} />
            <SideBarLink to="/dashboard/settings" label="Settings" icon={dashboard} />
          </ul>
        </nav>
        <h1 className="bg-[gray] text-white px-4 py-2 text-center hover:shadow-2xl hover:bg-white hover:text-[#2a2929] hover:cursor-pointer">
          logout
        </h1>
      </div>
    );
  };

export default SideBar