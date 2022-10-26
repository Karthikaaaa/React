import React from 'react';

import TextField from '@mui/material/TextField';
import { FormFields } from './models/FormFields';
import { Button, InputAdornment, Card, CardContent } from '@mui/material';
import Theme from './models/Theme';

const ProfileDetails = ({ savedData, handleOnChange, pageValues, handleOnClick,onClickReset }) => {
  return (
    <div className="centerDiv">
      <div className="greetings mt-1">
        <div className="gm">
          Good Morning {savedData.displayName ? `,${savedData.displayName}` : ''}
        </div>
        <div className="date mt-1">
          {new Date().toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </div>
      </div>
      <div className="profile mt-3">My Profile</div>
      <Card className="mt-3">
        <CardContent>
          <div className="card">
            {FormFields.applicationDetail &&
              FormFields.applicationDetail.map((item, index) => {
                return (
                  <div className="textBox m-2" key={index}>
                    <div>
                      <TextField
                        key={index}
                        fullWidth={true}
                        onChange={handleOnChange}
                        id="outlined-required"
                        label={item.attributeName}
                        name={item.attributeType}
                        value={pageValues[item.attributeType] ? pageValues[item.attributeType] : ''}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">{item.Icon}</InputAdornment>
                          ),
                        }}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </CardContent>
        <div className="save mb-1">
          <Theme>
          <Button variant="outlined" color="red" onClick={onClickReset}>
                  Reset
                </Button>
          </Theme>
          <Theme>
            <Button variant="contained" color="red" onClick={handleOnClick}>
              Save Changes
            </Button>
          </Theme>
        </div>
      </Card>
    </div>
  );
};

export default ProfileDetails;
