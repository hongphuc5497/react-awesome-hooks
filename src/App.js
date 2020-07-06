import React from 'react';
import './App.css';
import { TimerFiveSeconds, MoneyCount, HitBox, HitBoxOutSide } from './components';

function App() {
  return (
    <div className="App">
      <TimerFiveSeconds />
      <hr/>

      <MoneyCount />
      <hr />

      <HitBox onClickInside={() => alert('hit the box inside')}/>
      <hr />

      <HitBoxOutSide onClickOutSide={() => alert(`hit the box outside`)} />
      <hr />
    </div>
  );
}

export default App;
