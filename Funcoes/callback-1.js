function exec(fn, a, b) {
    return fn(a, b)
}

const somarNoTerminal = (x, y) => console.log(x + y)
const subtrairNoTerminal = (w, z) => console.log(w - z)
const subtrair = (w, z) => w - z

exec(somarNoTerminal, 56, 38)
exec(subtrairNoTerminal, 56, 27)

const r = exec(subtrair, 50, 25)
console.log(r)

setInterval(function () {
    console.log('Exec...')
}, 1000)