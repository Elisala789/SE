import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard1 from './components/StudentDashboard';
import Dashboard2 from './components/FacultyDashboard';
import Dashboard3 from './components/GeneralAdmin'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student-dashboard" element={<Dashboard1 />} />
        <Route path="/faculty-dashboard" element={<Dashboard2 />} />
        <Route path="/generaladmin-dashboard" element={<Dashboard3 />} />



      </Routes>
    </Router>
  );
}

export default App;
