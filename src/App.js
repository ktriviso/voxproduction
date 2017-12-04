import React, { Component } from 'react';
import './App.css';
import './Vendor.css'
import './Base.css'
import {Header} from './Components/Partials/Header'
import Home from './Components/Home.js'
import AppStore from './AppStore/AppStore.js'
import routes from './routes.js'
import {BrowserRouter} from 'react-router-dom'
import AppDispatcher from './Dispatcher/Dispatcher.js'

class App extends Component {
    getStore(){
        let payload = {
            action: 'getAppStore'
        }
        AppDispatcher.dispatch(payload)
    }

    componentWillMount(){
        this.getStore()
    }

    render() {
      const data = AppStore.data
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

export default App;
