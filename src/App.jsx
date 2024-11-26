import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layouts/Layout";
import CompanyProfile from "./Pages/CompanyProfile";
import UserList from "./Pages/UserList";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<CompanyProfile />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
