
const pessoa1 = {
    nome: `leonardo`,
    sobrenome: `bertoletti`,
    idade: 23,
    
    fala() {console.log(`${this.nome} diz oi`)}
}

// outra maneira mais parecido com o java pra criar varios 
function CriaPessoa (nome,sobrenome, idade) {
    return{
        //nome: nome,
        //sobrenome: sobrenome,
        //idade: idade,
        nome, sobrenome, idade, //ele entende quando for valores de nomes iguais igual esta comentado em cima 

    
    }
}
let num = 1

const p1 = CriaPessoa(`Leonardo`,`Bertoletti`,23)
console.log(p1.Fala())
