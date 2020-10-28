import React from 'react'
import './css/sidebar.css'
function showSidebar({text, Icons}) {
    return (
        <div className="showSidebar">
            <Icons className="showSidebar__icons" />
            <h3>{text}</h3>
        </div>
    )
}

export default showSidebar
