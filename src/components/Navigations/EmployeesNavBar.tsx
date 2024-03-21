import search from "../../assets/search.svg";
import filter from "../../assets/filter.svg";
import add from "../../assets/add.svg"
import { Link } from "react-router-dom";

const EmployeesNavBar = () => {
  return (
    <div className="flex items-center justify-between p-4">

      <div className="relative">
        <input
          type="search"
          placeholder="Search"
          className="px-3 py-1 pr-8 rounded border-[1px] border-[#6bae51]"
        />
        <img src={search} alt="Search" className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4" />
      </div>

      <div className="flex gap-3">
      <button className="btn no-animation bg-[#307730] text-white"><Link to="/dashboard/extractinfo" className="flex gap-2 items-center justify-center">Add Employee <img src={add} alt="" /></Link></button>
      
      <div className="flex items-center">
        <img src={filter} alt="Filter" className="w-4 h-4 mr-1" />
        <span>Filter</span>
      </div>
      </div>
    </div>
  );
};

export default EmployeesNavBar;