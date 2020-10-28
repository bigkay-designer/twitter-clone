import React from 'react'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Widgegts from './components/Widget'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App__container">
        {/* side panel with the icons */}
          <Sidebar />
        {/* main section */}
          <Feed />
        {/* aside section live news */}
        <Widgegts />
      </div>
    </div>
  );
}

export default App;
