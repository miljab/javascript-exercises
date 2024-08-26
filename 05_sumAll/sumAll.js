const sumAll = function(a, b) {
    if(!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0)
        return 'ERROR'

    let sum = 0;
    let start, end;

    if (a < b) {
        start = a;
        end = b;
    } else {
        start = b;
        end = a;
    }

    for(let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
