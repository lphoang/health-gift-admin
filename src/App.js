import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Diseases from "./components/Diseases";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/diseases" element={<Diseases />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
