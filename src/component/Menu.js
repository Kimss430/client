import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();

  return (
    <List>
      <ListItem button onClick={() => navigate('/main')}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="홈" />
      </ListItem>
      
      <ListItem button onClick={() => navigate('/register')}>
        <ListItemIcon>
          <AddBoxIcon />
        </ListItemIcon>
        <ListItemText primary="등록" />
      </ListItem>
      
      <ListItem button onClick={() => navigate('/mypage')}>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="마이페이지" />
      </ListItem>
      
      <ListItem button onClick={() => navigate('/logout')}>
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary="로그아웃" />
      </ListItem>
    </List>
  );
};

export default Menu;