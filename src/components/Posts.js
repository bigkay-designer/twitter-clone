import React from 'react'
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import {ChatBubbleOutline,FavoriteBorder, Publish , Repeat} from '@material-ui/icons'
import './css/posts.css'
function Posts(
    displayName,
    username,
    verified,
    text,
    image,
    avatar
) {
    return (
        <div className="posts">
            <div className="posts__avatar">
                <Avatar src="https://polightafricafilms.com/wp-content/uploads/2019/07/avatar_afro_guy-512.png" />
            </div>
            <div className="posts__body">
                <div className="posts__header">
                    <div className="posts__headerText">
                        <h3>bigkay
                            <span><VerifiedUserIcon className="posts__verified" /> @bigkay__</span>
                        </h3>
                    </div>
                    <div className="posts__description">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, fuga!</p>
                    </div>
                </div>
                <img 
                src="https://media.giphy.com/media/7nszXNYsxVswjtg4Ps/giphy.gif" 
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
