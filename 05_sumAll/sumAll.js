const sumAll = function(min, max) {
    let numbers = [];
    let sum = 0;
    if(!Number.isInteger(min) || !Number.isInteger(max) || min < 0 || max < 0) { return "ERROR"; }
    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
      }

    for(i=min; i<=max; i++) {
        numbers.push(i);
    }
    
    numbers.forEach(num => {
        sum += num;
    });

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
