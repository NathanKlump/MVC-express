import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Nav from './components/Nav'
import IncidentForm from './components/IncidentForm'

function App() {
  return (
    <div className="App">
      <Nav/>
      
      <Routes>
        <Route path="/report-incident" element={<IncidentForm />} />
      </Routes>
    </div>
  );
}

export default App;
