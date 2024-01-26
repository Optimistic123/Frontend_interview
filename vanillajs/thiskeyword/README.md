will take of the behaviour of this keyword


1. object form
2. constructor function/class


Each normal function defined as: function() {} => have their own this -> global 
so to maintain the scope we have to bind function() {}
in case of arrow function : 
   > they inherit the this value from the surrounding lexical scope where they are defined.
   > refers to the instance of the context in which the arrow function is defined.