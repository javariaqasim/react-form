import { Box, Button, TextField,Typography } from "@mui/material";
import { useState } from "react";
import { loginUser } from "../config/firebasemethods";
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate,Link  } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoader] = useState(false);
  const navigate = useNavigate();

  let login = () => {
    setLoader(true);
    loginUser({
      email,
      password,
    })
      .then((success) => {
        setLoader(false);
        console.log(success);
        navigate("/admin");
        // navigate(`/${success.id}`);
      })
      .catch((err) => {
        setLoader(false);
        console.log(err);
      });
  };
  return (
    <>
            <Box sx={{ textAlign: "center", marginTop: 2 }}> 
<Typography variant="p" sx={{fontWeight : "bold", fontSize : "2.6rem", color: "purple",textAlign: "center",textShadow: "4px 3px 1px gray"}} >LOG IN </Typography>
</Box>

<div className="form">
<Box sx={{ textAlign: "center" }}>

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

        <Box sx={{marginTop: 2, textAlign: "center" }}>
                        <button disabled={isLoading} onClick={login} sx={{ m: 1, width: "15%" }} className="btn"> {isLoading ? <CircularProgress /> : "Login"}</button>
                    </Box>

                    <br />
                    <Box sx={{ marginTop: 1, textAlign: "center" }}>
                   <Link style={{textDecoration : 'underline', color: "white"}} to="/">SignUp Account</Link>
                   </Box>

</Box>
      </div>
    </>
  );
}
export default Login;
