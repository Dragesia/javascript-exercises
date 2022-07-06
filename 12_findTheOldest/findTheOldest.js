const findTheOldest = function(ppl) {
    let oldest = 0, index;
    for (let i=0; i<ppl.length; i++) {
        if(ppl[i].yearOfDeath == undefined) {
            ppl[i].age = (new Date()).getFullYear() - ppl[i].yearOfBirth; 
        } else {
            ppl[i].age = ppl[i].yearOfDeath - ppl[i].yearOfBirth;
        }

        if(ppl[i].age > oldest) {
            oldest = ppl[i].age;
            index = i;
        }
    }

    return ppl[index];
};

// Do not edit below this line
module.exports = findTheOldest;
