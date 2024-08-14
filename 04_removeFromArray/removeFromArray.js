// const removeFromArray = function(array, ...args) {
//     // if(haystack.includes(needle)) {
//     //     needleIndex = haystack.indexOf(needle); 
//     //     if(needle.length>1) {
//     //         cleanHaystack = haystack.splice(needleIndex, needle.length);
           
//     //     }
//     //     else {
//     //         cleanHaystack = haystack.splice(needleIndex, 1);
//     //     }
//     //     console.log(needleIndex);
//     //     // return haystack;
//     // }

   

// };

const removeFromArray = function(array, ...args) {
    return array.filter(val => !args.includes(val));
}
// Do not edit below this line
module.exports = removeFromArray;
