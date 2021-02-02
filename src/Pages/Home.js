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

export class Home extends Component {

    state = {
        data: null,
    }

    componentDidMount() {
        getByWord("Index", "Comedy").then(snap => {
            this.setState({ data: snap })
        })
    }

    render() {
        if (this.state.data) {
            return (
                <div>
                    <MyAppBar />
                    <MyCarousel />
                    <div style={{marginTop:"100px"}} >
                        <MyList title="Best In Comedy" filter='Comedy' data={this.state.data} />
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
