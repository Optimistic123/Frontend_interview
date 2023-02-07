let obj = {
    name : "Manish kumar",
    items : ["item1", "item2", "item3"],
    logItem: function(item,called) {
        console.log(`${called} : ` ,this.name, item);
    },
    printItemsNormal: function() {
        this.items.forEach( item => {
            this.logItem(item, "arrow function as callback");
        });
    },
    printItemsArrow: function() {
        this.items.forEach(function(item) {
            this.logItem(item, "regular function as callback");
        });
    },
    printItems1: function() {
        this.items.forEach( item => {
            console.log("arrow: preserv this -> " ,this.name, item);
        });
    },
    printItems2: function() {
        this.items.forEach(function(item) {
            console.log(this.name, item);
        });
    }
};

// obj.printItems();
// obj.printItems1();
// obj.printItems2();
obj.printItemsNormal();
obj.printItemsArrow();


