import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import Loading from './pages/loading';
// import Dashboard from './pages/dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:path/checktoken/:token/:apikey" element={<Loading />} />
      </Routes>
    </Router>
  );
}

export default App;
