class Produto {
    constructor(nome, preco, desconto) {
        this._nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }

    get nome() {
        return `Produto: ${this._nome}`;
    }

    set nome(novoNome) {
        this._nome = novoNome.toUpperCase;
    }

    get preco() {
        return this._preco
    }

    set preco(novoPreco) {
        if (novoPreco >= 0) {
            this._preco = novoPreco
        }
    }

    get precoFinal() {
        return this.preco * (1 - this.desconto);
    }
}

const p1 = new Produto('Caneta', 10);
console.log(p1.nome);

const p2 = new Produto('Geladeira', 10000, 0.8);
console.log(p2.preco);
p2.preco = 9000
console.log(p2.preco)