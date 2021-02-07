import React, { Component } from 'react'
import MyAppBar from '../Components/MyAppBar'

export class Temp extends Component {
    render() {
        return (
            <div>
                <MyAppBar/>
                <div className="diaplay-type wrap" style={{height:"90vh"}} >
                    It is a demo website. This page is not available.
                </div>
            </div>
        )
    }
}

export default Temp
