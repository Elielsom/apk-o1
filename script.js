$(function(){
//declaração das variaveis globais que serão utilizadas para identificar
//de quem é a vez, e quem é o vencedor, quando este for definido 
var vez = 1;
var vencedor = "";

//Função para verificar preenchimento de uma fila
//Esta função receberá como parâmetro os índices das três casas a serem verificadas.
//Caso as três casas verificadas estejam igualmente preenchidas, define-se quem foi o vencedor, tomando como base a imagem com a qual as casas estão marcadas.
//A variável “vencedor” recebe então o valor “1” ou “2”.

function casasIguais(a, b, c){
    var casaA = $("#casa"+a);
    var casaB = $("#casa"+b);
    var casaC = $("#casa"+c);
    var bgA = $("#casa"+a).css("background-image");
    var bgB = $("#casa"+b).css("background-image");
    var bgC = $("#casa"+c).css("background-image");
    if( (bgA == bgB) && (bgB == bgC) && (bgA != "none" && bgA != "")){
        if(bgA.indexOf("1.png") >= 0)
            vencedor = "1";
        else
            vencedor = "2";
        return true;
    }
    else{
        return false;
    }
}

//Função para verificar o fim do jogo
//será responsável por verificar se o jogo acabou, ou seja, utilizando a função casasIguais, 
//verificará se alguma linha, coluna ou diagonal está preenchida e, em caso positivo, 
//exibe uma mensagem informando o vencedor do jogo. Ao final, o evento click das casas é desativado, impedindo a continuação da partida.

function verificarFimDeJogo(){
    if( casasIguais(1, 2, 3) || casasIguais(4, 5, 6) || casasIguais(7, 8, 9) ||
        casasIguais(1, 4, 7) || casasIguais(2, 5, 8) || casasIguais(3, 6, 9) ||
        casasIguais(1, 5, 9) || casasIguais(3, 5, 7)
        ){
        $("#resultado").html("<h1>O jogador " + vencedor + "venceu! </h1>");
        $(".casa").off("click");
    }
}

//Evento click das casas
//
$(".casa").click(function(){
    var bg = $(this).css("background-image");
    if(bg == "none" || bg == "")
    {          
        var fig = "url(" + vez.toString() + ".png)";
        $(this).css("background", fig);
        vez = (vez == 1? 2:1); 
        verificarFimDeJogo();
    }
});




});
