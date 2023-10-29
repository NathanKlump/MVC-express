import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GetReport from "./pages/GetReport";
import CreateReport from "./pages/CreateReport";
import CreateFeedback from "./pages/CreateFeedback";
import Methodology from "./pages/Methodology";
import logo from "./images/LOGO.png";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <div className="flex items-center">
            <img src={logo} alt="company logo" className="logo" />
          </div>
          <Link to="/">HomePage</Link>
          <Link to="/Methodology">Methodology</Link>
          <Link to="/Dashboard">Dashboard</Link>
          <Link to="/Report">Create Report</Link>
          <Link to="/GetReport">All Reports</Link>
          <Link to="/Feedback">Feedback</Link>
          <Link to="/ContactUs">ContactUs</Link>
        </div>
        <Routes>
          <Route path="/GetReport" element={<GetReport />} />
          <Route path="/Report" element={<CreateReport />} />
          <Route path="/Feedback" element={<CreateFeedback />} />
          <Route path="/Methodology" element={<Methodology />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
