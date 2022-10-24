import React from 'react';
import { Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import axios from '../axios';
import SideNav from './SideNav';
import ProfileDetails from './ProfileDetails';
import PersonIcon from '@mui/icons-material/Person';

const MainPage = () => {
  const [pageValues, setPageValue] = React.useState({});
  const [savedData, setSavedData] = React.useState({});
  const [savedId, setSavedId] = React.useState('');

  const handleOnChange = (e) => {
    let attributeName = e.target.name;
    let attributeVal = e.target.value;
    setPageValue({ ...pageValues, [attributeName]: attributeVal });
  };
  const handleOnEdit = () => {
    setPageValue(savedData);
    setSavedData({});
  };
  const handleOnClick = () => {
    if (savedId) {
      axios
        .put(`profile/${savedId}`, pageValues)
        .then((res) => {
          setSavedData(pageValues);
          setPageValue({});
        })
        .catch((error) => console.log('error', error));
    } else {
      axios
        .post('profile', pageValues)
        .then((res) => {
          setSavedData(pageValues);
          setSavedId(res.data);
          setPageValue({});
        })
        .catch((error) => console.log('error', error));
    }
  };
  return (
    <React.Fragment>
      <div className="flex ">
        <SideNav />
        <ProfileDetails
          savedData={savedData}
          handleOnChange={handleOnChange}
          pageValues={pageValues}
          handleOnClick={handleOnClick}
        />
        <div>
          <div className="flex spaceBetween">
           {/*  <Button variant="contained">+ Add Project</Button> */}
            <div className="ml-2">
              <Button
                id="demo-customized-button"
                variant="text"
                disableElevation
                endIcon={<KeyboardArrowDownIcon />}
              >
                <div className="flex">
                  <PersonIcon />
                  <div className="ml-1">
                    <div>{savedData.displayName}</div>
                    <div>Project Manager</div>
                  </div>
                </div>
              </Button>
            </div>
          </div>

          {Object.keys(savedData).length > 0&&<><PersonIcon className='mt-3'/>
          <div className='text-center'>{savedData.firstName} {savedData.lastName}</div>
          <div className='text-center'>{savedData.email}</div>
          <div className='text-center'>
            
          <Button variant="outlined" onClick={handleOnEdit}>
                Edit Details
              </Button></div>
          </>}

          </div>
        
      </div>
    </React.Fragment>
  );
};
export default MainPage;
