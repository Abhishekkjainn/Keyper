import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import Loading from './pages/loading';
import Dashboard from './dashboard/dashboard';
import Profile from './profile/profile';
import RegistrationPage from './dashboard/registrationpage';
import Doc from './pages/documentation';
// import Dashboard from './pages/dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:path/checktoken/:token/:apikey" element={<Loading />} />
        <Route
          path=":path/:path/checktoken/:token/:apikey"
          element={<Loading />}
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/documentation" element={<Doc />} />
      </Routes>
    </Router>
  );
}

export default App;
