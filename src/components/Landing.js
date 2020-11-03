import React, {useState, useEffect} from 'react'
import {Button} from '@material-ui/core'
import {Twitter} from '@material-ui/icons'
import axios from 'axios'
import {Link} from 'react-router-dom'

import './css/landing.css'
function Landing() {

    const [userLogin, setUserLogin] = useState({
        username: '',
        name: '',
        verified: Boolean
    })
    const [loginUsername, setLoginUsername] = useState('')
    const [loginName, setLoginName] = useState('')
    const [signupPassword, setSignupPassword] = useState('')

    // useEffect(()=>{
    //     const fetchData = () =>{
    //         axios.get('http://localhost:3001/login')
    //         .then(data => console.log(data))
    //     }
    //     fetchData()
    // }, [])
    
    const loginUsernameHandler = (e) =>{
        setLoginUsername(e.target.value)
    }
    const loginNameHandler = (e) =>{
        setLoginUsername(e.target.value)
    }
    const loginPasswordHandler = (e) =>{
        setSignupPassword(e.target.value)
    }
    
    const onSubmit = (e)=>{
        e.preventDefault();

        let newUser = {
            username: loginUsername,
            name: loginName,
            varified: true
        }
    }
    const mainBg = {
        background: 'url(https://wallpaperaccess.com/full/1459043.jpg) center center / cover no-repeat'
    }
    return (
        <div className="landing">
            <div className="landing__main"></div>

            <div className="landing__aside">
                <div className="landing__login">
                    <form action="#">
                        <input type="text" placeholder="username" />
                        <input type="password" placeholder="password" />
                        <div className="landing__login__btn">
                            <Button variant="outlined" fullWidth className="landing__login__btn">Log in</Button>
                        </div>
                    </form>
                </div>
                <div className="landing__twitter">
                    <div className="landing__twitter__title">
                        <Twitter className="landing__twitter--icon" />
                        <h2>See what's happening in the world right now</h2>
                    </div>
                    <div className="landing__twitter__join">
                        <h3>Join Twitter today</h3>
                        <Link style={{textDecoration: 'none'}} to="/signup">
                            <Button variant="outlined" fullWidth className="landing__join__btn btn1">Sign up</Button>
                        </Link>
                        <Button variant="outlined" fullWidth className="landing__join__btn btn2">Log in</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
