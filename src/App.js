import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LoginButton from '../src/components/login/Login';
import Gallery from './components/cards/gallery/Gallery';
import './App.css';
import Logout from './components/logout/Logout.js';


function App() {
  return (
    <div className="App">

        <Router>
          <Routes>
            <Route path="/" element={<LoginButton />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </Router>

    </div>
  );
}

export default App;
