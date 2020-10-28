import React from 'react'
import './css/main.css'
import {StarOutlined, CropOriginal, InsertEmoticon, Schedule, GifOutlined, AccountCircle} from '@material-ui/icons';
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
                        <button>tweet</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Feed
