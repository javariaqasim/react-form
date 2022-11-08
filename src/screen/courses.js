import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  CircularProgress,
  Grid,
  InputAdornment,
  Typography,
} from "@mui/material";


import { sendData } from "../config/firebasemethods";
// import Navbar from '../components/navbar'

function Course() {
  const params = useParams();
  const [txt, setTxt] = useState("");
  const [model, setModel] = useState({});
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  const addCourse = () => {
    sendData(model, `courses/`)
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
 {/* <Navbar /> */}
               <div>
            <h1 style={{
                color: "purple",
                textAlign: "center",
                textShadow: "4px 3px 1px gray"
                
               }}>Course Form</h1></div>

                <div className="form">
                <div className="form-body">

                <label className='label'>Course Name:</label><br />
                <select type="text" className="double" required={true} onChange={(e) => fillModel('courseName', e.target.value)} defaultValue="Select Course">
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

                

              <label className='label'>Course Duration:</label><br />
              <input className="double" placeholder="Enter Duration......"
              fullWidth={true}
              label="Course Duration(months)"
              required={true}
              type="number"
              value={model.courseDuration} onChange={(e) => fillModel('courseDuration', e.target.value)}
            /><br />

      
                <label className='label'>Is Form Open:</label><br /><select className="double" required={true} value={model.isFormOpen} onChange={(e) => fillModel('isFormOpen', e.target.value)} defaultValue="Yes/No">
                        <option defaultValue>Select Yes/No</option>
                        <option >Yes</option>
                        <option >No</option>
                
                    </select><br />

                <label className='label'>No. Of Quiz:</label><br />


                <select type="text" className="double" required={true}
              onChange={(e) => fillModel('noOfQuiz', e.target.value)}defaultValue="Select No of Quiz">
                        <option defaultValue>Select No of Quiz</option>
                        <option >1</option>
                        <option >2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select><br />

          
            

                <label className='label'>Fee In Rupees:</label><br /> <input className="double"type="text" required={true} value={model.feeInRupees} onChange={(e) => fillModel('feeInRupees', e.target.value)} placeholder="RS...." /><br />
                
                <label className='label'>Lead Trainer Id:</label><br /> <input className="double"type="text" value={model.leadTrainerId} onChange={(e) => fillModel('leadTrainerId', e.target.value)} placeholder="Enter your lead trainer" /><br />


                <label className='label'>Assistant Trainers:</label><br />
            <input type="text" className="double" placeholder="Enter your assistant trainer"
              required={true}
              onChange={(e) => fillModel('assistantTrainers', e.target.value)}
              datasource={[
                {
                  id: "b",
                  fullName: ".....",
                },
                {
                  id: "a",
                  fullName: "--------",
                },
                {
                  id: "g",
                  fullName: ",,,,,,,",
                },
              ]}
            /><br />
      
      <div class="footer">
          <input class="btn" onClick={addCourse} type="submit" value="Submit" />
                    </div>

      </div>
      </div>

    </>



 
  );
}
export default Course;
