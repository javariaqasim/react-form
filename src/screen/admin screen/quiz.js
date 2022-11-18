import { Box, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {  getData, sendData } from "../../config/firebasemethods";

import SMButton from "../../components/SMButton";
import SMInput from "../../components/SMInput";
import SMSelect from "../../components/SMSelect";
import Checkbox from "@mui/material/Checkbox";
import SMGrid from "../../components/SMGrid";

function Quiz() {
  const [isCreateQuiz, setIsCreateQuiz] = useState(false);
  const [optionsArr, setOptionsArr] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [model, setModel] = useState({});
  const [question, setQuestion] = useState({});
  const [option, setOption] = useState("");
  const [quizList, setQuizList] = useState([]);

  let saveQuiz = () => {
    console.log(question);
    sendData(question, "quiz")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let getQuizData = () => {
    getData("quiz")
      .then((res) => {
        setQuizList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getQuizData();
  }, []);

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

  let arr = [
    {
      questionName: 'Question Name',
      duration: 30,
      marks: 50,
      questions: [
        {
          question: 'HTML Stands For',
          options: ['HyperTextMarkupLanguage', 'HyperTextMakeupLanguage', 'HoTMaiL'],
          correctAnswer: 'HyperTextMarkupLanguage'
        },
        {
          question: 'CSS Stands For',
          options: ['CascadingStyleSheet', 'CustomStyleSheet', 'CustomerSupportService'],
          correctAnswer: 'CascadingStyleSheet'
        },
        {
          question: 'JS Stands For',
          options: ['JavaStyle', 'JavaScript', 'JavaSheet'],
          correctAnswer: 'JavaScript'
        },
        {
          question: 'React is a _______ of JS',
          options: ['Framework', 'Reaction', 'Library'],
          correctAnswer: 'Library'
        },
      ]
    },
  ];

  let createQuiz = () => {
    console.log(model);
    setIsCreateQuiz(true);
  };
  let fillModel = (key, val) => {
    model[key] = val;
    setModel({ ...model });
  };
  let addOption = () => {
    setOptionsArr([...optionsArr, { value: option }]);
  };
  let submitQuestion = () => {
    question.options = optionsArr.map((x) => x.value);
    question.correctAns = optionsArr.find((x) => x.isChecked).value;

    console.log(question);
    setQuestions(...questions, question);
  };

  let lockQuiz = () => {
    model.questionsArray = questions;
    console.log(model);
  };

  return (
    <>
      <Box>
      <div><h1 style={{
                color: "purple",
                textAlign: "center",
                textShadow: "4px 3px 1px gray"
                
               }}>Quiz</h1></div>

                 
  
        <Box>
          
<div className="form">
                <div className="form-body">
              
              <label className='label'>Quiz Name:</label><br />
                <SMInput
                  onChange={(e) => fillModel("question", e.target.value)}
                  disabled={isCreateQuiz}
                  placeholder="quiz name"
                  
                /><br />
            
              <label className='label'>Quiz Duration:</label><br />
                <SMInput
                  onChange={(e) => fillModel("duration", e.target.value)}
                  disabled={isCreateQuiz}
                  placeholder="Quiz Duration"
                /><br />
             
              <label className='label'>Select Quiz:</label><br />
                <SMSelect
                  onChange={(e) => fillModel("course", e.target.value)}
                  disabled={isCreateQuiz}
                  datasource={[
                    {
                      id: "wm",
                      fullName: "Web And Mobile",
                    },
                  ]}
                /><br />
               <label className='label' >Quiz Marks:</label><br />
                <SMInput
                  onChange={(e) => fillModel("marks", e.target.value)}
                  disabled={isCreateQuiz}
                 placeholder="Quiz Marks"
                /><br />
                  <label className='label' >Security Key:</label><br />
                <SMInput
                  onChange={(e) => fillModel("securityKey", e.target.value)}
                  disabled={isCreateQuiz}
                  placeholder="Security Key"
                /><br />
                <br />
    
                <SMButton onClick={createQuiz} label="Create Quiz" />
                </div>
                </div>
         
           
                 
<div className="form">
                <div className="form-body">
          {isCreateQuiz && (
            <Grid container>
              <label className='label'>Write The Question:</label><br />
                <SMInput
                  onChange={(e) => {
                    setQuestion({ ...question, question: e.target.value });
                  }}
                  placeholder="Question"
                /><br />
             
              <Grid md={12} item>
                {optionsArr.map((x, i) => (
                  <>
                    <Checkbox
                      onChange={(e) => (x.isChecked = e.target.value)}
                    />{" "}
                    <Typography key={i}>{x.value}</Typography>
                  </>
                ))}
              </Grid>
           
              <label className='label'>Option:</label><br />
              <br />
                <SMInput
                  onChange={(e) => setOption(e.target.value)}
                  placeholder="Option"
                />
      
        
              
                <SMButton onClick={addOption} label="add" />
             
           
            
                <SMButton onClick={saveQuiz} label="Submit Question" />
              
                <SMButton onClick={lockQuiz} label="Lock Quiz" />
        
            </Grid>
           
          )}
               </div>
             </div>
          <Container>
            <SMGrid
              datasource={quizList}
              onRowClick={(e) => console.log(e)}
              Cols={[
                {
                  key: "id",
                  displayName: "Id",
                },
                {
                  key: "question",
                  displayName: "Question",
                },
              ]}
            />
          </Container>
        </Box>
      
      </Box>

   
 </>
   
  );
}
export default Quiz;







