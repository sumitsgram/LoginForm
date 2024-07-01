import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import AddStudent from "./components/AddStudent";
import ViewStudents from "./components/ViewStudents";
import StudentDetails from "./components/StudentDetails";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/add-student/:userId" element={<AddStudent />} />
          <Route path="/view-students/:userId" element={<ViewStudents />} />
          <Route
            path="/student-details/:studentId"
            element={<StudentDetails />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
