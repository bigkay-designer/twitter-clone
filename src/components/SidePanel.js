import React from 'react'
import {Twitter, Home, Search, Notifications, Mail, AccountCircle, MoreHorizRounded} from '@material-ui/icons';


function SidePanel() {
    return (
        <div style={{display: 'block'}} className="sidePanel">
            <Twitter />
            <Home />
            <Search />
            <Notifications />
            <MoreHorizRounded />
            <Mail />
            <AccountCircle />
        </div>
    )
}

export default SidePanel
