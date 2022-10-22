import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';

import Logo from '.././assets/logo.jpg';


const homeDetails = [
    {
      icon: <PersonIcon />,
      value: 'Home',
    },
    {
      icon: <PersonIcon />,
      value: 'Projects',
    },
    {
      icon: <PersonIcon />,
      value: 'Dashboard',
    },
    {
      icon: <PersonIcon />,
      value: 'Messages',
    },
    {
      icon: <PersonIcon />,
      value: 'Documents',
    },
    {
      icon: <PersonIcon />,
      value: 'Organization',
    },
    {
      icon: <PersonIcon />,
      value: 'Settings',
    },
  ];
const SideNav=()=>{

    return <div className="sideNav">
    <div className="flex">
      <img src={Logo} alt="logo" className="imageStyle" />
      <div className="menuIcon">
        <MenuIcon />
      </div>
    </div>
    <div className="homeDetails">
      {homeDetails.map((item, key) => (
        <div key={key} className="flex mb-1">
          <div className='ml-1'>{item.icon}</div>
          <div className='ml-1'>{item.value}</div>
        </div>
      ))}
    </div>
  </div>
}

export default SideNav