import React, {useState} from 'react'
import {Button} from '@material-ui/core'
import {Cancel} from '@material-ui/icons'
import Landing from '../Landing'
import {Link} from 'react-router-dom'

import './auth.css'
function Signup() {
    const [landing, setLanding] = useState('')
    return (
        <div className="signup">
            <Landing className="signup__landing" />
            <div className="signup__main">
                <Link className="cancel__link" to="/">
                    <span > <Cancel className="signup__main__cancel" /> </span> 
                </Link>
                <div className="signup__tittle">
                    <h2>Create your account</h2>
                </div>
                <div className="signup__form">
                    <form action="#">
                        <div className="form__div">
                            <label htmlFor="name">name</label>
                            <input type="text" name="name" />
                        </div>
                        <div className="form__div">
                            <label htmlFor="username">username</label>
                            <input type="text" name="username" />
                        </div>
                        <div className="form__div">
                            <label htmlFor="password">password</label>
                            <input type="password" name="password" />
                        </div>
                        <Button variant="outlined" fullWidth className="signup__btn">Sign up</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
