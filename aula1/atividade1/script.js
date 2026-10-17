function calcularDano(forca, sorte){
    var danoBase = forca*2
    var danoAdicional = Math.floor(Math.random()*sorte)
    return danoBase + danoAdicional
}

var forca_heroi = 20
var sorte_heroi = 5
var dano = calcularDano(forca_heroi, sorte_heroi)

console.log("Você causou "+dano+" de dano")

var forca_golem = 40
var sorte_golem = 3
var dano = calcularDano(forca_golem, sorte_golem)

console.log("Você recebeu "+dano+" de dano do golem")

alert("Bem-vindo ao labirinto!")

var resposta = prompt("Para a esquerda ouve-se um rugido terrível, para a direita um silêncio muito grande, escolha: esquerda ou direita?")
if(resposta === "esquerda"){
    alert("Era apenas um dragão dormindo, passa reto e vaza")
} else if(resposta === "direita"){
    alert("Você entra na sala e ela só tem mina terrestre. Com muita sorte, nenhuma te acertou e vc passou")
} else{
    alert("Você não fez nada e caiu num calabouço")
}