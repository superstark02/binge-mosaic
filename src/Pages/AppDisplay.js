import React, { Component } from 'react'
import MyAppBar from '../Components/MyAppBar'
import getDoc from "../Database/getDoc"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import { theme } from '../Theme/Theme'

export class AppDisplay extends Component {
    state = {
        data: null
    }

    componentDidMount() {
        getDoc("Apps", this.props.match.params.id).then(snap => {
            this.setState({ data: snap })
            console.log(this.props.match.params.id)
            console.log(snap)
        })
    }

    render() {
        if (this.state.data) {
            return (
                <div>
                    <MyAppBar />
                    <div style={{ backgroundColor: "black", padding: "20px", display: "flex" }} >
                        <div style={{ marginRight: "20px" }}>
                            <img src={this.state.data.image} width="200px" style={{ borderRadius: "10px" }} />
                        </div>
                        <div>
                            <div style={{ fontSize: "40px" }} >
                                {this.state.data.name}
                            </div>
                            <div className="display-type" style={{ width: "60%" }} >
                                {this.state.data.description}
                            </div>
                            <div style={{ margin: "10px 0px" }} >
                                <a href={this.state.data.ps} style={{ marginRight: "10px" }} >
                                    <img width="167px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1200px-Google_Play_Store_badge_EN.svg.png" ></img>
                                </a>
                                <a href={this.state.data.as}>
                                    <img style={{ borderRadius: "10px" }} width="150px" src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred_2x.png" ></img>
                                </a>
                            </div>
                            <div>
                                Plans: {this.state.data.plans}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }else{
            return (
                <div className="wrap" style={{ position: "absolute", top: "0", width: "100%", minHeight: "100vh" }}  >
                    <Loader
                        type="TailSpin"
                        color={theme.palette.primary.light}
                        height={50}
                        width={50}
                        timeout={100000} //3 secs
                    />
                </div>
            )
        }
    }
}

export default AppDisplay
