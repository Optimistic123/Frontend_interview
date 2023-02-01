// 1. Sum and Avg
// sum_avg(10)(10,20)(40)()
// sum_avg();

let sum_avg = (...args) => {

    let total_args = [...args];
    if(args.length === 0) return 0;
    
    // ! curry function return a function so that it could it take the next arguments in line
    let sum_avg_res = (...args2) => {
        total_args.push(...args2);
        if(args2.length === 0) {
            let sum = total_args.reduce((a,b) => a+b , 0);
            return {
                "sum" : sum,
                "avg" : sum /total_args.length
            }
        } else {
            return sum_avg_res;
        }
    }

    return sum_avg_res;
} 

console.log(sum_avg(10)(10,20)(40)());
console.log(sum_avg());