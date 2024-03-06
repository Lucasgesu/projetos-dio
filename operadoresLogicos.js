//And(&&)
/*
exemplo1
let idade = 18
let vistoVerificado = false
let resultado = (idade >= 18) && (vistoVerificado === true)
console.log(resultado)
*/
/*
exemplo1
let moedasColetada = 100
let item = "estrela"
let resultado = (moedasColetada >=100) && (item === "estrela")
console.log(resultado)
*/
//or(||)
/*
let tempo = "chuva"
let item = "guarda chuva"
let podeSair = (tempo !=="chuva") || (item ==="guarda chuva")
console.log("o personagem pode sair?", podeSair)
*/
//not(!)
/*
exemplo1
let tempo = "chuva"
let resultado = tempo !== "chuva"
console.log(resultado)
*/
let tempo = "chuva"
let horario = 8
let resultado = !((tempo !== "chuva") && (horario > 6))
console.log(resultado)