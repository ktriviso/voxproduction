import React from 'react'
import {Route} from 'react-router-dom'
import AppStore from './AppStore/AppStore.js'
import Home from './Components/Home.js'
import About from './Components/About.js'
import Contact from './Components/Contact.js'
import Blog from './Components/Blog.js'

const routes_with_components = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/about',
        exact: true,
        component: About
    },
    {
        path: '/contact',
        exact: true,
        component: Contact
    },
    {
        path: '/blog/:blogPostId',
        exact: true,
        component: Blog
    }
]

export default (
    <div>
        {routes_with_components.map((route) => (
            // return the actual route component

            <Route exact={route.exact} path={route.path} render={(props) => {
                return <route.component data={AppStore.data} {...props} />
                }}/>
            )
        )}
    </div>
)
