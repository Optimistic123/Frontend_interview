// flaten an object : make a nested obj in a single depth obj

let obj = {
    'person' : {
        'age' : 25,
        'name' : {
            'first' : 'Manish',
            'last' : 'Kumar'
        },
        'address' : ['mahadevpura',{"new Address" : {
            "roadName" : "c v raman",
            "flatNumber" : '101'
        }}]
    },
    'experience' : ['policybazaar.com', 'freshworks', {'firstOrg' : 'policybazaar.com', 'secondOrg' : 'freshworks'}]
}

let flatObj = (obj) => {   // 
    let result = {};  // { 'age' : '25'}
    for(let key in obj) {
        if(typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            let temp = flatObj(obj[key]);  
            for(let key1 in temp) {
                result[key+'.'+key1] = temp[key1];  // {'age': '25','name.first' : 'Manish','name.last' : 'Kumar'}
            }
        } else {
            result[key] = obj[key];  
        }
    }

    return result;
}


let flatObjWithoutInnerFor = (obj, prefix = '', result = {}) => {   // 
    for(let key in obj) {
        let newKey = prefix ? `${prefix}.${key}` :  key;
        if(typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            flatObjWithoutInnerFor(obj[key], newKey, result);
        } else {
            result[newKey] = obj[key];  
        }
    }

    return result;
}

// console.log(flatObj(obj));
// console.log(flatObjWithoutInnerFor(obj, '', {}));


let flatAnObj = ( obj, newKey = '') => {

    let result = {};

    for(let key in obj){
        // Array
        let val = obj[key];
        if(Array.isArray(obj[key])) {
            let copiedArr = [];
            for( let i = 0; i < val.length; i++) {
                if(typeof val[i] === 'object') {
                    let flatObject = flatAnObj(val[i]);
                    let newObj = {};
                    for(let flatkey in flatObject) {
                        newObj[flatkey] = flatObject[flatkey];
                    }
                    copiedArr[i] = newObj;

                } else {
                    copiedArr[i] = val[i];
                }
            }
            
            result[key] = copiedArr;

        } else if( typeof obj[key] === 'object' ) {
            let flatObj = flatAnObj(obj[key],newKey+key+'.');
            for(let flatkey in flatObj) {
                result[flatkey] = flatObj[flatkey];
            }
        } else {
            result[newKey+key] = obj[key];
        }
    }
    
    return result;

}

console.log(flatAnObj(obj,'',{}));
