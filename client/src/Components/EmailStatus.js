import React, {Component} from 'react'
export default class EmailStatus extends Component{
    componentDidMount(){
        setTimeout(function(){
            window.location.reload()
        },3000)
    }
    render(){
        return (
            <div id="loader-container">
                <div className="email-loader">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </div>
        )
    }
}
