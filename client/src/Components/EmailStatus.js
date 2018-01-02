import React, {Component} from 'react'
export default class EmailStatus extends Component{
    componentDidMount(){
        setTimeout(function(){
            window.location.reload()
        },3000)
    }
    render(){
        return (
            <div className="loader">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        )
    }
}
