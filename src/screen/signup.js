import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { signUpUser } from "../config/firebasemethods";
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const [userName, setUsername] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoader] = useState(false);
  const navigate = useNavigate();
  let signUp = () => {
    setLoader(true);
    signUpUser({
      userName,
      lastname,
      email,
      password
    })
      .then((success) => {
        setLoader(false);
        console.log(success);
        navigate("/login");
      })
      .catch((error) => {
        setLoader(false);
        console.log(error);
      });
  };
  return (
    <>
<Box sx={{ textAlign: "center", marginTop: 2 }}> 
<Typography variant="p" sx={{fontWeight : "bold", fontSize : "2.6rem", color: "purple",textAlign: "center",textShadow: "4px 3px 1px gray"}} >SIGN UP </Typography>
</Box>
<div className="form">

<Box sx={{textAlign: "start"}}>
<Box sx={{ textAlign: "start", marginTop: 2 }}>
    <label className='label'>FirstName:</label><br />
    <input className="double" onChange={(e)=>setUsername(e.target.value)} sx={{ m: 1, width: "90%" }} type="text"  variant="standard" id="fullWidth" />
    </Box>

    <Box sx={{ textAlign: "start", marginTop: 2 }}>
    <label className='label'>LastName:</label><br />
    <input className="double" onChange={(e)=>setLastname(e.target.value)} sx={{m : 1, width: "90%" }} type="text"  variant="standard" id="fullWidth" />
    </Box>
    <Box sx={{ textAlign: "start", marginTop: 2 }}>
        <label className='label'>Email:</label><br />
        <input type="text" className="double"
        onChange={(e)=> setEmail(e.target.value)} sx={{m : 1, width: "90%" }}
        variant="standard"
        />
        </Box>

        <Box sx={{ textAlign: "start", marginTop: 2 }}>
        <label className='label'>Password:</label><br />
          <input
           type="password"
        onChange={(e)=> setPassword(e.target.value)} sx={{m : 1, width: "90%" }}
        variant="standard"
        />
        </Box>
        </Box>

        <Box sx={{marginTop: 2, textAlign: "center" }}>
        <button className="btn" disabled={isLoading} onClick={signUp} sx={{m : 1, width: "15%" }} >{isLoading ? <CircularProgress /> : "Sign Up"}{" "}</button>
        </Box>

        <br />

        <Box sx={{textAlign: "center" }}>
        <Link to="/login" style={{textDecoration : 'underline', color: "white"}}> 
        Already Have An Account</Link>
        </Box>




   
      </div>
    </>
  );
}
export default Signup;
