import Chip from "@mui/material/Chip";
import { sendData } from "../config/firebasemethods";
import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";
import SMButton from "../components/SMButton";
import SMInput from "../components/SMInput";
import SMSelect from "../components/SMSelect";
import Checkbox from "@mui/material/Checkbox";

function Quiz() {
  const [isCreateQuiz, setIsCreateQuiz] = useState(false);
  const [optionsArr, setOptionsArr] = useState(["Option 1"]);
  // const [questions, setQuestions] = useState([]);
  const [model, setModel] = useState({});
  const [question, setQuestion] = useState({});
  const [option, setOption] = useState("");
  const [counter, setCounter] = useState(240);
  const [indexNumber, setIndexNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

    const [questions, setQuestions] = useState([
    {
      question: "Html Stands For _______________________",
      options: [
        "Hyper Text Makeup Language",
        "html",
        "Case Cading Style Sheet",
        "Hypertext markup language",
      ],
      correctAns: "Hypertext markup language",
    },
    {
      question: "Css Stands For _______________________",
      options: [
        "Casecading Style Sheet",
        "Java",
        "Ram",
        "Hypertext markup language",
      ],
      correctAns: "Casecading Style Sheet",
    },
    {
      question: "Js Stands For _______________________",
      options: ["Java Style", "Java Script", "Script", "Script Src"],
      correctAns: "Java Script",
    },
    {
      question: "Dom Stands For _______________________",
      options: ["Document Object Model", "html", "Css", "Java"],
      correctAns: "Document Object Model",
    },
    {
      question: "Ram Stands For _______________________",
      options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
      correctAns: "Random Acccess Memory",
    },
  ]);

  // let arr = [
  //   {
  //     id: 1,
  //     display: "abc",
  //   },
  //   {
  //     id: 2,
  //     display: "abc",
  //   },
  //   {
  //     id: 3,
  //     display: "abc",
  //   },
  // ];

  let createQuiz = () => {
    setIsCreateQuiz(true);
  };

  let checkQuestion = (a, b) => {
    if (a == b) {
      setScore(score + 1);
    }
    if (indexNumber + 1 == questions.length) {
      setShowResult(true);
    } else {
      setIndexNumber(indexNumber + 1);
    }
  };

  const addQuiz = () => {
    sendData(model, `quiz/`)
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
  };
  let addOption = () => {
    setOptionsArr([...optionsArr, option]);
  };

  return (
    <>
    
      <Box>

      <div>
            <h1 style={{
                color: "purple",
                textAlign: "center",
                textShadow: "4px 3px 1px gray"
                
               }}>Quiz</h1></div>
      
        <Box>
          <Grid container>
            <Grid md={6} item>
              <Box sx={{ padding: 2 }}>
                <SMInput
                  onChange={(e) => fillModel("question", e.target.value)}
                  disabled={isCreateQuiz}
                  label="Quiz Name"
                />
              </Box>
            </Grid>
            <Grid md={3} item>
              <Box sx={{ padding: 2 }}>
                <SMInput
                  onChange={(e) => fillModel("duration", e.target.value)}
                  disabled={isCreateQuiz}
                  label="Quiz Duration"
                />
              </Box>
            </Grid>
            <Grid md={3} item>
              <Box sx={{ padding: 2 }}>
                <SMSelect
                  onChange={(e) => fillModel("course", e.target.value)}
                  disabled={isCreateQuiz}
                  datasource={[
                    {
                      id: "wm",
                      fullName: "Web And Mobile",
                    },
                    {
                      id: "gd",
                      fullName: "Graphic Designed",
                    },
                  ]}
                />
              </Box>
            </Grid>
            <Grid md={12} item>
              <Box>
                <SMButton onClick={createQuiz} label="Create Quiz" />
              </Box>
            </Grid>
          </Grid>
          {isCreateQuiz && (
            <Grid container>
              <Grid md={12} item>
                <SMInput
                  onChange={(e) => {
                    setQuestion({ ...question, question: e.target.value });
                  }}
                  label="Question"
                />
              </Grid>
              <Grid md={12} item>
                {optionsArr.map((x, i) => (
                  <>
                    <Checkbox
                      onChange={(e) => (x.isChecked = e.target.value)}
                    />{" "}
                    <Typography key={i}>{x}</Typography>
                  </>
                ))}
              </Grid>
              <Grid md={8} item>
                <SMInput
                  onChange={(e) => setOption(e.target.value)}
                  label="Option"
                />
              </Grid>

              <Grid md={4} item>
                <SMButton onClick={addOption} label="add" />
              </Grid>
              <Grid md={12} item>
                <SMButton class="btn" label="Submit Question" />
                <SMButton label="Lock Quiz" />
              </Grid>
            </Grid>
          )}


        </Box>
      </Box>
      <div className="form">
      <Box>
      <Box sx={{ textAlign: "center", marginTop: 2 }}> 
<Typography variant="p" sx={{fontWeight : "bold", fontSize : "2.6rem", color: "purple",textAlign: "center",textShadow: "4px 3px 1px gray"}} > <h1>PERCENTAGE Is: {(score/questions.length)*100}</h1></Typography>
</Box>
        <Box sx={{ padding: 1 }}>
          <Typography  variant="h6">
            Question # {indexNumber + 1}/{questions.length}
          </Typography>
        </Box>
        <Box sx={{ padding: 1 }}>
          <Typography variant="h5">
            {questions[indexNumber].question}
          </Typography>
        </Box>
        <Box>
          <Grid container>
            {questions[indexNumber].options.map((x, i) => (
              <Grid key={i} item md={6}>
                <Chip
                  onClick={() =>
                    checkQuestion(x, questions[indexNumber].correctAns)
                  }
                  label={x}
                />
              </Grid>
            ))}
          </Grid>
          <div class="footer">
          <input class="btn" onClick={addQuiz} type="submit" value="Submit" />
                    </div>
        </Box>        
      </Box>
      </div>
    </>
  );
}
export default Quiz;
