import React, { Component } from 'react';
import './Base.css'
import './Vendor.css'
import './App.css';
import Header from './Components/Partials/Header.js'
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

        window.embedFunction = (w, d) => {
            var id='embedly-platform', n = 'script';
            if (!d.getElementById(id)){
            w.embedly = w.embedly || function() {(w.embedly.q = w.embedly.q || []).push(arguments);};
            var e = d.createElement(n); e.id = id; e.async=1;
            e.src = ('https:' === document.location.protocol ? 'https' : 'http') + '://cdn.embedly.com/widgets/platform.js';
            var s = d.getElementsByTagName(n)[0];
            s.parentNode.insertBefore(e, s);
            }
            }
            window.embedFunction(window, document)
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
