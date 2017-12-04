import {EventEmitter} from 'events'
import _ from 'lodash'

export default _.extend({}, EventEmitter.prototype, {
    data: {

    },
    emitChange: () => {
        // 'this' is the EventEmitter
        this.emitChange()
    },
    addEventListener: (callback) => {
        this.on('change', callback)
    },
    // if its not being used, it doesnt need to be listening
    removeChangeListener: (callback) => {
        this.removeListener('change', callback)
    }
})
