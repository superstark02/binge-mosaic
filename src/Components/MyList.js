import React, { Component } from 'react'
import "../CSS/Components/MyList.css"
import { ButtonBase } from '@material-ui/core'
import { Link } from 'react-router-dom'
//import { Link } from "react-tiger-transition";
import getNextData, { getCustomQueryNext } from '../Database/getNextData';
import shuffleArray from '../Database/shuffleArray';
import Carousel, { consts } from 'react-elastic-carousel'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

export class MyList extends Component {

    state = {
        data: null,
        nomore: null
    }

    loadMore = () => {
        if (this.props.filter.length > 3) {
            getNextData("Index", this.props.filter, this.state.data[this.state.data.length - 1].year).then(result => {
                if (result.length > 0) {
                    var temp = this.state.data;
                    result.forEach(element => {
                        temp.push(element)
                    });
                    this.setState({ data: temp })
                } else {
                    this.setState({ nomore: true })
                }
            }).catch(e => {
                this.setState({ nomore: true })
            })
        } else if (this.props.filter.length === 2) {
            getCustomQueryNext('Index', this.state.data[this.state.data.length - 1].year, this.props.filter).then(result => {
                if (result.length > 0) {
                    var temp = this.state.data;
                    result.forEach(element => {
                        temp.push(element)
                    });
                    this.setState({ data: temp })
                } else {
                    this.setState({ nomore: true })
                }
            }).catch(e => {
                this.setState({ nomore: true })
            })
        }
    }

    componentDidMount() {
        if (this.props.data) {
            this.setState({ data: shuffleArray(this.props.data) })
        }
    }

    myArrow({ type, onClick, isEdge }) {
        const pointer = type === consts.PREV ? <ArrowBackIosRoundedIcon style={{fontSize:"15px"}} /> : <ArrowForwardIosRoundedIcon style={{fontSize:"15px"}}  />
        return (
            <div className="wrap" style={{width:"auto"}} >
                <ButtonBase onClick={onClick} disabled={isEdge} style={{
                    marginRight: "20px",
                    backgroundColor: "grey",
                    padding: "10px",
                    boxShadow: "0px 5px 10px rgba(0,0,0,0.6)",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                }}>
                    <div className="wrap" >
                        {pointer}
                    </div>
                </ButtonBase>
            </div>
        )
    }

    render() {
        return (
            <div>
                {
                    this.state.data ? (
                        <div>
                            <div className="h7" >
                                {this.props.title}
                            </div>

                            <Carousel
                                renderPagination={({ pages, activePage, onClick }) => { return (<div></div>) }}
                                itemsToShow={7} itemsToScroll={7}
                                onNextStart={this.loadMore}
                                className="list-container"
                                renderArrow={this.myArrow}
                            >
                                {
                                    this.state.data.map(item => {
                                        return (
                                            <div style={{ display: "inline-block" }} >
                                                <ButtonBase className="w3-animate-opacity" style={{ height: "100%", marginRight: "20px" }}>
                                                    <Link to={"/display/" + item.id}
                                                        style={{ height: "100%" }}  >
                                                        <div className="list-item" style={{ backgroundImage: "url(" + item.poster + ")" }} >
                                                            <img style={{ borderRadius: "2px" }} width="30px" src={item.app} />
                                                        </div>
                                                    </Link>
                                                </ButtonBase>
                                            </div>
                                        )
                                    })
                                }
                            </Carousel>
                        </div>
                    ) : (
                            <div>

                            </div>
                        )
                }
            </div>
        )
    }
}

export default MyList
