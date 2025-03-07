events: {},
subscribe: function(event, callback) {
if (!this.events[event]) this.events[event] = [];
this.events[event].push(callback);
},
publish: function(event, data) {
if (this.events[event]) {
this.events[event].forEach(callback => callback(data));
}
}
};
pubSub.subscribe("greet", message => console.log("Received:", message));
pubSub.publish("greet", "Hello Pub/Sub!");