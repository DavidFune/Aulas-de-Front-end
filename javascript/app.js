// trabalhando com id 
//var input = document.getElementById("quantidade"); // ";"é opcional
//var inputpreco1 = document.getElementById("preco1"); // variavel preco para incrementar o preço 

/*
sem refatoração incrementa o preço

    como no html os itens estão separodos por classes, podemos limitar as busca do preços 
    por iem de cada classe o .closet pega o elemento mais proximo acima que contem a classe item


    var item = botonincrementa.closest('.item');// acontecendo
    var precoItem = item.querySelector('.preco-item'); // referente a encapsulamento
    
//capturando o valos do 'td' no html que é um texto e 
//convertendo em numero
var preco = Number(precoItem.textContent); 

    var elemtTotal = document.querySelector("#total");
    elemtTotal.textContent = preco + Number(elemtTotal.textContent);

*/


//#####################    Incrementa   #############################

var botonsincrementa = document.querySelectorAll(".btn-incrementa"); /**
querySelector pega apenas o primeiro elemento mas o querySelectorAll pega todos 
da que tem essa classe
o # indica que busca poi um "id", o "." classe e um elemento apenas o nome
var botonincrementa recebe os elementos id do html btn-incrementa
*/

for (let boton of botonsincrementa) { // let são variaveis diferentes sendo criadas dentro de um unico escopo

    boton.addEventListener('click', incrementa);

    function incrementa() {
        var item = boton.closest('.item');

        var input = item.querySelector('.quantidade');
        input.value++;

        var preco = pegarPrecoIntem(item);
        addAoTotal(preco);
    }
}


//#####################    Decrementa   #############################

var botonsdecrementa = document.querySelectorAll(".btn-decrementa");

for (let boton of botonsdecrementa) {
    boton.addEventListener('click', decrementa);
    function decrementa() {

        var item = boton.closest('.item');

        var input = item.querySelector('.quantidade');

        if (input.value > 0) {
            input.value--;
            var preco = pegarPrecoIntem(item);
            addAoTotal(-preco);
        }

    }
}

//#############  Formulario   #######################

var formPedido = document.forms.pedido; // capturando todos os formularios com o nome pedido

// funçoes anonimas são declaradas e escrita dentro do escopo do problema onde são chamadas,
//são usadas quando tem a nessecidade de chamada apenas uma vez
formPedido.addEventListener('submit', function(event){ // event e passado por paramento pelo js

    var cont = 0;

    var inputs = formPedido.querySelectorAll('input.quantidade');
    
    for(let input of inputs){

        if(input.value >0){
            cont++;
        }
    }
    if (cont == 0){
        alert('Deve ter pelo menos 1 pizza no pedido');
        event.preventDefault();// impede que o formulario seja enviado se nada for preenchido
        // condição do if
    }
});

// funçoes adicionais

function pegarPrecoIntem(item) {

    var precoItem = item.querySelector('.preco-item');
    return Number(precoItem.textContent);
}

function addAoTotal(valor) {

    var elemtTotal = document.querySelector("#total");
    elemtTotal.textContent = valor + Number(elemtTotal.textContent);
}



