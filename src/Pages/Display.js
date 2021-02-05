import React, { Component } from 'react'
import { theme } from "../Theme/Theme"
import "../CSS/Pages/Display.css"
import "../CSS/Components/MyList.css"
import { Button, IconButton } from '@material-ui/core'
import { ArrowBackRounded, PlayArrowRounded, VolumeMuteRounded, VolumeUpRounded } from '@material-ui/icons'
import Loader from 'react-loader-spinner'
import getSubCollection from '../Database/getSubCollection'
import { useParams } from 'react-router-dom'
import getDoc from "../Database/getDoc"
import { Link } from "react-router-dom";
import SeasonTabs from '../Components/SeasonTabs'
import axios from 'axios'
import Cast from '../Components/Cast';
import MyList from '../Components/MyList'
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { addSubDoc } from '../Database/addDoc'
import Footer from '../Components/Footer'

export class Adapter extends Component {

    state = {
        mute: true,
        cover: true,
        show: null,
        related: null,
        seasons: null,
        link: null,
        open: null,
        message: ""
    }

    findRelated = (industry, platform, genre) => {
        getSubCollection(industry, platform, genre).then(snap => {
            this.setState({ related: snap })
        })
    }

    componentDidMount() {
        getDoc("Content", this.props.id).then(result => {
            this.setState({ show: result })

            axios.post('https://us-central1-project-ott-d883c.cloudfunctions.net/widgets/get-related', { //get-doc
                filter: 'Hollywood'
            }).then(snap => {
                this.setState({ related: snap.data })
            })
        })
    }

    handleMute = () => {
        if (this.state.mute) {
            this.setState({ mute: false })
        }
        else {
            this.setState({ mute: true })
        }
    }

    handleClose = () => {
        this.setState({ open: false })
    }

    addWatchList = () => {
        if (window.Android.getDeviceId()) {
            addSubDoc("Users", window.Android.getDeviceId(), 'Watchlist', this.state.show.id, {
                poster: this.state.show.poster,
                id: this.state.show.id
            }).then(e=>{
                this.setState({ message: "Successfully Added" })
            })
        }
        else {
            this.setState({ message: "Please Sign In" })
        }
    }

