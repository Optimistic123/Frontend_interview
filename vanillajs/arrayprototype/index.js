Array.prototype.listener = {};   // for mainting the attached event listener


Array.prototype.addListener = function(eventName, callback) {
    if (!this.listener[eventName]) this.listener[eventName] = [];
    this.listener[eventName].push(callback);
};


Array.prototype.pushWithEvent = function(eventName, inputArgs)  {
    this.push(...inputArgs);
    if(this.listener[eventName]) {
        const allCallback = this.listener[eventName];
        allCallback.forEach(callback => {
            console.log("callback", inputArgs, this)
            callback(eventName, inputArgs, this);
        })
    }
};



const arr = [];

arr.addListener('add', (eventNames, items, array) => {
    console.log(`eventNames: ${eventNames}, itmes: ${items}, array: ${array}`);
})

arr.pushWithEvent('add', [10,20]);