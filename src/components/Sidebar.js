import React from 'react'
import {Twitter, Search, NotificationsOutlined, MailOutline, PersonOutline, MoreHorizRounded, BookmarkBorder, Subject, HomeOutlined, Notifications} from '@material-ui/icons';
import {Button} from '@material-ui/core'
import ShowSidebar from './ShowSidebar'
import './css/sidebar.css'
import '../App.css'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__container">
                <Twitter className="sidebar__twitter" />
                <ShowSidebar active text="home" Icons={HomeOutlined} />
                <ShowSidebar text="explore" Icons={Search} />
                <ShowSidebar text="notifications" Icons={Notifications} />
                <ShowSidebar text="messages" Icons={MailOutline} />
                <ShowSidebar text="profile" Icons={PersonOutline} />
                <ShowSidebar text="more" Icons={MoreHorizRounded} />
                <Button variant="outlined" fullWidth className="sidebar__btn">Tweet</Button>
            </div>
        </div>
    )
}

export default Sidebar
