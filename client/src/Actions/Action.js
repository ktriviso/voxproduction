import * as Contentful from 'contentful'
import _ from 'lodash'
import AppStore from '../AppStore/AppStore'
import {CONFIG} from '../Config'

export const getAppStore = (callback) => {

    const cms = Contentful.createClient({
        space: CONFIG.space_id,
        accessToken: CONFIG.access_token
    })


    cms.getEntries().then((response) => {
        console.log(response);
        const responseItems = response.items
        const blogPosts = _.filter(responseItems, (item) => {
            return item.sys.contentType.sys.id === 'blogPost'
        })
        const featuredPosts = blogPosts.filter((post) => post.fields.featured === true)
        const aboutData = _.find(responseItems, (item) => {
            return item.sys.contentType.sys.id === 'about'
        })
        const contactData = _.find(responseItems, (item) => {
            return item.sys.contentType.sys.id === 'contact'
        })

        AppStore.data.blogPosts = blogPosts
        AppStore.data.featuredPosts = featuredPosts
        AppStore.data.about = aboutData
        AppStore.data.contact = contactData
        AppStore.data.ready = true

        AppStore.emitChange()

        if(callback){
            callback(false, AppStore)
        }
    })
}
