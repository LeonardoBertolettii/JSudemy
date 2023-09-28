
const pessoa1 = {
    nome: `leonardo`,
    sobrenome: `bertoletti`,
    idade: 23,
    endereço:{
        rua: 'sss',
        numero: 2589
    },
    fala() {console.log(`${this.nome} diz oi`)}
}
//console.log(pessoa1.nome)
//Atribuição via desestruturacao em objeto para criar fora do const a variavel com a msm nomeclatura ou diferete 
// funcao rest funciona aqui tbm
const {nome: n, sobrenome,...resto} = pessoa1
// agr nao precisar por o pessoa1.nome apenas nome
console.log(n,resto)


// outra maneira mais parecido com o java pra criar varios 
function CriaPessoa (nome,sobrenome, idade) {
    return{
        //nome: nome,
        //sobrenome: sobrenome,
        //idade: idade,
        nome, sobrenome, idade, //ele entende quando for valores de nomes iguais igual esta comentado em cima 
    }
}
const p1 = CriaPessoa(`Leonardo`,`Bertoletti`,23)
//console.log(p1.Fala())
