function flatten(value) {
    let result = [];
  
    for(let i = 0; i< value.length; i++) {
      let currentElem = value[i];
      console.log("CurrentElem:", currentElem);
      if(!Array.isArray(currentElem)) {
        result.push(currentElem);
      } else {
        let newResult =  flatten(currentElem);
        console.log("Result:", result, "newResult", newResult);
        result = result.concat(newResult);
      }
    }
  
    return result;
}


console.log(flatten([1, [2, [3, [4, 6, [5]]]]]));