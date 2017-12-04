import * as Contentful from 'contentful'
import _ from 'lodash'
import AppStore from '../AppStore/AppStore'
import {CONFIG} from '../Config'

export const getAppStore = () => {
    let pages = []
    let blogPosts = []

    const cms = Contentful.createClient({
        space: CONFIG.space_id,
        accessToken: CONFIG.access_token
    })

    cms.getEntries().then((response) => {
        console.log(response);
    })
}
