import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { getData } from "../../config/firebasemethods";

function Courses() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData("courselist")
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
            <Box sx={{ padding: 2, margin: 0 }}>
          <h1 style={{
                color: "purple",
                textAlign: "center",
                textShadow: "4px 3px 1px gray"
                
               }}>Course List</h1>
        </Box>
        <div className="form">
                <div className="form-body">
            <table>
                <tr>
                    <th>Course Name</th>
                    <th>Course Duration</th>
                    {/* <th>Assistant Trainers</th> */}
                    <th>Lead Trainer Id</th>
                </tr>
                <tbody>
                    {data && data.length > 0 ? data.map((x) => <tr>
                        <td>{x.courseName}</td>
                        <td>{x.courseDuration}</td>
                        {/* <td>{x.assistantTrainers}</td> */}
                        <td>{x.leadTrainerId}</td>
                    </tr>) : null}
                </tbody>
            </table>

            </div>
            </div>

         
            <h1 style={{
                color: "purple",
                textAlign: "center",
                textShadow: "4px 3px 1px gray"
                
               }}>Results Update</h1>


                <div className="form">
                <div className="form-body">
            <table>
                <tr>
                    <th>Course Name</th>

                </tr>
                <tbody>
                    {data && data.length > 0 ? data.map((x) => <tr>
                        <td>{x.courseName}</td>

                    </tr>) : null}
                </tbody>
            </table>
            </div>
            </div>
        </>
    );
}
export default Courses;