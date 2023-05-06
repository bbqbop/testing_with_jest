const {capitalize, calculator, caesarsCipher, analyzeArray} = require('./functions');

test('Capitalize the first letter', () => {
    expect(capitalize('john')).toBe('John');
});

test('Adding', () => {
    expect(calculator.add(3, 5)).toBe(8);
})

test('Subtract', () => {
    expect(calculator.subtract(99,7)).toBe(92);
})

test('Divide', () => {
    expect(calculator.divide(88,8)).toBe(11);
});

test('Multiply', () => {
    expect(calculator.multiply(2,9)).toBe(18);
});

test('Caesars Cipher: wraps from z to a', () => {
    expect(caesarsCipher('Zoo', 1)).toBe('App');
});

test('Caesars Cipher: Keeps the case', () => {
    expect(caesarsCipher('aSoZ', 0)).toBe('aSoZ');
});

test('Caesars Cipher: Punctuation remains', () => {
    expect(caesarsCipher('.!?"z"', 17)).toBe('.!?"q"');
});

test('analyzeArray', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      });
});

