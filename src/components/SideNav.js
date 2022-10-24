import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {Person,  Home, GridView, MapsUgcRounded, Article, CorporateFare, Settings, Description} from '@mui/icons-materials';
import Logo from '.././assets/logo.jpg';

const homeDetails = [
    {
      icon: < Home />,
      value: 'Home',
    },
    {
      icon: <Description />,
      value: 'Projects',
    },
    {
      icon: <GridView />,
      value: 'Dashboard',
    },
    {
      icon: <MapsUgcRounded />,
      value: 'Messages',
    },
    {
      icon: <Article />,
      value: 'Documents',
    },
    {
      icon: <CorporateFare />,
      value: 'Organization',
    },
    {
      icon: <Settings />,
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