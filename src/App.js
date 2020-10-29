import React from 'react'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Widgegts from './components/Widget'
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Feed />
      <Widgegts />
    </div>
  );
}

export default App;
