import PersonIcon from '@mui/icons-material/Person';
import Contacts from '@mui/icons-material/Contacts';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export const FormFields = {
  applicationDetail: [
    {
      componentType: 'Text',
      attributeName: 'First Name',
      attributeType: 'firstName',
      Icon: <PersonIcon />,
    },
    {
      componentType: 'Text',
      attributeName: 'Last Name',
      attributeType: 'lastName',
      Icon: <PersonIcon />,
    },
    {
      componentType: 'Text',
      attributeName: 'Display Name',
      attributeType: 'displayName',
      Icon: <Contacts />,
    },
    {
      componentType: 'Text',
      attributeName: 'Email',
      attributeType: 'email',
      Icon: <MailOutlinedIcon />,
    },
    {
      componentType: 'Text',
      attributeName: 'Phone Number (work)',
      attributeType: 'personalPhone',
      Icon: <PhoneOutlinedIcon />,
    },
    {
      componentType: 'Text',
      attributeName: 'Phone Number (Personal)',
      attributeType: 'officePhone',
      Icon: <PhoneOutlinedIcon />,
    },
    {
      componentType: 'Text',
      attributeName: 'Location',
      attributeType: 'location',
      Icon: <LocationOnOutlinedIcon />,
    },
  ],
};
