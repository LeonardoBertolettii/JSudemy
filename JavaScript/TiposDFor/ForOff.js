const nome = 'leonardo bertoletti'
// esse pega o valor de cada indice 
// continue para pular algum valor
for (let i of nome){
    if (i === 'e') continue //pulou os e
    if (i === 't') break //para quando encontra um t
    console.log(i)
}
