const fibonacci = function(x) {
    x = parseInt(x);
    if (x < 0) return "OOPS";
    if (x === 0) return 0;
    if (x === 1 || x === 2) return 1;

    let a = 1, b = 1;
    let temp;

    for (let i = 3; i <= x; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }

    return b;
};

// Do not edit below this line
module.exports = fibonacci;
