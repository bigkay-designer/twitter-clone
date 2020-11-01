import React from 'react'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widgegts from './Widget'
import '../App.css';

function Home() {
    return (
        <div class="App">
             <Sidebar />
            <Feed />
            <Widgegts />
        </div>
    )
}

export default Home
