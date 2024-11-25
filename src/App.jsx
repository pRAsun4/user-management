import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layouts/Layout";
import CompanyProfile from "./Pages/CompanyProfile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/company-profile" element={<CompanyProfile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
