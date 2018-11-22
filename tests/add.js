const { expect } = require('chai');

const { add } = require('../src/add');

describe('Test The Add Function', () => {
  it('should flag when there are invalid inputs', () => {
    let sum = add();
    expect(sum).to.equal(0);

    sum = add('1', '5');
    expect(sum).to.equal(0);
  });


  it('should add 2 numbers', () => {
    let sum = add(1, 3);
    expect(sum).to.equal(4);
  });

  it('should add any number numbers', () => {
    let sum = add(1, 3, 6, undefined, null, 7, 8, 9, {}, [], 'xFF0', isNaN);
    expect(sum).to.equal(34);
  });
});

