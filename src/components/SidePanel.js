import React from 'react'
import {Twitter, Search, NotificationsOutlined, MailOutline, PersonOutline, MoreHorizRounded, BookmarkBorder, Book, Subject, HomeOutlined} from '@material-ui/icons';
import './css/main.css'

function SidePanel() {
    return (
        <div className="sidePanel">
            <div className="sidePanel__container">
                <a href="#" className="sidePanel__tag">
                    <div><Twitter className="sidePanel__icons sidePanel__icons--blue"></Twitter></div>
                </a>
                <a href="#" className="sidePanel__tag" > 
                    <div> <HomeOutlined className="sidePanel__icons sidePanel__icons--blue"></HomeOutlined> </div>
                    <span> home </span> </a>
                <a href="#" className="sidePanel__tag" > 
                    <div> <Search className="sidePanel__icons"></Search> </div>
                    <span>explore</span> </a>
                <a href="#" className="sidePanel__tag" > 
                    <div> <NotificationsOutlined className="sidePanel__icons" ></NotificationsOutlined> </div>
                    <span> notification </span> </a>
                <a href="#" className="sidePanel__tag" > 
                    <div> <MailOutline className="sidePanel__icons"></MailOutline> </div>
                    <span> messages </span> </a>
                <a href="#" className="sidePanel__tag" > 
                    <div> <BookmarkBorder className="sidePanel__icons"></BookmarkBorder> </div>
                    <span> bookmarks</span> </a>
                <a href="#" className="sidePanel__tag" > 
                    <div> <Subject className="sidePanel__icons"></Subject> </div>
                    <span> lists </span> </a>
                <a href="#" className="sidePanel__tag" > 
                    <div> <PersonOutline className="sidePanel__icons"></PersonOutline> </div>
                    <span> profile </span> </a>
                <a href="#" className="sidePanel__tag" > 
                    <div> <MoreHorizRounded className="sidePanel__icons"></MoreHorizRounded> </div>
                    <span> more </span> </a>
                <button>Tweet</button>
            </div>
        </div>
    )
}

export default SidePanel
