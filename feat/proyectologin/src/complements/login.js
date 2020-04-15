import React from 'react'
import {withRouter} from 'react-router'
import {createBrowserHistory} from 'history'


const history =createBrowserHistory();

function handleClick(){    
    history.push("/selected");
}

const Login=()=>{
    return(
        <div>
            <p className="text-bold">Login</p>
            <label>Username</label>
            <input placeholder="Enter your nickname" />
            <label>Password</label>
            <input placeholder="Enter your password" />
            <button onClick={handleClick} >Accept</button>
        </div> 
    )
}

export default withRouter(Login);
