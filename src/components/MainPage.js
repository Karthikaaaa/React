import React from 'react';
import axios from '../axios';
import SideNav from './SideNav';
import ProfileDetails from './ProfileDetails';
import DisplayDetails from './DisplayDetails';

const MainPage = () => {
  const [pageValues, setPageValue] = React.useState({});
  const [savedData, setSavedData] = React.useState({});
  const [resetData, setResetData] = React.useState({});
  const [savedId, setSavedId] = React.useState('');

  const handleOnChange = (e) => {
    let attributeName = e.target.name;
    let attributeVal = e.target.value;
    setPageValue({ ...pageValues, [attributeName]: attributeVal });
    setSavedData({ ...pageValues, [attributeName]: attributeVal });
  };
  const handleOnEdit = () => {
    setPageValue(savedData);
    setResetData(savedData);
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
  const onClickReset=()=>{
    setPageValue(resetData)
    setSavedData(resetData)
  }
  return (
    <React.Fragment>
      <div className="flex ">
        <SideNav />
        <ProfileDetails
          savedData={savedData}
          handleOnChange={handleOnChange}
          pageValues={pageValues}
          handleOnClick={handleOnClick}
          onClickReset={onClickReset}
        />

       {Object.keys(savedData).length > 0&& <DisplayDetails savedData={savedData} savedId={savedId} handleOnEdit={handleOnEdit} />}
      </div>
    </React.Fragment>
  );
};
export default MainPage;
