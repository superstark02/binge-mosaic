import React, { Component } from 'react'
import "../CSS/Pages/Display.css"
import "../CSS/Components/MyList.css"


export class Cast extends Component {
    render() {
        return (
            <div>
                <div className="h7" >
                    Cast
                </div>
                <div className="ss-container">
                    {
                        this.props.data.map(item => {
                            return (
                                <div style={{ width: "20vh", margin: "10px" }} className="w3-animate-opacity" >
                                    <div className="list-item wrap" style={{ backgroundImage: "url(" + item.photo + ")", borderRadius: "5px" }} >

                                    </div>
                                    <div>
                                        {item.actor}
                                    </div>
                                    <div className="display-type" >
                                        {item.role}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Cast
