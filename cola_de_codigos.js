//1-exiba a mensagem "Ola mundo" no console.
console.log("Ola mundo");
//2-crie uma variavel com seu nome e exiba o valor no console.
let nome= "gregory";
console.log(nome);
//3-some dois numeros e exiba o resultado

let numero1= 1;
let numero2 = 2;

let somar = numero1 + numero2;
console.log(somar);


//forma do professor

let soma = 10+5;
console.log(soma);

//4-subtraia dois numeros e exiba o valor
let soma2 = 10-5;
console.log(soma2);

//5-descubra o resto da divisão de um numero por outro
let resto = 10 % 3;
console.log(resto);

//6-crie uma variavel booleana(true false) e exiba seu valor

let estaChovendo = true;
console.log(estaChovendo);

//7- verifique se um numero é maior que outro e exiba o resultado

n1= 2;
n2=7;
if(n1<n2){
    console.log("menor")
};

//jeito do professor
let maiorQue = 18 > 21;
console.log(maiorQue);

//8-Crie 2 variaveis e exiba a concatenação

let vari1 = "teste1";

let vari2  = "teste2";

console.log(`mostrar ${vari1} ${vari2}`);

//9-descubra o tipo de uma variavel
let valor = 100;
console.log(typeof valor); //typeofvmostra o tipo da variavel

//10-converta numero para string

let num = 50;
console.log(String(num));

//11- string para numero

let texto = "teste";
console.log(Number(texto));



//                             LAÇOS DE REPETIÇÃO

//12-exiba no console numero de 0 a 10

for(let i =0; i<=10; i++){
    console.log(i);
}

//13-exiba apenas numeros pares até 20
for(let i =0; i<=20; i+=2){
    console.log(i);
}
//14-mostre no console numeros de 10 ate 1
for(let i =10; i>=1; i--){
    console.log(i);
}

//15- some numero de 1 a 5
n1 = 1,n2 = 2,n3 = 3,n4 = 4,n5 = 5
let a = n1+n2+n3+n4+n5;
console.log(a);

//jeito do professor
let somaLoop = 0;
for(let i=1; i<=5; i++){
    somaLoop+=i;
    console.log("valor de i"+i+"valor de loop"+somaLoop);
}
console.log(somaLoop);

//16- faça a tabuada do 3
for(let i =0; i<=30; i+=3){
    console.log(i);
}
