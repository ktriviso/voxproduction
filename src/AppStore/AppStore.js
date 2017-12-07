import {EventEmitter} from 'events'
import _ from 'lodash'

export default _.extend({}, EventEmitter.prototype, {
    data: {
        ready: false
    },
    emitChange: function(){
        // 'this' is the EventEmitter
        this.emit('change')
    },
    addChangeListener: function(callback){
        this.on('change', callback)
    },
    // if its not being used, it doesnt need to be listening
    removeChangeListener: function(callback){
        this.removeListener('change', callback)
    }
})
