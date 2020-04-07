import React, { Component } from 'react'
import HomeImg from '../image/home_icon.png'
import { withRouter } from 'react-dom'


class Navbar extends Component {

    constructor(history) {
        super()

    }

    historyVar

    handleonClick() {
        history.push('/music')
    }

    handleClickO = () => {
        history.push('/other')
    }
    handleClickA = () => {
        history.push('/artist')
    }
    handleClickP = () => {
        history.push('/profile')
    }

    render() {
        return (

            <nav className="nav">
                <img src={HomeImg} className="img" alt="HomeImg" />

                <button className="button-form" onClick={this.handleClickP}>Profile</button>


                <button className="button-form" onClick={this.handleonClick}>Music</button>


                <button className="button-form" onClick={this.handleClickA}>Artist</button>

                <button className="button-form" onClick={this.handleClickO}>Others</button>
            </nav>
        )
    }
}

export default withRouter(Navbar);