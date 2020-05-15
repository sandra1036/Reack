import React, { Component } from 'react'
import HomeImg from '../image/home_icon.png'
import { withRouter, Link } from 'react-router-dom'


class Navbar extends Component {


    render() {
        return (

            <nav className="nav">
                <img src={HomeImg} className="img" alt="HomeImg" />

                <Link to="/profile">
                <button className="button-form">Profile</button>
                </Link>

                <Link to="/music">
                <button className="button-form" >Music</button>
                </Link>

                <Link to="/artist">
                <button className="button-form">Artist</button>
                </Link>

                <Link to="others">
                <button className="button-form">Others</button>
                </Link>
            </nav>
        )
    }
}

export default withRouter(Navbar);