import React from 'react';
import { AppBar, Toolbar, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          <Link component={RouterLink} to="/" color="inherit" underline="none">
            Comments
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
