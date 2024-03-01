/*Agora que já conhecemos as principais estruturas do JavaScript, vamos praticar um pouco?
Com JavaScript, é claro!!! 🤓
Para a próxima semana, faça o seguinte exercício:
OBSERVAÇÕES:
- Interajam entre si, usem o grupo. Ajude o colega que ainda não entendeu. Somos uma rede 🧡
- Faça a gestão de seu tempo para que você consiga entregar os exercícios no prazo 😉
- A página pode ser feita pelo editor de texto online Codesandbox (Não esqueça de deixar o codigo público no Codesandbox) ou pelo Visual Studio Code.
- A entrega deve ser feita aqui mesmo, pelo classroom.*/

/*01 - crie uma condição composta com uma variável dia e a condição verifica se está de dia mostre 'claro'
senão mostre está 'de noite'*/
console.log("Exercicio 1")
let dia = true;

if(dia == true){
    console.log("Claro")
}
else{
    console.log("De noite")
}
/*02 - Crie um loop for() que exiba apenas números pares até o 20 no console.log()*/
console.log("\n")
console.log("Exercício 2")
let i = 0
for(i = 0; i<=20; i++){
    if (i%2 == 0){
        console.log(i)
    }
}
/*03 - crie uma função que exiba uma mensagem no console*/
console.log("\n")
console.log("Exercício 3")
function ExibirMensagemNoConsole(){
    console.log("Exibir esta mensagem quando a função for chamada!")
    }
    ExibirMensagemNoConsole()
/*04 - crie uma função que receba o seu nome como (parâmetro) e exiba no console*/
console.log("\n")
console.log("Exercício 4")
function ExibirNome(nome){
    console.log("Meu nome é " + nome)
}

ExibirNome("Thiago")
/*05 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console*/
console.log("\n")
console.log("Exercício 5")
function ExibirInformacao(nome, idade, estiloMusical){
    console.log("Nome: " +nome,
    "\nIdade: "+idade,
    "\nMeu estilo musical é: "+ estiloMusical)
}
ExibirInformacao("Thiago", "30", "rock")
/*06 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console*/
console.log("\n")
console.log("Exercício 6")
function ExibirFilmeMusica(filme, musica){
    console.log("Um Filme qualquer: "+filme,"\nMusica qualquer: " +musica)
}
ExibirFilmeMusica("Truque de mestre","Lost in the Echo - Linkin Park")
/*07 - crie uma função que retorne o triplo do número recebido no parâmetro da função*/
console.log("\n")
console.log("Exercício 7")
function MultiplicarTres(numbers){
    var numero = numbers*3
    console.log(numero)
}
MultiplicarTres(9)
/*08 - crie uma função que  verifique se uma  variável é true ou false*/
console.log("\n")
console.log("Exercício 8")
function VerdadeiroOuFalso(value){
    if(value){
        console.log("Esse valor é verdadeiro " +value)
    }
    else{
        console.log("Este valor é Falso "+value)
    }
}
let dias = true;
VerdadeiroOuFalso(dias)
/*09 - Crie um array que receba 5 itens e exiba no console.*/
console.log("\n")
console.log("Exercício 9")
/*let itens = [];
function InserirItens(item1, item2, item3, item4, item5){
    itens.push(item1, item2, item3, item4, item5)
}
function MostrarItens(itens){
    itens.forEach(itens => {console.log(itens)       
    });
}
InserirItens("1","2","3","4","5")
MostrarItens(itens)*/
let itens =["1","2","3","4","5"]
itens.forEach(itens => {console.log(itens)
    
});
/*10 - Utilize um método para adicionar um nome ao inicio do array.*/
console.log("\n")
console.log("Exercício 10")
let itens2 =["1","2","3"]
itens2.forEach(itens2 => {
    console.log(itens2)    
 });
function AdicionarAoInicio(item){
    itens2.unshift(item)

}
console.log("adicionando o numero 10 ao inicio do array")
 AdicionarAoInicio("10")
 itens2.forEach(itens2 => {
    console.log(itens2)    
 });
 /*11 - Utilize um método para remover o último nome do array.*/
console.log("\n")
console.log("Exercício 11")
let itens3 =["1","2","3","4","5"]
itens3.forEach(itens3 => {
    console.log(itens3)    
 });
function RemoverUltimo(item){
    itens3.pop(item)

}
 RemoverUltimo("10")
console.log("removendo ultimo item do array")
 itens3.forEach(itens3 => {
    console.log(itens3)    
 });
 /*12 - Utilize um método para adicionar dois nomes ao fim do array.*/
 console.log("\n")
console.log("Exercício 12")
let itens4 =["1","2","3","4","5"]
itens4.forEach(itens4 => {
    console.log(itens4)
});
function AdicionandoVariosNumeros(...item){
    itens4.push(...item)
}
console.log("Adicionando varios números ao final do array")
AdicionandoVariosNumeros("7","8","9")

itens4.forEach(itens4 => {
    console.log(itens4)
});
/*13 - Utilize um método para remover o primeiro nome do array.*/
console.log("\n")
console.log("Exercício 13")
let itens5 =["1","2","3","4","5"]
itens5.forEach(itens5 => {
    console.log(itens5)
});
function RemoverPrimeiroItem(){
    itens5.shift()
}
RemoverPrimeiroItem()
console.log("Removendo primeiro item do array")
itens5.forEach(itens5 => {
    console.log(itens5)
});
/*14 - Utilize um método para adicionar no meio deste array.
let nome = ["João",  "Maria",  "Jose",  "Pedro"]*/
console.log("\n")
console.log("Exercício 14")
let nome = ["João",  "Maria",  "Jose",  "Pedro"]
console.log(nome)
function AdicionarEmQualquerPosicao(nome, indice, nomes){
    nome.splice(indice,0  ,nomes)
}
console.log("Adicionando ou removendo um item em qualquer lugar do array, nesse caso será no meio")
AdicionarEmQualquerPosicao(nome, 2, "Thiago")
console.log(nome)
/*15 - Utilize um método para organizar em ordem crescente o seguinte array:
 let numbers = [7,5,6,3,8,9,2,1,4]*/
 console.log("\n")
console.log("Exercício 15")
let numbers = [7,5,6,3,8,9,2,1,4]
console.log(numbers)
console.log("Organizando o array em ordem crescente")
function OrganizarOrdemCrescente(){
    numbers.sort((a ,b) => a - b)
}
OrganizarOrdemCrescente(numbers)
console.log(numbers)
