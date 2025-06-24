function run(fn) {
    fn()
}

function sayHello() {
    console.log('Hello!!')
}

run(sayHello)

run(function() {
    console.log('Hello!')
})

const result = run(Math.random)
console.log(result)