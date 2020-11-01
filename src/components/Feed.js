import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './css/feed.css'
import {Button} from '@material-ui/core'
import {StarOutlined, CropOriginal, InsertEmoticon, Schedule, GifOutlined, AccountCircle} from '@material-ui/icons';
import Posts from './Posts';
function Feed() {
    const [post, setPost] = useState({
        displayName: '',
        username: '',
        verified: Boolean,
        text: '',
        image : '',
        avatar: ''
    })

    const [userData, setUserData] = useState([])
    const [tweetText, setTweetText] = useState('')
    const [tweetImage, setTweetImage] = useState('')

    const [chooseFile, setChooseFile] = useState({
        file: null
    })

    useEffect(()=>{
        axios.get('http://localhost:3001/')
        .then(data => {
            const newPost = data.data

            newPost.map(post => {
                console.log(post)
            })

            setUserData(newPost)

            return newPost
        })
        .catch(err => console.log(`error ${err}`))
    }, [])


    const selectFileHandler = (e) =>{
        console.log(e.target.files)
        setTweetImage({image: URL.createObjectURL(e.target.files[0])})
    }

    const tweetTextHandler = (e)=>{
        setTweetText(e.target.value)
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        const newPost =  {
            displayName: 'khalid',
            username: 'bigkay__',
            verified: true,
            text: tweetText,
            image: tweetImage,
            avatar: 'https://polightafricafilms.com/wp-content/uploads/2019/07/avatar_afro_guy-512.png'
        } 
        console.log(newPost)

        axios.post('http://localhost:3001/user', newPost)
        .then(res => console.log(res.data))
        .catch(err => console.log(`error ${err}`))

        setTweetImage('')
        setTweetText('')
        window.location = '/'
    }
    return (
        <div className="feed">
            <div className="feed__container">
                <form onSubmit={submitHandler}>
                    <div className="feed__title">
                        <h1>home</h1>
                        <StarOutlined className="feed__title--icon" />
                    </div>
                    <div className="feed__tweet">
                        <div className="feed__tweet__title">
                            <AccountCircle className="tweet__icon" />
                            <input className="feed__input" type="text" value={tweetText} onChange={tweetTextHandler} placeholder="What's happeing?"/>
                        </div>
                        <div className="feed__imageFile">
                            <img src={tweetImage} alt="img"/>
                        </div>
                        <div className="feed__tweet__attachment">
                            <label htmlFor="file"><CropOriginal className="tweet__attachment__icon" /> </label>
                            <input type="file" id="file" onChange={selectFileHandler} />

                            <GifOutlined className="tweet__attachment__icon gif" />
                            <InsertEmoticon className="tweet__attachment__icon" />
                            <Schedule className="tweet__attachment__icon" /> 
                        </div>
                        <div className="feed__tweet__btn">
                            <Button className="feed__tweet__btn" variant="outlined" type="submit"  >tweet</Button>
                        </div>
                    </div>
                    {/* ************************************************************************** */}
                    <div className="feed__posts">
                        {userData.map(data=>(
                            <Posts 
                                key={data.id}
                                displayName={data.displayName}
                                username={data.username}
                                text={data.text}
                                image={data.image}
                                verified={data.verified}
                                avatar={data.avatar}
                            />
                        ))}
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Feed
