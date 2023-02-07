
var Foo = function (a) {

  this.bar = () => {
    return a;
  };

  this.baz = function () {
    return a;
  };

};

var f = new Foo(7);

Foo.prototype.addMethod = function(name, fn) {
    this[name] = fn ;
};

f.addMethod('biz', function() {
    console.log("this", this, this.bar());
    // console.log(this.Foo.bar);
})


// f.bar(); 
// f.baz(); 
f.biz(); 
// console.log(f);