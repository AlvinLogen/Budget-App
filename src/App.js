import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MonthlyPlanner from './components/monthly-planner/monthly-planner';

function App() {
  return (
    <div className="App font-dmsans">
      <Routes>
        <Route path='/' element={<MonthlyPlanner />} />
      </Routes>
    </div>
  );
}

export default App;
