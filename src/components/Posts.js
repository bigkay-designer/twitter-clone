import React from 'react'
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import {ChatBubbleOutline,FavoriteBorder, DeleteOutline , Repeat} from '@material-ui/icons'
import './css/posts.css'
function Posts( {displayName,username,verified,text,image,avatar, keys, deletePost}) {
    return (
        <div className="posts"  key={keys}>
            <div className="posts__avatar">
                <Avatar src={avatar} />
            </div>
            <div className="posts__body">
                <div className="posts__header">
                    <div className="posts__headerText">
                        <h3>{displayName}
                            <span className={`${!verified && "posts__verified--none" }`}> <VerifiedUserIcon className="posts__verified" /> </span>  
                            <span className="span">@{username} </span>
                        </h3>
                    </div>
                    <div className="posts__description">
                        <span> {text} </span>
                    </div>
                </div>
                {image ? <img src={image} alt="gif"/> : null }

                <div className="posts__icons">
                    <ChatBubbleOutline />
                    <Repeat />
                    <FavoriteBorder />
                    <span onClick={deletePost}> <DeleteOutline /> </span>
                </div>
            </div>
        </div>
    )
}

export default Posts
