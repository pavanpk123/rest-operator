function sum(...args) {
    let sum = 0;
    for(let arg of args) sum+= arg;
    return sum;
}
let x = sum(4,6,7,15,21,34,65,78);
console.log(x)