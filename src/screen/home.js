import {  useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { sendData } from "../config/firebasemethods";
// import Navbar from '../components/navbar'


function Home() {
  const params = useParams();
  const [txt, setTxt] = useState("");
  const [model, setModel] = useState({});
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();
  const [values, setValues] = useState({});
  const [uid, setUid] = useState("");
  const [isFeeSubmitted, setIsFeeSubmitted] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [isActive, setIsActive] = useState(false);

  let [dateOfBirth, setDateOfBirth] = useState(new Date("2000-01-11"))

    // let key = Date.now();
    let time = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
    let registrationDate = `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`;
    let registrationYear = `${new Date().getFullYear()}`;

    let fillValues = (key, val) => {
        values[key] = val;
        setValues({ ...values })
    }

    const handleDateChange = (date) => {
      setDateOfBirth(date)
      fillValues('dateOfBirth', date)
  }

  const addStudent = () => {
        // values.key = key;
        values.time = time;
        values.registrationDate = registrationDate;
        values.registrationYear = registrationYear;
        setUid(values.id);
        setIsFeeSubmitted(values.isFeeSubmitted);
        setIsApproved(values.isApproved);
        setIsActive(values.isActive);
        // console.log(values);


    sendData(model, `students/`)
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
                
               }}>REGISTRATION FORM</h1></div>

<div className="form">
                <div className="form-body">


                <label className='label'>FirstName :</label><br /> <input className="double"type="text" required={true} value={model.firstName} onChange={(e) => fillModel('firstName', e.target.value)}  placeholder="Enter your FirstName..." /><br />

                <label className='label'>LastName :</label><br /> <input className="double"type="text" value={model.lastName} onChange={(e) => fillModel('lastName', e.target.value)} placeholder="Enter your LastName..." /><br />

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

                    <label className='label label1' >Section:</label><br /><select className="double" required={true}  onChange={(e) => fillModel('sec', e.target.value)}defaultValue="Select Section">
                        <option defaultValue>Select Section</option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                    </select><br />

                    <label className='label'>Contact:</label><br /> <input className="double"type="text" value={model.contactName} onChange={(e) => fillModel('contactName', e.target.value)} placeholder="Enter your phone no..." /><br />

                    <label className='label'> CNIC:</label><br />
                    <input type="text" className="double"  data-inputmask="'mask':'99999-9999999-9'"  placeholder="XXXXX-XXXXXXX-X"  name="cnic"  value={model.cnicName} onChange={(e) => fillModel('cnicName', e.target.value)} required={true} /><br />
                    <label className='label'>Father Name:</label><br /> <input className="double" type="text" value={model.fatherName} onChange={(e) => fillModel('fatherName', e.target.value)} placeholder="Enter your father name..." /><br />

                    <label className='label'>Father Contact:</label><br /> <input className="double" type="text" required={true} value={model.fatherContact} onChange={(e) => fillModel('fatherContact', e.target.value)} placeholder="Enter your father phone no..." /><br />
                    <label className='label'>Father CNIC:</label> <br />
                    <input type="text" className="double" data-inputmask="'mask': '99999-9999999-9'"  placeholder="XXXXX-XXXXXXX-X"  name="cnic"   value={model.fatherCnic} onChange={(e) => fillModel('fatherCnic', e.target.value)} /><br />

                    <label className='label'>Emergency Contact:</label><br /> <input type="text" className="double" required={true}  value={model.emergencyContact} onChange={(e) => fillModel('emergencyContact', e.target.value)} placeholder="Enter your emergency phone no..." /><br />
                   

                    <label className='label'>Date of Birth:</label><br />
                    <input type="date"  value={model.dateofbirth} onChange={(e) => fillModel('date of birth', e.target.value)} id="date" defaultValue="2003-12-10" sx={{ width: 220 }}
                    InputLabelProps={{shrink: true, }} />
                 
        

      <div class="footer">
          <input class="btn" onClick={addStudent} type="submit" value="Submit" />
                    </div>

      </div>
      </div>
    </>
  );
}
export default Home;
