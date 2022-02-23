import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LoginButton from '../src/components/login/Login';
import Gallery from './components/cards/gallery/Gallery';
import './App.css';


function App() {
  return (
    <div className="App">

        <Router>
          <Routes>
            <Route path="/" element={<LoginButton />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </Router>

    </div>
  );
}

export default App;
