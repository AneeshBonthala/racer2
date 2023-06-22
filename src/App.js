
import React from 'react';
import HomePage from './src/HomePage';
import Join from './src/Join';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/join" element={<Join/>}/>
        <Route path="/reset" element={<Reset />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;