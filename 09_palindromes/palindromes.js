const palindromes = function (str) {
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s+/g, "").toLowerCase();
    const reversed = str.split("").reduce((word, char) => char + word, "");
    return str === reversed;
};

// Do not edit below this line
module.exports = palindromes;
