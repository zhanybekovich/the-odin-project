const fibonacci = function (n) {
  if (n < 0) {
    return "OOPS";
  } else if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

console.log(fibonacci(4));
// Do not edit below this line
module.exports = fibonacci;
