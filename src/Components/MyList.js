import React, { Component } from 'react'
import "../CSS/Components/MyList.css"
import { ButtonBase } from '@material-ui/core'
import { Link } from 'react-router-dom'
//import { Link } from "react-tiger-transition";
import getNextData, {getCustomQueryNext} from '../Database/getNextData';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import shuffleArray from '../Database/shuffleArray';

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
            }).catch(e=>{
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
            }).catch(e=>{
                this.setState({ nomore: true })
            })
        }
    }

    componentDidMount() {
        if(this.props.data){
            this.setState({ data: shuffleArray(this.props.data) })
        }
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

                            <div className="list-container" >
                                {
                                    this.state.data.map(item => {
                                        return (
                                            <div style={{ display: "inline-block" }} >
                                                <ButtonBase className="w3-animate-opacity" style={{ height: "100%", marginRight: "20px" }}>
                                                    <Link to={"/display/" + item.id}
                                                        style={{ height: "100%" }}  >
                                                        <div className="list-item" style={{ backgroundImage: "url(" + item.poster + ")" }} >
                                                            <img width="20px" src={item.app} />
                                                        </div>
                                                    </Link>
                                                </ButtonBase>
                                            </div>
                                        )
                                    })
                                }
                                {
                                    !this.state.nomore ? (
                                        <div style={{ display: "inline-block" }} >
                                            <ButtonBase className="w3-animate-opacity" onClick={this.loadMore} style={{
                                                marginRight: "20px",
                                                backgroundColor: "grey",
                                                padding: "10px",
                                                boxShadow: "0px 5px 10px rgba(0,0,0,0.6)",
                                                borderRadius: "50%"
                                            }}>
                                                <div className="wrap" >
                                                    <ArrowForwardRoundedIcon />
                                                </div>
                                            </ButtonBase>
                                        </div>
                                    ) : (
                                        <div></div>
                                    )
                                }
                            </div>
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
