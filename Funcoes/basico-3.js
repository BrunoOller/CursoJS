const felizNatal = () => console.log('Feliz Natal!!!')
felizNatal()

const saudacao = nome => `Fala ${nome}, blz??`
console.log(saudacao('Maria'))

const somar = (...numeros) => {
    let total = 0
    for (let n of numeros) {
        total += n
    }
    return total
}

console.log(somar(1, 2, 3))
console.log(somar(1, 2, 3, 4, 5, 6))
console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

const potencia = base => exp => Math.pow(base, exp)

console.log(potencia(2)(8))

Array.prototype.ultimo = function () {
    console.log(this[this.length - 1])
}

Array.prototype.primeiro = function () {
    console.log(this[0])
}
const numeros = [1, 2, 3, 500]
numeros.ultimo()
numeros.primeiro()

const subtrair = (a,b) => a - b

console.log(subtrair(1, 5))