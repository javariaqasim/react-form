import {
    Button,
    Container,
    Divider,
    Grid,
    Paper,
    Typography,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import Avatar from "@mui/material/Avatar";
  import { checkUser,logoutUser } from "../config/firebasemethods";
  import { useNavigate, Link } from "react-router-dom";
  import { useState, useEffect } from "react";
  
import loaderImg from "../assets/loader.gif";
  
  function StudentProfile() {

const [loader, setLoader] = useState(false);

    const navigate = useNavigate();

    const logout = () => {
      logoutUser()
        .then(() => {
          navigate("/login");
        })
        .catch((err) => {
          console.log(err);
        });
    };


        let checkAuth = () => {
        setLoader(true);
        checkUser()
          .then(() => {
            setLoader(false);
          })
          .catch((err) => {
            setLoader(false);
            navigate("/login");
          });
      };
    
      useEffect(() => {
        checkAuth();
      }, []);


    return loader ? (
      <img src={loaderImg} />
    ) : (
      <>
        <div
          style={{
            width: "100%",
            minHeight: "100vh",
            height: "100%",
            margin: 0,
          }}
          className="bgLight"
        >
                <div>
            <h1 style={{
                color: "purple",
                textAlign: "start",
                textShadow: "4px 3px 1px gray",
                margin: "10px",
                padding: "5px"
                
               }}>Student profile:</h1></div>
          <Container>
            <Grid container>
              <Grid sx={{ padding: 1 }} md={3} item>
                <Paper sx={{ padding: 2, textAlign: "center" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      src="" 
                      sx={{ width: 100, height: 100 }}
                    />
                  </Box>
                  <Box>
                    <h3>Javaria qasim</h3>
  
                    <Box sx={{ padding: 2 }}>
                      <Typography sx={{ fontWeight: "bold" }} variant="p">
                        Cource
                      </Typography>
                    </Box>
                    <Divider />
                    <Box sx={{ padding: 2 }}>
                      <Typography sx={{ fontWeight: "bold" }} variant="p">
                        Father Name
                      </Typography>
                    </Box>
                    <Divider />
                    <Box sx={{ padding: 2 }}>
                      <Typography sx={{ fontWeight: "bold" }} variant="p">
                        CNIC
                      </Typography>
                    </Box>
                    <Divider />
                    <Box sx={{ padding: 2 }}>
                      <Typography sx={{ fontWeight: "bold" }} variant="p">
                        Contact
                      </Typography>
                    </Box>
                    <Divider />
                    <Box sx={{ paddingY: 4 }}>
                      <button onClick={logout} className="btn">Logout</button>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
              <Grid sx={{ padding: 1 }} md={9} item>
                <Paper sx={{ padding: 2 }}>
                  <h1>Result</h1>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </div>
      </>
    );
  }
  
  export default StudentProfile;

