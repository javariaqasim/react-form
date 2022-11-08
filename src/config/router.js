import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

import Home from "../screen/home";
import Courses from "../screen/courses";
import Students from "../screen/students";
import Admin from "../screen/admin";
import Quiz from "../screen/quiz";
import Signup from "../screen/signup";
import Login from "../screen/login";
import Dashboard from "../screen/Dashboard";
import Result from "../screen/result";
import Createresult from "../screen/createresult";

function AppRouter() {
  return (
    <>
      <Router>
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/students" element={<Students />} />
          <Route path="/result" element={<Result />} />
          <Route path="/createresult" element={<Createresult />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}
export default AppRouter;
