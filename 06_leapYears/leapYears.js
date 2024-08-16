const leapYears = function(year) {
    const isbyFour = year % 4 === 0;
    const isHundred = year % 100 === 0;
    const isHundredByFour = year % 400 === 0;
    if(isbyFour && (!isHundred || isHundredByFour)) {
        return true;
    }
   else {
        return false;
   }
};


// Do not edit below this line
module.exports = leapYears;
