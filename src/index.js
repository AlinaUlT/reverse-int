module.exports = function reverse (n) {
  return Math.floor(n.toString().split("").reverse().filter((num) => num !== "-").join(""));
}
