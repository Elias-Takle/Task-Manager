import "./App.css";
import { Routes, Route } from "react-router-dom";
import ManagerDashbord from "./pages/ManagerDashbord";
import EmployeesDashbord from "./pages/EmployeesDashbord";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Login />
      <Routes>
        <Route path="/managerdashbord" element={<ManagerDashbord />} />
        <Route path="/employeedashbord" element={<EmployeesDashbord />} />
      </Routes>
    </>
  );
}

export default App;
