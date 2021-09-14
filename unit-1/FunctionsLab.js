const printGreeting = name => `Hello there, ${name}`

console.log(printGreeting("Slimer"));

const reverseWordOrder = word => word.split(' ').reverse().join(' ');

console.log(reverseWordOrder(`Ishmael me Call`));

const calculate = (x, y, op) => {
    if (op === 'add') {
        return x + y;
    }
    else if (op === 'sub') {
        return x - y;
    }
    else if (op === 'mult') {
        return x * y;
    }
    else if (op === 'div') {
        return x / y;
    }
    else if (op === 'exp') {
        return x ** y;
    }
}

console.log(calculate(4, 3, "sub"));
console.log(calculate(4, 3, "exp"));

const printConsecutives = arr => {
    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] === arr[i+1]-1 && arr[i] === arr[i+2]-2) {
            console.log(arr[i] + ' ' + arr[i+1] + ' ' + arr[i+2]);
        }
    }
}

printConsecutives([1, 2, 3, 9, 8, 0, 44, 45, 46, 2, 9]);

printConsecutives([0, 0, 0, -3, -2, -1, 0, 1, 2, 3]);

const letterReverse = str => {
    let newStr = [];
    for (word of str.split(' ')) {
        newStr.push(word.split('').reverse().join(''));
    }
    return newStr.join(' ');
}

console.log(letterReverse("Luke I am your father"));