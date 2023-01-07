import './App.css';
import MyPortfolio from '../My-portfolio/my-portfolio';
import Contact from '../Contact/contact';
import About from '../About/about';
import Navbar from '../Navbar/navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<MyPortfolio />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
