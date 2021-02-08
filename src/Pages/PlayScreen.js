import React, { Component } from 'react'
import { theme } from "../Theme/Theme"
import "../CSS/Pages/Display.css"
import "../CSS/Pages/PlayScreen.css"
import { IconButton } from '@material-ui/core'
import { ArrowBackRounded } from '@material-ui/icons'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import ReadMoreAndLess from 'react-read-more-less';
import { useParams } from 'react-router-dom'
import SeasonTabs from '../Components/SeasonTabs'
import poster from '../Images/logo.jpg'
import Cast from '../Components/Cast';
import getDoc from "../Database/getDoc"
import { Button } from '@material-ui/core'
import { Link } from "react-router-dom";
import Footer from '../Components/Footer'
import getEpisode from '../Database/getEpisode'

//import video from "../Videos/stone.mp4"
//import subs from "../Videos/sub.vtt"
//const src = "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Hollywood%2FTV%2FStrangerThings%2FS1%2F%5BSubtitleTools.com%5D%20Stranger%20Things%20101%20Chapter%20One%20The%20Vanishing%20Of%20Will%20Byers%20By%20GoldBerg_44.vtt?alt=media&token=ad435e56-092a-417b-8da4-7acb8ce4ca50"

export class Adapter extends Component {

    state = {
        mute: false,
        cover: true,
        show: null,
        related: null,
        seasons: null,
        episode: "null",
        time: null,
        duration: null,

        season_id: null,
        episode_id: null,
        show_id: null,

        currentTime: 0
    }

    componentDidMount() {
        /*axios.post('https://us-central1-project-ott-d883c.cloudfunctions.net/widgets/get-doc', { //get-doc
            name: "Content",
            doc_name: this.props.id
        }).then(snap => {
            this.setState({ show: snap.data })
            axios.post('https://us-central1-project-ott-d883c.cloudfunctions.net/widgets/add-watching', {
                uid: window.Android.getUid(),
                series_id: this.props.id,
                episode: this.props.episode,
                season: this.props.season,
                poster: this.state.show.poster
            })
        })

        getTime(this.props.id, this.props.season, this.props.episode).then(snap=>{
            if (snap.time) {
                this.setState({ currentTime: snap.time })
            }      
            getEpisode(this.props.id, this.props.season, this.props.episode).then(result=>{
                this.setState({ episode: result })
            })
        })
        
        */

        getDoc("Content", this.props.id).then(snap => {
            this.setState({ show: snap });
            /*axios.post('https://us-central1-project-ott-d883c.cloudfunctions.net/widgets/add-watching', {
                uid: window.Android.getDeviceId(),
                series_id: this.props.id,
                episode: this.props.episode,
                season: this.props.season,
                poster: this.state.show.poster
            })*/
        })

        this.setState({ episode_id: this.props.episode, season_id: this.props.season, show_id: this.props.id })
    }

    handleMute = () => {
        if (this.state.mute) {
            this.setState({ mute: false })
        }
        else {
            this.setState({ mute: true })
        }
    }

    handlevideoMount = (e) => {
        if (e) {
            if (this.state.currentTime > 0) {
                e.currentTime = this.state.currentTime
            }
        }
    }

    componentCleanup = () => {
        //saveTime(this.state.time, this.state.show_id, this.state.season_id, this.state.episode_id).then(r => { })
    }

    componentWillUnmount() {
        this.componentCleanup();
    }

    render() {
        return (
            <div style={{ color: theme.palette.primary.light }} >
                {
                    this.state.show ? (
                        <div>
                            <div className="wrap" style={{ overflow: "hidden", paddingBottom: '30px', height:"95vh" }} >
                                <div className="mute">
                                    <IconButton onClick={() => { window.history.back() }} >
                                        <ArrowBackRounded style={{ color: "white", fontSize: "20px" }} />
                                    </IconButton>
                                </div>

                                <video
                                    loop={false}
                                    controls
                                    autoPlay
                                    ref={this.handlevideoMount}
                                    onTimeUpdate={(e) => { this.setState({ time: e.target.currentTime }) }}
                                    controlsList="nodownload"
                                    poster={poster}
                                    crossOrigin="anonymous"
                                    className="player" >
                                    {/*<track label="English" kind="captions" srcLang="en" default src={this.state.episode.sub} />*/}
                                    <source src="https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2FMOVIE.mp4?alt=media&token=07a337b6-ef8c-424c-bb69-20057c06e3b7" type="video/mp4" />
                                </video>

                                {/*<Player poster={this.state.show.cover} >
                                    <source src={this.state.episode.content} />
                                    <track label="English" kind="captions" srclang="en" default src={src} />
                                    <BigPlayButton position="center" />
                                    <ControlBar>
                                        <ReplayControl seconds={10} order={1.1} />
                                        <ForwardControl seconds={30} order={1.2} />
                                        <CurrentTimeDisplay order={4.1} />
                                        <TimeDivider order={4.2} />
                                        <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
                                        <VolumeMenuButton disabled />
                                    </ControlBar>
                            </Player>*/}
                            </div>

                            <div style={{ display: "flex", padding: "0px 10px", marginBottom: "20px" }} >
                                <div className="list-item"
                                    style={{
                                        backgroundImage: "url(" + this.state.show.poster + ")",
                                        width: "200px",
                                        height: "300px",
                                        marginRight: "10px"
                                    }} >
                                    {/*<img alt="ii" src={this.state.show.poster} width="80px" style={{ borderRadius: "5px", marginRight: '10px' }} />*/}
                                </div>

                                <div>
                                    <div className="display-name" style={{ marginBottom: "0px" }} >
                                        {this.state.show.name}
                                    </div>
                                    <div className="display-type" >
                                        {this.state.episode.name}
                                    </div>
                                    <div className="display-type" >
                                        {this.state.number} {this.state.episode.date}
                                    </div>
                                    <div className="display-type" >
                                        {this.state.show.keywords}
                                    </div>
                                    <div className="display-type" style={{ width: "50vw" }} >
                                        <ReadMoreAndLess
                                            ref={this.ReadMore}
                                            className="display-type"
                                            charLimit={50}
                                            readMoreText="Read more"
                                            readLessText="Read less"
                                        >
                                            {this.state.show.description}
                                        </ReadMoreAndLess>
                                    </div>
                                </div>
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
                            <div className="display-type" style={{ padding: "0px 20px", marginTop: "30px" }} >
                                Liked The Experience ?<br />
                                We are new in this industry. We apologise for any inconvenience. As a beginner your feedback
                                is important for us.
                                Please let us know if you feel some feature missing or want any particular type of content.
                            </div>
                            <div className="wrap" >
                                <Link to="/feedback" >
                                    <Button className="wrap" onClick={this.addWatchList} style={{ backgroundColor: theme.palette.primary.dark, color: theme.palette.primary.light, width: "80%", margin: "10px" }} >
                                        FEEDBACK
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ) : (
                            <div className="wrap" style={{ minHeight: "100vh" }} >
                                <div className="wrap" style={{ minHeight: "90vh" }} >
                                    <Loader
                                        type="TailSpin"
                                        color={theme.palette.primary.light}
                                        height={50}
                                        width={50}
                                        timeout={3000} //3 secs
                                    />
                                </div>
                            </div>
                        )
                }
            <Footer />
            </div>
        )
    }
}

export default function PlayScreen() {
    const { id } = useParams();
    const { season } = useParams();
    const { episode } = useParams();

    return (
        <Adapter id={id} season={season} episode={episode} />
    )
}
