import React from 'react'
import './css/feed.css'
import {Button} from '@material-ui/core'
import {StarOutlined, CropOriginal, InsertEmoticon, Schedule, GifOutlined, AccountCircle} from '@material-ui/icons';
import Posts from './Posts'
function Feed() {
    return (
        <div className="feed">
            <div className="feed__container">
                <div className="feed__title">
                    <h1>home</h1>
                    <StarOutlined className="feed__title--icon" />
                </div>
                <div className="feed__tweet">
                    <div className="feed__tweet__title">
                        <AccountCircle className="tweet__icon" />
                        <input className="feed__input" type="text" placeholder="What's happeing?"/>
                    </div>
                    <div className="feed__tweet__attachment">
                        <CropOriginal className="tweet__attachment__icon" /> 
                        <GifOutlined className="tweet__attachment__icon gif" />
                        <InsertEmoticon className="tweet__attachment__icon" />
                        <Schedule className="tweet__attachment__icon" /> 
                    </div>
                    <div className="feed__tweet__btn">
                        <Button className="feed__tweet__btn" variant="outlined" >tweet</Button>
                    </div>
                </div>
                <div className="feed__posts">
                    <Posts />
                    <Posts />
                    <Posts />
                    <Posts />
                    <Posts />
                    <Posts />
                    <Posts />
                </div>
            </div>

        </div>
    )
}

export default Feed
