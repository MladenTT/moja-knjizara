import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(2),
  right: theme.spacing(2),
}));

const actions = [
  { icon: <StarBorderIcon />, name: 'Favorite' },
  { icon: <ShoppingCartOutlinedIcon />, name: 'Cart' },
  { icon: <ManageAccountsIcon />, name: 'Account' },
  { icon: <LogoutIcon />, name: 'Logout' },
];

export default function PlaygroundSpeedDial() {
  return (
    <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1, position: 'relative', height: 320 }}>
      <StyledSpeedDial
        ariaLabel="SpeedDial example"
        icon={<PersonOutlineOutlinedIcon />}
        direction="down"
        FabProps={{
          sx: {
            bgcolor: '#f5ba13',          // osnovna narandžasta
            color: '#fff',                // boja ikone
            '&:hover': { bgcolor: '#e0a800' }, // hover narandžasta
          },
        }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name} // moderni prop tooltip-a
          />
        ))}
      </StyledSpeedDial>
    </Box>
  );
}
