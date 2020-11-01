import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Posts from './components/Posts'

function Create() {
    const [post, setPost] = useState({
        displayName: '',
        username: '',
        verified: true,
        text: '',
        image : '',
        avatar: ''
    })

    const [userData, setUserData] = useState([])

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

    const postHandler = (e)=>{
        const newPost = {
            displayName: 'abdi',
            username: 'abdi__',
            verified: false,
            text:'random text ipsum dolor sit, amet consectetur adipisicing elit. Ex, nostrum?',
            image: 'https://media.giphy.com/media/7nszXNYsxVswjtg4Ps/giphy.gif',
            avatar: 'https://polightafricafilms.com/wp-content/uploads/2019/07/avatar_afro_guy-512.png'

        }
        
        setPost(newPost)
    }

    console.log(post)

    const submitHandler = (e)=>{
        e.preventDefault();
        const newPost =  {
            displayName: post.displayName,
            username: post.postname,
            verified: post.verified,
            text: post.text,
            image: post.image,
            avatar: post.avatar

        } 
        console.log(newPost)

        axios.post('http://localhost:3001/user', newPost)
        .then(res => console.log(res.data))
        .catch(err => console.log(`error ${err}`))
        // setUser({username: ''})
    }
    
    return (
        <div>
            {userData.map(data=>(
                <Posts 
                    displayName={data.displayName}
                    username={data.username}
                    text={data.text}
                    image={data.image}
                    avatar={data.avatar}
                />
            ))}
        </div>
    )
}

export default Create
