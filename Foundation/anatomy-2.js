// Anonymous Function

(function (a, b, c) {
    return a + b + c
})

const sum = function (a, b) {
    return a + b
}

console.log(sum(5, 15))

const result = sum(5, 15)
console.log(result)

const anotherSum = sum
console.log(anotherSum(5, 15))

let x = 3
console.log(x)