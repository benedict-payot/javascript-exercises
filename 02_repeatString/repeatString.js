const repeatString = function() {
    let str = "hey";
    const result = [];
    for(i=0; i<3; i++) {
        result.push(str);
    }
    return result.join("");
    
};

// Do not edit below this line
module.exports = repeatString;
