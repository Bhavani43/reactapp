import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './Navigation1.Css'
function Navigation1() {
  return (
    <AppBar position="static" className="toolbar">
      <Toolbar>
        <Typography variant="h6" component="div">
         Form
        </Typography>
        <nav>
          <ul className="nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/about">NameForm</Link>
            </li>
            <li>
              <Link to="/email">EmailForm</Link>
            </li>
            <li>
              <Link to="/submit">Submit</Link>
            </li>
          </ul>
        </nav>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation1;