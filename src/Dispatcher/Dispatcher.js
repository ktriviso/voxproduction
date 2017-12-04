import {Dispatcher} from 'flux'
import {getAppStore} from '../Actions/Action.js'

const AppDispatcher = new Dispatcher()

AppDispatcher.register((payload) => {
    let action = payload.action

    switch(action){
        case 'getAppStore':
            getAppStore()
            break

        default:
            return true
            // why wouldnt this return false
            // took the return true statement from the flux documentation
    }
    return true
})

export default AppDispatcher
