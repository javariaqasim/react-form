import { useEffect, useState } from "react";
import { getData } from "../config/firebasemethods";
import {  Typography } from "@mui/material";
import { Box } from "@mui/system";

// import Navbar from '../components/navbar'


function StudentList() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData("students")
            .then((res) => {
                console.log(res);
                setData(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <>
{/* <Navbar /> */}
<Box sx={{ textAlign: "center", marginTop: 2 }}> 
<Typography variant="p" sx={{fontWeight : "bold", fontSize : "2.6rem", color: "purple",textAlign: "center",textShadow: "4px 3px 1px gray"}} >Student List </Typography>
</Box>

<div className="form">

            <table>
                <tr style={{color: "aqua"}}>
                    <th >First Name:</th>
                    <th >Last Name:</th>
                    <th>Contact Number:</th>
                    <th>CNIC: </th>
                    <th>Father Name:</th>

                </tr>
                <tbody>
                    {data && data.length > 0 ? data.map((x) => <tr>
                        <td>{x.firstName}</td>
                        <td>{x.lastName}</td>
                        <td>{x.contactName}</td>
                        <td>{x.cnicName}</td>
                        <td>{x.fatherName}</td>
                    </tr>) : null}
                </tbody>
            </table>
        

            </div>
        </>
    );
}
export default StudentList;