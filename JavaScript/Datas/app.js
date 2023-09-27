const data1 = new Date()
console.log(data1)

const data2 = new Date(2023, 0,25,18,13)// mes 0 é janeiro pois os meses começam do zero aqui 
console.log(data2.toString())//usar o toString para aparecer melhor 

const data3 = new Date('2023-10-11 20:30:00')//outro formato aceitado para criar uma data
console.log(data3.toString())

console.log('Dia', data2.getDate())
console.log('Mes', data2.getMonth())
console.log('Ano', data2.getFullYear())
console.log('Hora', data2.getHours())
console.log('minuto', data2.getMinutes())
console.log('segundos', data2.getSeconds())
console.log('ms', data2.getMilliseconds())
console.log('Dia da semana', data2.getDay())


