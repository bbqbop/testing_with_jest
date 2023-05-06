exports.capitalize = (string) => {
    return string[0].toUpperCase() + string.slice(1);
};

exports.calculator = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    divide: (x, y) => x / y,
    multiply: (x, y) => x * y,
}

exports.caesarsCipher = function(string, num) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const alphabetUpper = alphabet.toUpperCase();
    
    const array = string.split('');
    const shiftedArray = [];

    array.forEach(letter => {
        if (!!letter.match(/^[.,:!?'"]/)) {
            return shiftedArray.push(letter)
        }
        let lowerCased = letter.toLowerCase();
        let idx = alphabet.indexOf(lowerCased) + num;
        if (idx >= alphabetUpper.length){
            idx = idx - alphabetUpper.length
        }
        if (letter.toUpperCase() === letter){
            return shiftedArray.push(alphabetUpper[idx])
        }
        return shiftedArray.push(alphabet[idx]);
    })
    return shiftedArray.join('');
};

exports.analyzeArray = function(array) {
    const average = array.reduce((prev, next) => prev + next) / array.length;
    const min = array.reduce((prev, next) => next < prev ? next : prev);
    const max = array.reduce((prev, next) => next > prev ? next : prev);
    const length = array.length;
    return {
        average, min, max, length
    }
}
