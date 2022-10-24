import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Home from '@mui/icons-material/Home';
import GridView from '@mui/icons-material/GridView';
import MapsUgcRounded from '@mui/icons-material/MapsUgcRounded';
import Article from '@mui/icons-material/Article';
import CorporateFare from '@mui/icons-material/CorporateFare';
import Settings from '@mui/icons-material/Settings';
import Description from '@mui/icons-material/Description';
import Logo from '.././assets/logo.jpg';

const homeDetails = [
  {
    icon: <Home />,
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
const SideNav = () => {
  return (
    <div className="sideNav">
      <div className="flex">
        <img src={Logo} alt="logo" className="imageStyle" />
        <div className="menuIcon">
          <MenuIcon />
        </div>
      </div>
      <div className="homeDetails">
        {homeDetails.map((item, key) => (
          <div key={key} className="flex mb-1">
            <div className="ml-1">{item.icon}</div>
            <div className="ml-1">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
