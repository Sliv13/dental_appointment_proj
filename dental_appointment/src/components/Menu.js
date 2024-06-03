import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";
import {HandleNav} from "../components/HandleNav"
export default function Menu_glowne() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const zaplanowane = '/zaplanowane'
  const mainpage = '/'
  const logout = '/logout'
  const historia = '/historia'
  const konto = '/konto'
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  
  return (
    <React.Fragment>
    <Stack direction='row' spacing={2}>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Stack direction='row' spacing={2}>
        <Button variant='contained' onClick={()=>HandleNav(navigate,mainpage)} color='info' sx={{ minWidth: 100 }}>ZAPISZ SIĘ</Button>
        <Button variant='contained' onClick={()=>HandleNav(navigate,zaplanowane)} color='info' sx={{ minWidth: 100 }}>ZAPLANOWANE WIZYTY</Button>
        <Button variant='contained' onClick={()=>HandleNav(navigate,historia)} color='info' sx={{ minWidth: 100 }}>HISTORIA WIZYT</Button>
        </Stack>

        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
       
        <MenuItem onClick={()=>HandleNav(navigate,konto)}>
          <Avatar /> Moje konto
        </MenuItem>
        <Divider /> 
        <MenuItem onClick={()=>HandleNav(navigate,logout)}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Wyloguj się
        </MenuItem>
      </Menu>
      </Stack>
    </React.Fragment>
  );
}