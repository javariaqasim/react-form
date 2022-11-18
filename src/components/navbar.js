


import { AppBar, Toolbar, Box, Typography, Button } from '@mui/material';
// import logo from "../images/logo.png";

import {Link} from "react-router-dom"



function Navbar() {


  return (
    <>
      <AppBar position="static" style={{ backgroundColor: "black", boxShadow: "0 0.0625rem 0.5rem 0 rgb(0 0 0 / 4%), 0 0.0625rem 0.3125rem 0 rgb(0 0 0 / 4%)" }}>

<Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
    
  
    <Box sx={{ width: "80%", height: "80p%" }}>


        <Toolbar sx={{ display: 'flex' , flexWrap: "wrap" }}>

   <h3> Learning Managment System</h3>

        {/* <Link to='/signup' >Signup</Link>
        <Link to='/signup' >Login</Link> */}

            {/* <img style={{
              background: "brown",
               marginBottom: "15px",
               borderRadius: "20px",
               borderBottom: "3px solid white"}} src={logo} width="160px" height="80px" alt="Logo" /> */}
          

   
        </Toolbar>

    </Box>
</Box>
</AppBar>

    </>
  );
}
export default Navbar;



