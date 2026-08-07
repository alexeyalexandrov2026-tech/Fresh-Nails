import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Masters from './pages/Masters';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/masters" element={<Masters />} />
    </Routes>
  );
}

export default App;
