import React from 'react'
import './css/sidebar.css'
function showSidebar({text, Icons, active}) {
    return (
        <div className={`showSidebar ${ active && "showSidebar__active" }`}>
            <Icons className="showSidebar__icons" />
            <h3>{text}</h3>
        </div>
    )
}

export default showSidebar
