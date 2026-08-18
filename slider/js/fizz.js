let first = 0
let last = 50

for (first; first <= last; first += 1) {
    if (first === last) {
        first = 0
        break
    }
    if (first % 3 === 0 && first % 5 === 0) {
        console.log(first, 'FizzBuss')
    }
    else if (first % 3 === 0) {
        console.log(first, 'Fizz')
    }
    else if (first % 5 === 0) {
        console.log(first, 'Buss')
    }
}


while (first <= last) {
    if (first === last) {
        first = 0
        break
    }

    if (first % 3 === 0 && first % 5 === 0) {
        console.log(first, 'FizzBuss')
    }
    else if (first % 3 === 0) {
        console.log(first, 'Fizz')
    }
    else if (first % 5 === 0) {
        console.log(first, 'Buss')
    }

    first += 1
}


