import { NavLink } from 'react-router-dom';
import profile from "../../assets/profile.svg";
import profession from "../../assets/professional.svg";
import document from "../../assets/Document.svg";
import account from "../../assets/account.svg";

const activeLinkStyle: React.CSSProperties = {
  color: 'white',
};

const ProfileNav = () => {
  return (
    <nav className="py-3 border-b-[1px] border-[#d8d6d6]">
      <ul className="flex justify-around items-center">
        <li>
          <div className="flex flex-col items-center" style={activeLinkStyle}>
            <img src={profile} alt="Profile" className="h-5 w-5" />
            <span className="text-black">Personal Information</span>
          </div>
        </li>
        <li>
          <NavLink to="/dashboard/addEmployee/professionalinfo" className="flex flex-col items-center" style={activeLinkStyle}>
            <img src={profession} alt="Profession" className="h-5 w-5" />
            <span className="text-black">Professional Information</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/addEmployee/employeeDocs" className="flex flex-col items-center" style={activeLinkStyle}>
            <img src={document} alt="Document" className="h-5 w-5" />
            <span className="text-black">Documents</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/addEmployee/accountaccess" className="flex flex-col items-center" style={activeLinkStyle}>
            <img src={account} alt="Account" className="h-5 w-5" />
            <span className="text-black">Account Access</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default ProfileNav;
