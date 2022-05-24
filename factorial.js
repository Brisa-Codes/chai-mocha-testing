function factorialize(num){

    // validate algorithm
    if(num <= 0 || num == 1)
        return 1;
    
    for(var i = num - 1; i >= 1; i--){
        // multiply the number with the previous number
        num *= i;
    }

    // return the result
    return num;
}

// logs the result of the factorialize function
// console.log(factorialize(4));

module.exports = factorialize;