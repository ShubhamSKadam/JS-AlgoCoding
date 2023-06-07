// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

const reverseStringOne = (str) => {
  return str.split("").reverse().join("");
};

const reverseStringTwo = (str) => {
  let reversed = "";

  for (let character of str) {
    reversed = character + reversed;
    console.log(reversed);
  }
  return reversed;
};

const reverseStringThree = (str) => {
  return str.split("").reduce((reversed, character) => character + reversed, "");
};

console.log(reverseStringThree("shubham"));
