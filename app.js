alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 1000 + 1 | 100 + 1);
let aleatorio = numeroSecreto <= 100 ? '1 e 100' : '1 e 1000';
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto chute nao for igual ao numero secreto, perguntar
{while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre ${aleatorio}`);
//se chute for igual ao número secreto
    if (chute == numeroSecreto) {
    break;
}    else {
     if (chute > numeroSecreto) {
    alert(`O número secreto é menor que ${chute}`);
}    else {
    alert(`O número secreto é maior que ${chute}`);
}
    // tentativas = tentativas + 1;
    tentativas++;
}
}}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
//if (tentativas > 1) { 
//    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
//} else {
//    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
//}