
import { Container } from "@mui/system"
import { useEffect, useState } from "react"
import SMInput from "../../components/SMInput"
import SMSelect from '../../components/SMSelect'
import SMButton from "../../components/SMButton"
import SMGrid from "../../components/SMGrid"
import { getData, sendData } from "../../config/firebasemethods"


// import { Grid } from "@mui/material";
// import { Container } from "@mui/system";
// import { useEffect, useState } from "react";
// import SMButton from "../../config/components/SMButton";
// import SMGrid from "../../config/components/SMGrid";
// import SMInput from "../../config/components/SMInput";
// import SMSelect from "../../config/components/SMSelect";
// import { getData, sendData } from "../../config/firebasemethods";

function Cities(){
    const [model, setModel] = useState({});
    const [citiesList, setCitiesList] = useState([]);
  
    let saveCity = () => {
      console.log(model);
      sendData(model, "cities")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    let getCityData = () => {
      getData("cities")
        .then((res) => {
          setCitiesList(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    useEffect(() => {
      getCityData();
    }, []);
  
    return(
        <>

<div>
<div>
            <h1 style={{
                color: "purple",
                textAlign: "center",
                textShadow: "4px 3px 1px gray"
                
               }}>Cities</h1></div>
               
<div className="form">
                <div className="form-body">
        <Container>
        <label className='label'>Country Name:</label><br />
              <SMSelect
                displayField="countryName"
                valueField="countryCode"
                nodeName="countries"
                onChange={(e) =>
                  setModel({ ...model, countryCode: e.target.value })
                }
              /><br />
          
          
           
          <label className='label'>City Name:</label><br />
              <SMInput
               placeholder="City Name"
                onChange={(e) =>
                  setModel({ ...model, cityName: e.target.value })
                }
              /><br />
             
              <label className='label'>City Code:</label><br />
        
              <SMInput
                placeholder="City Code"
                onChange={(e) =>
                  setModel({ ...model, cityCode: e.target.value })
                }
              /><br />
                     <br />
        
        <div class="footer">
           
              <SMButton onClick={saveCity} label="Save" />
              </div>
  
        </Container>
        <Container>
          <SMGrid
            datasource={citiesList}
            Cols={[
              {
                key: "id",
                displayName: "Id",
              },
              {
                key: "cityName",
                displayName: "City Name",
              },
              {
                key: "cityCode",
                displayName: "City Code",
              },
              {
                key: "countryCode",
                displayName: "Country Code",
              },
            ]}
          />
        </Container>
      </div>

      </div>
      </div>

        </>
    )
}

export default Cities