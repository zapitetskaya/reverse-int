module.exports = function reverse (n) {
    if (n<0) n *= (-1);
    let val = n.toString().split('').map(Number);
    let val1 = [];
    let j = val.length-1;
    for (let i =0; i < val.length; i++){
            val1[i] = val[j];
            j--;
    }
    return val1.join("");
}
