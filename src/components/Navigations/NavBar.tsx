import { Link } from "react-router-dom"
import logo from "../../assets/Logo.svg"

const NavBar = () => {
  return (
<div className="navbar bg-opacity-80 backdrop-blur-lg bg-[#307730]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to="/">home</Link></li>
        <li>
          <a>institutions</a>
          <ul className="p-2">
            <li><a>create institution</a></li>
            <li><a>view registered institutions</a></li>
          </ul>
        </li>
        <li><a>create profile</a></li>
      </ul>
    </div>
    <Link to="/"><img src={logo} alt="" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex text-white">
    <ul className="menu menu-horizontal px-1">
      <li><a className="text-[20px]">Submit Request</a></li>
      <li>
        <details>
          <summary className="text-[20px]">institutions</summary>
          <ul className="p-2 text-black">
            <li><a >create institution</a></li>
            <li><a>view registered institutions</a></li>
          </ul>
        </details>
      </li>
      <li ><Link to="/newProfile" className="text-[20px]">Create Profile</Link></li>
    </ul>
  </div>
  <div className="navbar-end ">
    <Link to="/register" className="btn text-white bg-[#307730]">
      Sign In
    </Link>
  </div>

</div>
  )
}

export default NavBar