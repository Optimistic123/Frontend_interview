const obj = {
    a: "Manish",
    b: function(){
        console.log("this----->",this); // obj
        let c = function() {
            console.log("Normal -->", this) // window obj
        };
        let d = () => console.log("arrow -->", this)    // obj
        c();
        d();
    },
    funArrow: () => {
        console.log("Arrow this : ", this,this.a);    // {} , undefined
        let arrowInsideArrowFunc = () => console.log("Inside this arrow", this);  // {}
        let normalInsideArrowFunc = function() {
            console.log("Inside this arrow Normal", this);  // window obj
        };
        arrowInsideArrowFunc();
        normalInsideArrowFunc();
    },
    funNormal : function(){
        console.log("Normal this : ", this,this.a);  // obj 

        let ans = [1];
        ans.forEach((item) => {
            console.log("this: ", this);   // obj
        })
    }
}

// console.log(obj.funNormal())



let Obj = {
    name : "Manish Kumar",
    normal(){
        console.log(`This is normal function defined inside obj : ${this,this.name}`)
    },
    arrow : () => {
        console.log(`Arrow function don't have their own this , laxical scope : ${this,this.name}`)
    }
}

var name = "manish kumar attached to window";
function Test() {
  console.log(`This in winodw function from normal func: ${this}, ${this.name}`);
}

const arrowFunGlobal = () => {
  console.log(`This in winodw function from arrow func: ${this}, ${this.name}`);
};

Obj.normal();
Obj.arrow();
Test();
arrowFunGlobal();


