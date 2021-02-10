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

                        <h2>
                            Problem
                        </h2>
                        <div>
                            I want to buy Voot subscription but:
                            <ol>
                                <li>I don't have credit card</li>
                                <li>I hesitate and don’t know if I will like it</li>
                                <li>I like only one series on this platform. So why should I buy a whole month plan</li>
                                <li>I already have some other OTTs subscription</li>
                                <li>I have no idea what Voot is</li>
                            </ol>
                        </div>

                        <h2>
                            
                        </h2>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default About
