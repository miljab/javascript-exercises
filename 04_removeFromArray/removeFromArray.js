const removeFromArray = function(array, ...extras) {
    return array.filter((x) => !extras.includes(x))
};

// Do not edit below this line
module.exports = removeFromArray;
