import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import SMButton from "../../components/SMButton";
import SMSelect from "../../components/SMSelect";
import SMSwitch from "../../components/SMSwitch";
import { getData, sendData } from "../../config/firebasemethods";

function CreateResult() {
  const [model, setModel] = useState({});
  const [courceStatus, setCourceStatus] = useState(false);
  const [resultData, setResultData] = useState([
    {
      name: "ABC",
      marks: 50,
      rollNum: "1",
      result: "Pass",
    },
    {
      name: "ABC",
      marks: 40,
      rollNum: "2",
      result: "Pass",
    },
    {
      name: "ABC",
      marks: 81,
      rollNum: "3",
      result: "Pass",
    },
    {
      name: "ABC",
      marks: 97,
      rollNum: "4",
      result: "Pass",
    },
    {
      name: "ABC",
      marks: 88,
      rollNum: "5",
      result: "Pass",
    },
    {
      name: "ABC",
      marks: 80,
      rollNum: "6",
      result: "Pass",
    },
    {
      name: "ABC",
      marks: 64,
      rollNum: "7",
      result: "Pass",
    },
    {
      name: "ABC",
      marks: 60,
      rollNum: "8",
      result: "Pass",
    },
    {
      name: "ABC",
      marks: 75,
      rollNum: "9",
      result: "Pass",
    },
    {
      name: "ABC",
      marks: 70,
      rollNum: "10",
      result: "Pass",
    },
  ]);
  const [resultTableData, setResultTableData] = useState([]);
  const [loader, setLoader] = useState(false);

  let submitForm = () => {
    setLoader(true);
    model.isShowResult = courceStatus;
    model.result = resultData;
    console.log(model);
    sendData(model, "results")
      .then((res) => {
        setLoader(false);
        console.log(res);
      })
      .catch((err) => {
        setLoader(false);
        console.log(err);
      });
  };

  let getResultData = () => {
    getData("results")
      .then((res) => {
        console.log(res);
        setResultTableData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getResultData();
  }, []);

  return (
    <>
            <div>
            <h1 style={{
                color: "purple",
                textAlign: "center",
                textShadow: "4px 3px 1px gray"
                
               }}>CREATE RESULT</h1></div>

{/* <div className="form">
                <div className="form-body"> */}
      <Box sx={{ padding: 2 }}>
        <Grid container>
          <Grid md={6} item>
            <SMSwitch
              value={courceStatus}
              onChange={(e) => setCourceStatus(e.target.checked)}
              label="Cource"
            />
          </Grid>
          <Grid md={6} item>
            <SMSelect
              label="Cource"
              onChange={(e) => setModel({ ...model, cource: e.target.value })}
              datasource={[
                {
                  id: "wm",
                  fullName: "Web And Mobile",
                },
                {
                  id: "gd",
                  fullName: "Graphics Designing",
                },
              ]}
            />
          </Grid>
          <Grid item md={12}>
            <Box>
              <table>
                {resultData.map((x, i) => (
                  <tr>
                    <td>{x.name}</td>
                    <td>{x.rollNum}</td>
                    <td>{x.result}</td>
                    <td>{x.marks}</td>
                  </tr>
                ))}
              </table>
            </Box>
          </Grid>
          <Grid md={6} item>
            <SMButton loading={loader} label="Submit" onClick={submitForm} />
          </Grid>
        </Grid>
        <Box>
          <table>
            {resultTableData.map((x, i) => (
              <tr>
                <td>{x.result.length}</td>
                <td>
                  <SMSelect
                    valuefield="id"
                    displayField="fullName"
                    value={x.cource}
                    datasource={[
                      {
                        id: "wm",
                        fullName: "Web And Mobile",
                      },
                      {
                        id: "gd",
                        fullName: "Graphics Designing",
                      },
                    ]}
                  />{" "}
                </td>
                <td>
                  <SMSwitch
                    onChange={(e) => {
                      resultTableData[i].isShowResult = e.target.checked;
                    }}
                    value={x.isShowResult}
                  />
                </td>
              </tr>
            ))}
          </table>
        </Box>
      </Box>
      {/* </div>
      </div> */}
    </>
  );
}
export default CreateResult;
