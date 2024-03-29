import React from 'react';
import search from '../../assets/search.svg';
import avatar from '../../assets/avatar.svg';
import notification from '../../assets/notifications.svg';

interface TopNavbarProps {
  name: string;
  isHR: boolean;
}

const TopNavbar: React.FC<TopNavbarProps> = ({ name, isHR }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-white text-black">
      <h1>{name}</h1>
      <div className="flex items-center">
        <div className="relative">
          <input
            type="search"
            placeholder="Search"
            className="px-3 py-1 pr-8 rounded border-[1px] border-[#6bae51]"
          />
          <img src={search} alt="Search" className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 " />
        </div>
        <img src={notification} alt="Notifications" className="ml-4 w-8 h-8" />
        <div className="flex items-center ml-4">
          <img src={avatar} alt="Avatar" className="w-8 h-8 rounded-full" />
          <div className="ml-2">
            <h1>{name}</h1>
            {isHR && <p>HR Manager</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
