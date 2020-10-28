import React from 'react'
import SidePanel from './components/SidePanel'
import Feed from './components/Feed'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App__container">
        {/* side panel with the icons */}
          <SidePanel />
        {/* main section */}
          <Feed />
        {/* aside section live news */}
      </div>
    </div>
  );
}

export default App;
