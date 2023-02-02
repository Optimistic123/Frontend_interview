// flaten an object : make a nested obj in a single depth obj

let obj = {
    'person' : {
        'age' : 25,
        'name' : {
            'first' : 'Manish',
            'last' : 'Kumar'
        },
        'address' : ['mahadevpura','c v raman road']
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

console.log(flatObj(obj, ''));