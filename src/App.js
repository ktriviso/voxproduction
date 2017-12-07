import React, { Component } from 'react';
import './App.css';
import './Vendor.css'
import './Base.css'
import {Header} from './Components/Partials/Header'
import AppStore from './AppStore/AppStore.js'
import routes from './routes.js'
import {BrowserRouter} from 'react-router-dom'
import AppDispatcher from './Dispatcher/Dispatcher.js'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {

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
          return <div>Loading</div>
      } else {
          return (
              <BrowserRouter>
                  <div>
                      <Header/>
                      {routes}
                  </div>
              </BrowserRouter>
          );
      }
    }
}

export default App;
