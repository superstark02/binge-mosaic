import React, { Component } from 'react'
import MyCarousel from '../Components/Carousel'
import Footer from '../Components/Footer'
import MyAppBar from "../Components/MyAppBar"
import { getByWord } from '../Database/getCollectionQuery'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import "./Home.css"
import { theme } from '../Theme/Theme'
import MyList from '../Components/MyList'
//import { uploadApps, uploadData, temp } from '../Database/uploadData'

export class Home extends Component {

    state = {
        data: null,
        drama: null,
        action:null
    }

    componentDidMount() {
        getByWord("Index", "Comedy").then(snap => {
            this.setState({ data: snap })
        })

        getByWord("Index", "Drama").then(snap => {
            this.setState({ drama: snap })
        })

        getByWord("Index", "Action").then(snap => {
            this.setState({ action: snap })
        })

        //uploadData();
        //uploadApps();
        //temp();
    }

    render() {
        if (this.state.data && this.state.drama && this.state.action) {
            return (
                <div>
                    <MyAppBar />
                    <MyCarousel />
                    <div style={{marginTop:"100px"}} >
                        <MyList title="Best In Comedy" filter='Movie' data={this.state.data} />
                        <MyList title="Drama" filter='Movie' data={this.state.drama} />
                        <MyList title="Amazing Action" filter='Movie' data={this.state.action} />
                    </div>
                    <Footer />
                </div>
            )
        } else {
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

export default Home
