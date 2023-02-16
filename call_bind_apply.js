// call, bind and apply

function sayhi(gretting1, gretting2 ) {
    // let args = [...gretting]
    console.log(gretting1 + ', ' + gretting2 + ',' + this.name);
}

let person = {
    'name' : 'manish kumar'
};

sayhi.call(person, 'hello', 'Hello2');
sayhi.apply(person, ['hello', 'Hello2']);

let bindfunctionSayhi = sayhi.bind(person, 'hello', 'hello2');

bindfunctionSayhi();