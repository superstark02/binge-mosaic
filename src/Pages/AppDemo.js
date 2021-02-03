import React, { Component } from 'react'
import Footer from '../Components/Footer'
import MyAppBar from "../Components/MyAppBar"

export class AppDemo extends Component {
    render() {
        return (
            <div>
                <MyAppBar/>
                <div className="wrap" style={{height:"90vh"}} >
                    <iframe src="https://project-ott-d883c.web.app/" height="90%" width="20%" >

                    </iframe>
                </div>
                <Footer />
            </div>
        )
    }
}

export default AppDemo
