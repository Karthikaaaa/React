import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Button } from '@mui/material';

import UploadImage from '../assets/uploadImage.jpeg';
import DisplayImage from '../assets/displayImage.jpeg';
import Theme from './models/Theme';
const DisplayDetails = ({ savedData, handleOnEdit }) => {
    const [open,setOpen]=useState(false)
const openDetails=()=>setOpen((previousData)=>!previousData)
    return (
        <div className=" details">
          <div className="flex">
            <div className="mbt-auto">
              <Theme>
                {' '}
                <Button variant="contained" color="red" size="small">
                  + Add Project
                </Button>
              </Theme>
            </div>
            <div className="mbt-auto">
              <Button
                id="demo-customized-button"
                variant="text"
                disableElevation
                endIcon={<KeyboardArrowDownIcon className={`${open?'rotate':''}`} />}
              >
                <div className="flex" onClick={openDetails}>
                  <img src={DisplayImage} className="" alt="DisplayImage" />
                  <div className="ml-1 mbt-auto displayHeading">
                    <div>{savedData.displayName}</div>
                    <div>Project Manager</div>
                  </div>
                </div>
              </Button>
            </div>
          </div>
      
          {open&&Object.keys(savedData).length > 0 && (
            <div className="ml-5 text-center">
              {' '}
              <img src={UploadImage} className="mt-3" alt="UploadImage" />
              <div className="mt-1 name">
                {savedData.firstName} {savedData.lastName}
              </div>
              <div className="mt-1 email">{savedData.email}</div>
              <div className="mt-1">
                <Button variant="outlined" onClick={handleOnEdit}>
                  Edit Details
                </Button>
              </div>
            </div>
          )}
        </div>
      )
};

export default DisplayDetails;
