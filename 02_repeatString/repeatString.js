const repeatString = function (word, times) {
    if (times < 0) return "ERROR";
    let string = [];
    for (let i = 0; i < times; i++) {
        string.push(word);
    }
    return string.join("");
  };  

// Do not edit below this line
module.exports = repeatString;
