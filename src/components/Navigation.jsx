import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function Navigation() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        textColor="inherit" // omogucava override boje
        sx={{
          '& .MuiTabs-indicator': {
            backgroundColor: '#f5ba13',
          },
          '& .MuiTab-root': {
            fontSize: '24px', // sve tabove istovremeno
            fontFamily: '"Roboto", sans-serif'
          }
        }}
      >
        {['Naslovna', 'Knjige', 'Kontakt'].map((label, index) => (
          <Tab
            key={index}
            label={label}
            sx={{
              color: value === index ? '#f5ba13' : 'rgba(0,0,0,0.6)', // aktivni narandžasti
              '&:hover': { color: '#e0a800' }, // hover tamnija narandžasta
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
}
