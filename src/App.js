import React, { Component } from 'react';
import './App.css';
import './Vendor.css'
import './Base.css'
import {Header} from './Components/Partials/Header.js'
import {Footer} from './Components/Partials/Footer.js'
import {Loader} from './Components/Partials/Loader.js'
import AppStore from './AppStore/AppStore.js'
import routes from './routes.js'
import {BrowserRouter} from 'react-router-dom'
import AppDispatcher from './Dispatcher/Dispatcher.js'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            removeLoader: false
        }
    }
    getStore(){
        let payload = {
            action: 'getAppStore'
        }
        AppDispatcher.dispatch(payload)
    }

    componentWillMount(){
        this.getStore()
    }

    componentDidMount(){
        AppStore.addChangeListener(this._onChange.bind(this))

        var _this = this
        setTimeout(function(){
            console.log('setTimeout is working')
            _this.setState({
                removeLoader: true
            })
        }, 1000)

    }

    componentWillUnmount(){
        AppStore.removeChangeListener(this._onChange.bind(this))
    }

    _onChange(){
        this.setState(AppStore.data)
    }


    render() {
      const data = AppStore.data
      if(!data.ready) {
          this.getStore()
          return <Loader/>
      } else if(this.state.removeLoader){
          return (
              <BrowserRouter>
                  <div>
                      <Header/>
                      {routes}
                      <Footer/>
                  </div>
              </BrowserRouter>
          );
      } else {
          return <Loader />
      }
    }
}

export default App;
