import React, {Component} from 'react'


export default class Header extends Component {

    constructor(props){
        super(props)
        this.state={
            active: 'Home'
        }
    }

    componentDidMount() {
        const path = window.location.pathname
        console.log(path)
        let active
        if(path.includes('contact')){
            active = 'contact'
        } else if(path.includes('about')){
            active = 'about'
        } else {
            active = 'home'
        }
        this.setState({
            active: active
        })
    }

    render(){

        return(
            <header className="short-header">
                <div className="gradient-block"></div>
                <div className="row header-content">
                    <div id="logo">
                        <a href="index.html">Author</a>
                    </div>

                    <nav id="main-nav-wrap">
                        <ul className="main-navigation sf-menu">
                            <li className={this.state.active === 'home' ? 'current' : ''}><a href="/" title="Home">Home</a></li>
                            <li className={this.state.active === 'about' ? 'current' : ''}><a href="/about" title="About">About</a></li>
                            <li className={this.state.active === 'contact' ? 'current' : ''}><a href="/contact" title="Contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}
