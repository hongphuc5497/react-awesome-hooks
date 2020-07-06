import React from 'react';
import './App.css';

import { TimerFiveSeconds, MoneyCount, HitBox } from './components';

function App() {
  return (
    <div className="App">
      <TimerFiveSeconds />
      <hr/>

      <MoneyCount />
      <hr />

      <HitBox onClickInside={() => alert('hit the box')}/>
      <hr />
    </div>
  );
}

export default App;
