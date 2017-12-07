import React from 'react'
import {Route} from 'react-router-dom'
import AppStore from './AppStore/AppStore.js'
import Home from './Components/Home.js'

const routes_with_components = [
    {
        path: '/',
        exact: true,
        component: Home
    }
]

export default (
    <div>
        {routes_with_components.map((route) => (
            // return the actual route component
            // render cuts down on load time
            <Route exact={route.exact} path={route.path} render={(props) => {
                return <route.component data={AppStore.data} {...props} />
                }}/>
            )
        )}
    </div>
)
