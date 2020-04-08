import React from 'react'
import { Link } from 'react-router-dom';




const Login=()=>{
    return(
        <div>
            <p className="text-bold">Login</p>
            <label>Username</label>
            <input placeholder="Enter your nikname"/>
            <label>Password</label>
            <input placeholder="Enter your password"/>

            <Link to="/selected">
                <button>Accept</button>
            </Link>
           
        </div>
       
    )
}                                                     
export default Login;