import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Header() {
  return (
    <Box>
      <AppBar component="header" position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TasiaOwl
          </Typography>
          <Button color="inherit">Registration / Authentication</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}