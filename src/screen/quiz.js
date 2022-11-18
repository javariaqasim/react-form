import Chip from "@mui/material/Chip";
import { sendData } from "../config/firebasemethods";
import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";

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
               style={{width: "70%", background:"white", borderRadius: "10px", boxSizing:" border-box",
               border: "none", height: "55px" , margin: "20px" , fontSize: "15px", color: "purple"}}
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
      </Box>
    </>
  );
}
export default Quiz;
