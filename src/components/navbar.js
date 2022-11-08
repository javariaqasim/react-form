import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";


import { AppBar, Toolbar, Box, Typography, Button } from '@mui/material';
import logo from "../images/logo.png";




function Navbar() {
  return (
    <>
      <AppBar position="static" style={{ backgroundColor: "black", boxShadow: "0 0.0625rem 0.5rem 0 rgb(0 0 0 / 4%), 0 0.0625rem 0.3125rem 0 rgb(0 0 0 / 4%)" }}>

<Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
    
  
    <Box sx={{ width: "80%", height: "80p%" }}>
    
        <Toolbar sx={{ display: 'flex' , flexWrap: "wrap" }}>

            <img style={{
              background: "brown",
               marginBottom: "15px",
               borderRadius: "20px",
               borderBottom: "3px solid white"}} src={logo} width="160px" height="80px" alt="Logo" />
          

          <Link to='/' >HOME</Link>
          <Link to='/courses' >COURSES</Link>
          <Link to='/students'>STUDENTS LIST</Link>
          <Link to='/quiz'>QUIZ</Link>
          <Link to='/signup'>SIGNUP</Link>
          <Link to='/login'>LOGIN</Link>
        </Toolbar>
  
    </Box>
</Box>
</AppBar>

    </>
  );
}
export default Navbar;
