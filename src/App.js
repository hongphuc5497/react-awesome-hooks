import React from 'react';
import './App.css';

import { TimerFiveSeconds, MoneyCount } from './components';

function App() {
  return (
    <div className="App">
      <TimerFiveSeconds />
      <hr/>

      <MoneyCount />
      <hr />

      
    </div>
  );
}

export default App;
