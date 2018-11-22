const add = (...inputs) => {
  const numbers = inputs.filter((input) => {
    const isNumber = typeof input === 'number'; // true if "input" is a number
    if (!isNumber) { // flag when "input" isn't a number
      console.log(`${input} is not a number`);
    }

    return isNumber;
  });

  const sum = numbers.reduce((total, input) => total + input, 0);

  return sum;
};

module.exports = { add };
