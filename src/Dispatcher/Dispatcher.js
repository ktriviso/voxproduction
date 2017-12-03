import {Dispatcher} from, 'flux'
import {getAppStore} from '../Actions/Actions.js'

const Dispatcher = new Dispatcher()

Dispatcher.resgister((payload) => {
    let action = payload.action
})
