const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 1, preco: 649.5 },
    { nome: 'Caderno', qtde: 4, preco: 27.45 },
    { nome: 'Lápis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.2 },
];

Array.prototype.meuReduce = function (fn, valorInicial) {
    let acc = valorInicial
    for (let i = 0; i < this.length; i++) {
        if(!acc && i === 0) {
            acc = this[i];
        } else {
            acc = fn(acc, this[i], i, this);
        }
    }
    return acc;
}

const fragil = item => item.fragil
const getTotal = item => item.qtde * item.preco
const getMedia = (acc, el) => {
    const novaQtde = acc.qtde + 1
    const novaTotal = acc.total + el
    return {
        qtde: novaQtde,
        total: novaTotal,
        qtde: novaTotal / novaQtde
    }
}

const mediaInicial = { qtde: 0, total: 0, media: 0 }

const media = carrinho
    .filter(fragil)
    .map(getTotal)
    .meuReduce(getMedia, mediaInicial)
    .media

console.log(`A média é ${media}`)