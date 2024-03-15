import { Link } from "react-router-dom";
import { SideBarLinkProps } from "../types";

const SideBarLink: React.FC<SideBarLinkProps> = ({ to, label, icon }) => {
    return (
      <li className="flex items-center space-x-4">
        <img src={icon} alt="" className="w-6 h-6" />
        <Link to={to} className="text-black hover:text-gray-300">
          {label}
        </Link>
      </li>
    );
  };
  export default SideBarLink;