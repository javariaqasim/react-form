import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Route, Router, Routes, useNavigate } from "react-router-dom";
import { logoutUser } from "../../config/firebasemethods";
import { Menu, MenuItem } from "@mui/material";
import { AccountCircle, Home } from "@mui/icons-material";



import Quiz from "./quiz";
import Createresult from "./createresult";
import Countries from "./countries";
import Cities from "./cities";
import Courselist from "./courselist"
import Trainerlist from "./trainerlist";
import Formcontrol from "./formcontrol";

const drawerWidth = 240;

function MainLyout(props) {
  const { window } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [menuLinks, setMenuLinks] = React.useState([

      {
        routeName: "quiz",
          displayName: "quiz",
       
      },
      {
        routeName: "Createresult",
        displayName: "Createresult",
      
    },
    {
      routeName: "Courselist",
      displayName: "Courselist",
    
  },
  {
    routeName: "Trainerlist",
    displayName: "Trainerlist",
  
},
{
  routeName: "Formcontrol",
 displayName: "Formcontrol",

},
    {
      routeName: "Countries",
     displayName: "countries",
  
    },
    {
      routeName: "Cities",
      displayName: "cities",
    },
  

  ]);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  let clickNavigate = (routeName) => {
    navigate(routeName);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {menuLinks.map((x, i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton onClick={() => clickNavigate(x.routeName)}>
              <ListItemIcon>
                {i % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={x.displayName} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const logout = () => {
    logoutUser()
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
      style={{background:"black"}}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
           
            <MenuIcon />
          </IconButton>
          <Typography  variant="h6" noWrap component="div" style={{flexGrow: 1, display: "flex", justifyContent: "space-between", fontSize: 30}}>
            Admin
          </Typography>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setAnchorEl(!anchorEl)}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(!anchorEl)}
            >
              <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Routes>
        <Route path="/formcontrol" element={<Formcontrol />} />
        <Route path="/trainerlist" element={<Trainerlist />} />
        <Route path="/courselist" element={<Courselist />} />
                        <Route path="/quiz" element={<Quiz />} />
                        <Route path="/createresult" element={<Createresult />} />
                        <Route path="/countries" element={<Countries />} />
                        <Route path="/cities" element={<Cities />} />
        </Routes>
      </Box>
    </Box>
  );
}

MainLyout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default MainLyout;
