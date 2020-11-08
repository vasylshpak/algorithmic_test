// знайти кількість цифр числа
const count = (n) => {
    // let count = 0;
    //
    // while (n >= 1) {
    //     n /= 10;
    //     count++;
    // }
    // return count;
    return (n + '').length;
}

console.log(count(5456456));

// знайти суму
function sum(n) {
    let array = (n + '').split('');
    let sum = 0;
    while (array.length !== 0) {
        sum += +array.pop();
    }

    return sum;
}

console.log(sum(32323))


//task_86b.test.js
const  sumOf = (n)=> {
    const array = [];
    let sum = 0;

    for (let i = 1; i < n; i++) {
        if (n % i === 0 && i !== n) {
            array.push(i);
        }
    }

    array.forEach(item => sum += item);
    return sum;
}
//всі Ідеальні натуральні числа н яке дорівнює сумі всіх своїх дільників
const ab = (n) => {
    if (n === 0) {
        return n;
    }

    const array = [];

    for (let i = 1; i <= n; i++) {
        if (sumOf(i) === i) {
            array.push(i);
        }
    }
    return array;
}


console.log(ab(6));
module.exports = { count,sum, sumOf, ab }
