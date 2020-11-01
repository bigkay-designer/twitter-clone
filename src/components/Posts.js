import React from 'react'
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import {ChatBubbleOutline,FavoriteBorder, Publish , Repeat} from '@material-ui/icons'
import './css/posts.css'
function Posts( {displayName,username,verified,text,image,avatar, key}) {
        
    return (
        <div className="posts">
            <div className="posts__avatar">
                <Avatar src={avatar} />
            </div>
            <div className="posts__body" key={key}>
                <div className="posts__header">
                    <div className="posts__headerText">
                        <h3>{displayName}
                            <span className={`${!verified && "posts__verified--none" }`}> <VerifiedUserIcon className="posts__verified" /> </span>  
                            <span className="span">@{username} </span>
                        </h3>
                    </div>
                    <div className="posts__description">
                        <p> {text} </p>
                    </div>
                </div>
                <img 
                src={image} 
                alt="gif"/>

                <div className="posts__icons">
                    <ChatBubbleOutline />
                    <Repeat />
                    <FavoriteBorder />
                    <Publish />
                </div>
            </div>
        </div>
    )
}

export default Posts
