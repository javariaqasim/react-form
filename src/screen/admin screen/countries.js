import { Grid } from "@mui/material"
import { Container } from "@mui/system"
import { useState } from "react"
import SMInput from "../../components/SMInput"
import SMSelect from "../../components/SMSelect"
import SMButton from "../../components/SMButton"
import { getData, sendData } from "../../config/firebasemethods"
function Countries() {
    const [model, setModel] = useState({});
  
    let saveCurrency = () => {
      console.log(model);
      sendData(model, "countries")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    return (
      <>
        <div>

        <div>
            <h1 style={{
                color: "purple",
                textAlign: "center",
                textShadow: "4px 3px 1px gray"
                
               }}>Countries</h1></div>


<div className="form">
                <div className="form-body">
        
          <Container>
          
              <label className='label'>Country Name:</label><br />
                <SMInput 
                 placeholder="Country Name"
                  onChange={(e) =>
                    setModel({ ...model, countryName: e.target.value })
                  }
                /><br />
          
          <label className='label'>Country Code:</label><br />
                <SMInput
                   placeholder="Country Code"
                  onChange={(e) =>
                    setModel({ ...model, countryCode: e.target.value })
                  }
                /><br />
             
             <label className='label'>Currency:</label><br />
                <SMInput
                 placeholder="Currency"
                  onChange={(e) =>
                    setModel({ ...model, currency: e.target.value })
                  }
                /><br />
                <br />
        
        <div class="footer">
                <SMButton  onClick={saveCurrency} label="Save" />

                </div>
        
          </Container>
        </div>
        </div>
        </div>
      </>
    );
  }
  export default Countries;
  

