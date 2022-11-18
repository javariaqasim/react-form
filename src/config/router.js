import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";



import Form from "../screen/form";
import Courses from "../screen/courses";
import Admin from "../screen/admin";
import Quiz from "../screen/quiz";
import Signup from "../screen/signup";
import Login from "../screen/login";
import Result from "../screen/result";
import Studentprofile from "../screen/studentprofile";
import Trainerform from "../screen/trainerform";
import  Dashboard  from "../screen/dashboard";

function AppRouter() {
  return (
    <>
      <Router>
     
        <Routes>
      
          <Route path="/" element={<Form />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/trainerform" element={<Trainerform />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/result" element={<Result />} />
          <Route path="admin/*" element={<Admin />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/studentprofile/:id" element={<Studentprofile />} />
        
        </Routes>
      </Router>
    </>
  );
}
export default AppRouter;
