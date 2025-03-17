import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import Authpage from './authpage/authpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/authenticate" element={<Authpage />} />
      </Routes>
    </Router>
  );
}

export default App;
