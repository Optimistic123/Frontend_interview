function Events() {
  this.eventObj = {};
  this.eventPublishOnceObj = {};
  this.eventPublishOnceAsyncObj = {};

  this.subscribe = function (name, callback) {
    if (!this.eventObj[name]) {
      this.eventObj[name] = [callback];
    } else {
      this.eventObj[name].push(callback);
    }

    return {
      remove: () => {
        this.eventObj[name] = this.eventObj[name].filter(
          (event) => event !== callback
        );
      },
    };
  };

  this.subscribeOnce = function (name, callback) {
    if (!this.eventPublishOnceObj[name]) {
      this.eventPublishOnceObj[name] = [callback];
    } else {
      this.eventPublishOnceObj[name].push(callback);
    }
  };

  this.subscribeOnceAsync = async function (name) {
    return new Promise((resolve, rej) => {
      if (!this.eventPublishOnceAsyncObj[name]) {
        this.eventPublishOnceAsyncObj[name] = [resolve];
      } else {
        this.eventPublishOnceAsyncObj[name].push(resolve);
      }
    });
  };

  this.publish = function (name, data) {
    if (this.eventObj[name].length > 0) {
      this.eventObj[name].forEach((eventHandeler) => eventHandeler(data));
    }

    let eventPublishOnceObj = this.eventPublishOnceObj[name] || [];
    if (eventPublishOnceObj.length > 0) {
      this.eventPublishOnceObj[name].forEach((eventHandeler) =>
        eventHandeler(data)
      );
      this.eventPublishOnceObj[name] = [];
    }

    let eventPublishOnceAsyncObj = this.eventPublishOnceAsyncObj[name] || [];
    if (eventPublishOnceAsyncObj.length > 0) {
        this.eventPublishOnceAsyncObj[name].forEach((eventHandeler) =>
          eventHandeler(data)
        );
        this.eventPublishOnceAsyncObj[name] = [];
      }
  };

  this.publishAll = function (data) {
    let hanlder = Object.entries(this.eventObj);
    for (let [name, value] of hanlder) {
        value.forEach(e => e(data));
    }
  };
}

// Test cases
const events = new Events();

const newUserNewsSubscription = events.subscribe(
  "new-user",
  function (payload) {
    console.log(`Sending Q1 News to: ${payload}`);
  }
);

console.log("newUserNewsSubscription:", newUserNewsSubscription);

events.publish("new-user", "Jhon");

//output: "Sending Q1 News to: Jhon"

const newUserNewsSubscription2 = events.subscribe(
  "new-user",
  function (payload) {
    console.log(`Sending Q2 News to: ${payload}`);
  }
);

events.publish("new-user", "Doe");

//output: "Sending Q1 News to: Doe"
//output: "Sending Q2 News to: Doe"

newUserNewsSubscription.remove(); // Q1 news is removed

events.publish("new-user", "Foo");
//output: "Sending Q2 News to: Foo"

events.publishAll("FooBar");
//output: "Sending Q2 News to: FooBar"

events.subscribeOnce("new-user", function (payload) {
  console.log(`I am invoked once ${payload}`);
});

events.publish("new-user", "Foo Once");
//output: "Sending Q2 News to: Foo Once" - normal event
//output: "I am invoked once Foo Once" - once event

events.publish("new-user", "Foo Twice");
//output: "Sending Q2 News to: Foo Twice" - normal event
// once event should not invoke for second time

events.subscribeOnceAsync("new-user").then(function (payload) {
  console.log(`I am invoked once ${payload}`);
});

events.publish("new-user", "Foo Once Async");
//output: "Sending Q2 News to: Foo Once Async"
//output: "I am invoked once Foo Once Async"
