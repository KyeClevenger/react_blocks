// collaborated with eric, daisy, anthony, viviana, richard, josh, and christian

import React from 'react';
import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import SubContents from './Components/SubContents';
import Advertisement from './Components/Advertisement';


function App() {
  return (
    <div className="app">
      <div>
      <Header />
      </div>
      <div class="flex">
      <div>
      <Navigation />
      </div>
      <Main>
        <div class="flex">
        <SubContents />
        <SubContents />
        <SubContents />
        </div>
        <div class="flex">
        <Advertisement />
        </div>
      </Main>
      </div>
    </div>
  );
}

export default App;

