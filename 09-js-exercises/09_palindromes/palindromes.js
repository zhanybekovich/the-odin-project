const palindromes = function (str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/gi, "");

  const reversed = str.split("").reverse().join("");

  return str === reversed;
};

// Do not edit below this line
module.exports = palindromes;
