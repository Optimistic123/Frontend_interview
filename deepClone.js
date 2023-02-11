function deepClone(inp) {
    if (inp === null || typeof inp !== "object") return inp;
    
    if (Array.isArray(inp)) {
      let clone = [];
      for (let i = 0; i < inp.length; i++) {
        clone[i] = deepClone(inp[i]);
      }
      return clone;
    }

    let clone = {};
    for(let key in inp) {
        if(inp.hasOwnProperty(key)) {
            clone[key] = deepClone(inp[key]);
        }
    }

    return clone;
}

let obj = {
    'experience' : ['policybazaar.com', 'freshworks', {'firstOrg' : 'policybazaar.com', 'secondOrg' : {'orgName': 'freshworks', 'teamName':'Tech Team Trans'}}],
    'person' : {
        'age' : 25,
        'name' : {
            'first' : 'Manish',
            'last' : 'Kumar'
        },
        'address' : ['mahadevpura','c v raman road']
    }
}

let cloneObj = deepClone(obj);
cloneObj.person.name.first = 'changed first name';
console.log(obj, cloneObj);