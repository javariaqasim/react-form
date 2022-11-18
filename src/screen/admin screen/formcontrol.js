import { Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box } from "@mui/system";
import SMInput from "../../components/SMInput";
import SMSelect from "../../components/SMSelect";
import { sendData } from "../../config/firebasemethods";

function Form() {
    const [model, setModel] = useState({});

    const addFC = () => {
        sendData(model, `formcontrol/`)
            .then((success) => {
                console.log(success);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    let fillModel = (key, val) => {
        model[key] = val;
        setModel({ ...model });
        console.log(model);
    };
    return (
        <>
            <Box sx={{ padding: 2, margin: 0 }}>
          <h1 style={{color: "purple",textAlign: "center",textShadow: "4px 3px 1px gray"}}>Form Control</h1>
        </Box>


        
<div className="form">
<div className="form-body">
            <Box sx={{ padding: 2 }}>
             
                 


<label className='label'>Is Form Open:</label><br /><select className="double" required={true} value={model.isFormOpen} onChange={(e) => fillModel('isFormOpen', e.target.value)} defaultValue="Yes/No">
                        <option defaultValue>Select Yes/No</option>
                        <option >Yes</option>
                        <option >No</option>
                
                    </select><br />
               

                    <label className='label'>open In Cities :</label><br /> 
                    <select className="double" required={true} onChange={(e) => fillModel('openInCities', e.target.value)} defaultValue="Select City">
                        <option defaultValue>Select City</option>
                        <option >Karachi</option>
                        <option >Lahore</option>
                        <option>Punjab</option>
                        <option>Sialkot</option>
                        <option>Peshawar</option>
                        <option>Multan</option>
                        <option>Rawalpindi</option>
                        <option>Quetta</option>
                    </select><br />




                    <label className='label'>Course:</label><br /><select className="double" required={true} onChange={(e) => fillModel('course', e.target.value)} defaultValue="Select Course">
                        <option defaultValue>Select Course</option>
                        <option >web & mobile</option>
                        <option >Cloud Computing</option>
                        <option>Project Management</option>
                        <option>Business Intelligence</option>
                        <option>Networking</option>
                        <option>Software Development</option>
                        <option>DevOps</option>
                        <option>Cyber Security</option>
                    </select><br />


                    <label className='label'>Date Of Admission Start:</label><br /> <input className="double"type="text" value={model.dateOfAdmissionStart} onChange={(e) => fillModel('dateOfAdmissionStart', e.target.value)} placeholder="dateOfAdmissionStart..." /><br />
                 
                    <label className='label'>Date Of Admission End:</label><br /> <input className="double"type="text" value={model.dateOfAdmissionStart} onChange={(e) => fillModel('dateOfAdmissionEnd', e.target.value)} placeholder="dateOfAdmissionEnd..." /><br />
                 
             
            </Box>


            <div class="footer">
          <input class="btn" onClick={addFC} type="submit" value="Submit" />
                    </div>

            </div>
            </div>
        </>
    );
}
export default Form;
