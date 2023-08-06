import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useNavigate } from "react-router-dom";
import Login from '../../components/logins/Login';
import Signup from '../../components/signups/Signup';
import Button from "@mui/material/Button";

export default function Navbar() {
  const navigate=useNavigate();
  const onClickSignupHandler = (e) => {
    e.preventDefault();
    navigate('/Signup');

    window.location.href = "/users";
  };

  const onClickLoginHandler = (e) => {
    e.preventDefault();
    navigate('/Login')
    window.location.href = "/auth";
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0 }}
          >
            <ShoppingCartIcon/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,display:'flex', }}>
           upGrad Eshop
          </Typography>
          <Link to='/login' >
            <Button variant="contained" onClick={onClickLoginHandler} sx={{ flexGrow: 1, margin:2}}>
             < Login/>
            </Button></Link>
          <Link to='/signup' >
            <Button variant="contained" onClick={onClickSignupHandler}>
              <Signup/>
            </Button></Link>

        </Toolbar>
      </AppBar>
    </Box>
  );
}