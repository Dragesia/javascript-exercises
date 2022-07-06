const fibonacci = function(a) {
    if (a<0) return "OOPS";
    let arr = [1, 1];
    for(let i=2; i<=a; i++) {
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[a-1];
};

// Do not edit below this line
module.exports = fibonacci;
