import React, { Component } from 'react'
import Footer from '../Components/Footer'
import MyAppBar from "../Components/MyAppBar"
import "./Home.css"

export class Home extends Component {

    render() {
        return (
            <div>
                <MyAppBar />
                
                <Footer />
            </div>
        )
    }
}

export default Home
