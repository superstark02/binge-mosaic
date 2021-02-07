import React, { Component } from 'react'
import Footer from '../Components/Footer'
import MyAppBar from '../Components/MyAppBar'
import "../CSS/Pages/Contact.css"

export class About extends Component {
    render() {
        return (
            <div style={{backgroundColor:"white", minHeight:"100vh", color: "black" }} >
                <MyAppBar />
                <div style={{ height: "5px", backgroundColor: "black" }}></div>

                <div className="wrap" >
                    <div className="width-change">
                        <h1>
                            About Us
                        </h1>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default About
