
import React from 'react';

import TextField from '@mui/material/TextField';
import FormFields from './models/FormFields.json';
import { Button, InputAdornment, Card, CardContent } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const ProfileDetails=({savedData,handleOnChange,pageValues,handleOnClick})=>{

return <div className='centerDiv'>
<div className='greetings mt-2'>
  <div>Good Morning {savedData.displayName?`,${savedData.displayName}`:''}</div>
  <div>{new Date().toJSON()}</div>
</div>
<div className='profile mt-3'>
My Profile
</div>
<Card className='mt-3'>
  <CardContent>
    <div
      className='card'
    >
      {FormFields.applicationDetail &&
        FormFields.applicationDetail.map((item, index) => {
          return (
            <div className='textBox m-2' key={index}>
              
                <div>
                  <TextField
                    key={index}
                    fullWidth={true}
                    onChange={handleOnChange}
                    id="outlined-required"
                    label={item.attributeName}
                    name={item.attributeType}
                    value={
                      pageValues[item.attributeType] ? pageValues[item.attributeType] : ''
                    }
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
            </div>
          );
        })}
    </div>
  </CardContent>
    <div className='save mb-1'>
    <Button variant="contained"  onClick={handleOnClick}>
      Save Changes
    </Button>
    </div>
</Card>
</div>
}

export default ProfileDetails