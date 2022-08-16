import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../src/components/dashboard/Dashboard";
import "./App.css";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Navbar from "./components/layout/Navbar";
import CreateProject from "./components/projects/CreateProject";
import ProjectDetails from "./components/projects/ProjectDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/createproject" element={<CreateProject />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
