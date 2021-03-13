import React from 'react'
import './App.css';
import Header from './Header';
import TinderCards from './TinderCards'
import SwipeButons from './SwipeButtons'

function App() {
  return (
    // BEM class naming convention
    <div className="app">
      <Header />
      <TinderCards />
      <SwipeButons />
    </div>
  );
}

export default App;
