import './App.css';
import Clock from './Components/Clock';
import ClockF from './Components/ClockF';
import Toggle from './Components/Toggle';
import List from './Components/List';
import React from 'react';

function App() {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      <Clock></Clock>
      <ClockF></ClockF>
      <Toggle></Toggle>
      <List numbers={numbers}></List>
    </div>
  );
}

export default App;
