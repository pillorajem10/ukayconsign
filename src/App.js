import { BrowserRouter, Route, Routes } from 'react-router-dom';

// PAGES
import Home from './pages/Home';

// COMPONENTS
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header>
          <Navbar />
        </header>
        <main> {/* Add top padding to the main content */}
          <Routes>
            <Route path="/" exact element={<Home />} />
          </Routes>
        </main>
        <footer className="footer"><Footer /></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
