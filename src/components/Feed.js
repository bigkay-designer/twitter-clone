import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './css/feed.css'
import {Button} from '@material-ui/core'
import {StarOutlined, CropOriginal, InsertEmoticon, Schedule, GifOutlined, AccountCircle, Cancel} from '@material-ui/icons';
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

    const [userPost, setUserPost] = useState([])
    const [user, setUser] = useState('')
    const [tweetText, setTweetText] = useState('')
    const [tweetImage, setTweetImage] = useState('')
    useEffect(()=>{
        const fetchData = () =>{
            axios.get('http://localhost:3001')
            .then(data => {
                const newPost = data.data
                setUserPost(newPost)
                return newPost
            })
            .catch(err => console.log(`error ${err}`))
        }
    
        fetchData()
    }, [userPost])

    useEffect(()=>{
        const fetchData = () =>{
            axios.get('http://localhost:3001/user', {withCredentials: true})
            .then(res => {
                setUser(res.data)
            })
            .catch(err => console.log(`error ${err}`))
        }
    
        fetchData()
    }, [])

    const deletePostHandler =(e, dataId) => {
        e.preventDefault()
        userPost.map(post=>{
            console.log(post.author.username + ' user '+  user.username)
            if(user.username = post.author.username){
                axios.delete(`http://localhost:3001/${dataId}`)
                .then(posts => {
                })
                .catch(err => console.log(`error ${err}`))
            }else{
                return console.log('denied')
            }
        })

    }

    const selectFileHandler = (e) =>{
        setTweetImage(URL.createObjectURL(e.target.files[0]))
    }

    const tweetTextHandler = (e)=>{
        setTweetText(e.target.value)
    }

    const closeTweetImgHandler = () =>{
        setTweetImage('')
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        const newPost =  {
            displayName: user.name,
            username: user.username,
            verified: true,
            text: tweetText,
            image: tweetImage,
            avatar: 'https://polightafricafilms.com/wp-content/uploads/2019/07/avatar_afro_guy-512.png',
            author: {
                id:user.id,
                username: user.username
            }
        } 

        axios.post('http://localhost:3001/', newPost)
        .then(res => {
            const post = res.data
            setPost(post)
            console.log(res.config.data)
        })
        .catch(err => console.log(`error ${err}`))

        setTweetImage('')
        setTweetText('')
    }

    const test = (e, dataId)=>{
        e.preventDefault()

        alert('Permission denied')
    }
   
    const tweetImageBg = {
        background: `url(${tweetImage}) center center / cover no-repeat`,
        width: '100%',
        height: '300px',
        marginBottom: '20px'
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
                            <textarea className="feed__input" type="text" value={tweetText} onChange={tweetTextHandler}  cols="30" rows="4">what's happeing?</textarea>
                        </div>
                        {tweetImage ? <div style={tweetImageBg} className="feed__imageFile">
                                 <span onClick={closeTweetImgHandler}> <Cancel className="feed__imageFile--close" /> </span> 
                             </div> : null 
                        }
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
                        {userPost.map(data=>(
                            <Posts 
                                keys={data._id}
                                displayName={data.displayName}
                                username={data.username}
                                text={data.text}
                                image={data.image}
                                verified={data.verified}
                                avatar={data.avatar}
                                deletePost = {(e)=> deletePostHandler(e, data._id)}
                                text = {(e)=> test(e, data.id)}
                            />
                        ))}
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Feed
