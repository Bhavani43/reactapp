import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Updated imports
import Home from './Css/Home';
import About from './Css/About';
import NameForm from './Css/NameForm';
import EmailForm from './Css/EmailForm';
import Navigation1 from './Css/Navigation1'; // Corrected import

function App() {
  return (
    <Router>
      <div>
        <Navigation1 /> {/* Corrected component name */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/name" element={<NameForm />} />
          <Route path="/email" element={<EmailForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
