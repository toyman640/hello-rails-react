import React from 'react';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import Greeting from './Greeting.js';

const  App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Greeting />} />
      </Routes>
    </Router>
  );
}

export default App;