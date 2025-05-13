import "./App.css";
import { Routes, Route } from "react-router-dom";
import ManagerDashbord from "./pages/ManagerDashbord";
import CreateTask from "./pages/CreateTask";
// import EmployeesDashbord from "./pages/EmployeesDashbord";
import Login from "./pages/Login";
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signinpage" element={<SignInPage />} />
        <Route path="/createtask" element={<CreateTask />} />
        {
          <Route path="/managerdashbord" element={<ManagerDashbord />} />
          /* <Route path="/employeesdashbord" element={<EmployeesDashbord />} /> */
        }
      </Routes>
    </>
  );
}

export default App;
