const reverseString = function(str) {
    const myArray = str.split("");
    const newArray = [];

    for(let i=0; i<str.length; i++) {
        newArray[i] = myArray[str.length-1-i];
    }

    return newArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