    render() {
        return (
            <div style={{ color: theme.palette.primary.light }} className="transition-item detail-page" >
                {
                    this.state.show ? (
                        <div className="w3-animate-bottom" >
                            <div className="wrap" style={{ overflow: "hidden", paddingBottom: '30px' }} >
                                <div className="mute">
                                    <Link to="/">
                                        <IconButton >
                                            <ArrowBackRounded style={{ color: "white", fontSize: "20px" }} />
                                        </IconButton>
                                    </Link>
                                    {
                                        this.state.mute ? (
                                            <IconButton onClick={this.handleMute} >
                                                <VolumeMuteRounded style={{ color: "white", fontSize: "20px" }} />
                                            </IconButton>
                                        ) : (
                                                <IconButton onClick={this.handleMute} >
                                                    <VolumeUpRounded style={{ color: "white", fontSize: "20px" }} />
                                                </IconButton>
                                            )
                                    }
                                </div>

                                <video
                                    autoPlay={true}
                                    loop={false}
                                    muted={this.state.mute}
                                    style={{ height: "80vh" }}
                                    className="cover-image">
                                    <source src={this.state.show.trailer} className="cover-image" />
                                </video>
                            </div>
                            <div className="wrap" style={{ marginBottom: "30px" }} >
                                <div className="wrap play-button" >
                                    <Link to={"/play/" + this.state.show.id + "/Season-1/episode-01"} >
                                        <IconButton>
                                            <PlayArrowRounded style={{ fontSize: "40px", color: "black" }} />
                                        </IconButton>
                                    </Link>
                                </div>
                            </div>

                            <div className="display-name wrap" >
                                {this.state.show.name}
                            </div>
                            <div className="wrap display-type" >
                                {this.state.show.keywords}
                            </div>

                            <div className="wrap" style={{ flexWrap: "nowrap", margin: "20px 0px" }} >
                                <div style={{ margin: "0px 20px", width: "33%" }} >
                                    <div className="display-type wrap" >
                                        Year
                                    </div>
                                    <div className="wrap" >
                                        {this.state.show.year}
                                    </div>
                                </div>
                                <div className="wrap" style={{ margin: "0px 20px", width: "33%" }}  >
                                    <div>
                                        <div className="display-type wrap" >
                                            Country
                                        </div>
                                        <div className="wrap" >
                                            {this.state.show.country}
                                        </div>
                                    </div>
                                </div>
                                <div style={{ margin: "0px 20px", width: "33%" }}  >
                                    <div className="display-type wrap" >
                                        Length
                                    </div>
                                    <div className="wrap" >
                                        {this.state.show.leng}
                                    </div>
                                </div>
                            </div>

                            {/*<div>
                                <div className="display-type wrap" >
                                    A Product Of
                                </div>
                                <div className="wrap" >
                                    <img alt="app" src={this.state.show.app} width="30px" style={{ marginRight: "10px", borderRadius: "5px" }} />
                                    {this.state.show.appName}
                                </div>
                            </div>*/}

                            {/*<div className="wrap" style={{ margin: "20px 0px" }} >
                                <ButtonBase>
                                    <div className="rent-button">
                                        <div className="wrap display-type" style={{ color: "white" }} >Rent</div>
                                        <div className="wrap " >&#8377;20 /month</div>
                                    </div>
                                </ButtonBase>
                            </div>*/}

                            <div className="wrap" >
                                <Button className="wrap" onClick={this.addWatchList} style={{ backgroundColor: theme.palette.primary.light, color: theme.palette.primary.dark, width: "300px" }} >
                                    <AddRoundedIcon style={{ fontSize: "13px", margin: "0px 5px" }} /> ADD TO WATCH LATER
                                </Button>
                            </div>
                            <p className="wrap display-type" >
                                {this.state.message}
                            </p>

                            <div style={{ padding: '20px 200px', textAlign: "center" }} >
                                {this.state.show.description}
                            </div>

                            {
                                this.state.show.season ? (
                                    <div>
                                        <SeasonTabs seasons={this.state.show.season} id={this.state.show.id} />
                                    </div>
                                ) : (
                                        <div></div>
                                    )
                            }
                            {
                                this.state.show.cast ? (
                                    <div>
                                        <Cast data={this.state.show.cast} />
                                    </div>
                                ) : (
                                        <div></div>
                                    )
                            }
                            {
                                this.state.related ? (
                                    <div>
                                        <div className="h7" >
                                            Related
                                        </div>
                                        <MyList data={this.state.related} filter='Hollywood' />
                                    </div>
                                ) : (
                                        <div></div>
                                    )
                            }
                            
                        </div>
                    ) : (
                            <div className="wrap" style={{ minHeight: "90vh" }} >
                                <Loader
                                    type="TailSpin"
                                    color={theme.palette.primary.light}
                                    height={50}
                                    width={50}
                                    timeout={3000} //3 secs
                                />
                            </div>
                        )
                }

                {/*<Dialog fullScreen open={this.state.open} TransitionComponent={Transition} style={{ marginTop: "30%", boxShadow: "0px -10px 20px rgba(0,0,0,0.5)", backgroundColor: theme.palette.primary.dark, color: theme.palette.primary.light }} >
                    <AppBar position="relative" elevation={0} style={{ backgroundColor: theme.palette.primary.dark, color: theme.palette.primary.light }} >
                        <Toolbar>
                            <IconButton edge="start" color="inherit" onClick={this.handleClose} aria-label="close">
                                <CloseIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    {
                        this.state.show ? (
                            <div>
                                <div>
                                    <div className="wrap" >
                                        <div className="list-item wrap" style={{ backgroundImage: "url(" + this.state.show.poster + ")", margin: '15px' }} >

                                        </div>
                                    </div>
                                    <div >
                                        <div>
                                            <div className="wrap" >
                                                <div style={{ marginRight: "10px" }} >
                                                    <img className="app-logo" alt="logo" src={this.state.show.app} width="30px" />
                                                </div>
                                                <div>
                                                    {this.state.show.appName}
                                                </div>
                                            </div>
                                            <div className="wrap" style={{ margin: "20px 0px" }} >
                                                <ButtonBase>
                                                    <div className="rent-button">
                                                        <div className="wrap display-type" style={{ color: "white" }} >Rent</div>
                                                        <div className="wrap " >&#8377;20 /month</div>
                                                    </div>
                                                </ButtonBase>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wrap display-type" style={{ textAlign: "center", marginBottom: "20px" }} >
                                    Why buy expensive yearly or monthly packages and subscriptions. When you can rent for less?
                                </div>
                                <div className="h7" >
                                    Recommended Plans
                                </div>

                            </div>
                        ) : (
                                <div></div>
                            )
                    }
                </Dialog>*/}
                <Footer/>
            </div>
        )
    }
}

export default function Display() {
    const { industry } = useParams();
    const { platform } = useParams();
    const { genre } = useParams();
    const { id } = useParams();

    React.useEffect(() => {
    }, [industry]);

    return (
        <Adapter industry={industry} platform={platform} genre={genre} id={id} />
    )
}
