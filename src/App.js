import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LoginButton from '../src/components/login/Login';
import Gallery from './components/cards/gallery/Gallery';
import './App.css';
import Logout from './components/logout/Logout.js';
import { AuthProvider } from './contexts/AuthContext';
import ErrorBoundary from './components/ErrorBoudary';


function App() {
  return (
    <div className="App">
      <ErrorBoundary>

        <AuthProvider>

          <Router>
            <Routes>
              <Route path="/" element={<LoginButton />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </Router>

        </AuthProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
