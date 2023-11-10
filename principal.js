/*Criada função genérica para selecionar todos os id's das teclas, possibilitando acionar
cada som diferentemente*/

/*function tocaSom(idElementoAudio) a condição da função será substituida pois quando colocamos
para reproduzir o elemento a partir de button, no inspecionar, aparece erro e não executa,
iremos melhorar o código adicionando mais condições*/

/* Em seguida é criada uma constante para o document.querySelector, chamada elemento, para armazenar
o retorno (document.querySelector() é um retorno) */

function tocaSom(seletorAudio){

const elemento = document.querySelector(seletorAudio);

/*if(elemento === null ){
    //console.log('Elemento não encontrado'); mais discreto
    }
    //!= representa que não é igual, diferente, not equal
//nao precisa usar != para null pois o JS automaticamente ja entende
Precisamos garantir que o elemento é tocado mesmo se não for uma tag de audio, a button*/

//&& é o simbolo para o operador 'e', and
    if(elemento != null && elemento.localName === 'audio' ){
    elemento.play();        
        } 
    else{
        alert('Elemento não encontrado ou seletor inválido');  
            }
//else deve ser imediatamente invocado apos de if, pois entra com ideia de 'senao' aquele if anterior
    //console.log(elemento.localName);
    //elemento.play();
    }

/*
--------function tocaSomPom (){
    -------document.querySelector('#som_tecla_pom').play(); /*Agora podemos tentar fazer o som da tecla 
pom tocar ao ser executado. Para isso, adicionamos o ponto depois de chamar o id #, assim
aparece uma lista de funções. Escolhemos a play()*/ /*Em seguida, criamos uma função para
poder executar o botão, já que é necessária uma ação, e colocamos a função play dentro da
função criada */

/*O ponto após da função entra no elemento html e busca todas as funcionalidade daquele
elemento*/


//usa const como referência quando o valor não muda, mantem o mesmo em todo documento
const listaDeTeclas = document.querySelectorAll('.tecla');

//enquanto -- determina até onde a repetição deve parar, para não ficar num loop(laço) e travar tudo
//for -- é uma estrutura de laço/looping que faz o mesmo que while, repete a "rotina"
// no for o contador pode ser declarado dentro dos parentes
//recebe condição verdadeira ou falsa. Condição são os elementos adicionados no while
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];
//template string
    const idAudio = `#som_${instrumento}`;
    //console.log(idAudio);
    tecla.onclick = function(){
        tocaSom(idAudio);
    };

//tocaSom é substituido por uma function anonima, não invoca ela imediatamente, diferente do valor do lado da função
    // ------- contador = contador + 1;
    //console é a referência para o console do devtool, log manda mensagens para o console do navegador
    //console.log(contador);

    /* onkeydown é um atributo referente a quando a tecla está apertada, adicionando a class ativa
    a todas as tags de button a partir da tecla. Mas com isso, sempre fica ativa a classe quand
    qualquer tecla é precionada*/

    /*Podemos dar um nome qualquer ao parametro (dentro da função) relativo ao evento que foi acionado
    . Geralmente esta escrito event ou e, mas pode ser qualquer nome. É interessante utilizar o console
    para ver as diferentes informações dentro da função*/

    /*Utilizamos a propriedade code pois ele mostra qual tecla que foi apertada quando investigamos 
    no console com console.log. Existem outras coisas que informão sobre as teclas apertadas*/

    /* Existem dois operadores de igualdade, o == e ===. O == compara somente o valor, já o === compara o tipo
    do dado, como quando escrevemos 1 === "1" e da false, pois o NUMERO 1 é diferente da STRING 1, que 
    representa uma letra e não é o mesmo tipo de dado que 1. Já 1 == "1" da que é verdade, pois compara
    so o valor*/

    /*Dentro do () do if é uma condição*/
    tecla.onkeydown = function(evento){

        //console.log(evento.code  === 'Space' || evento.code === 'Enter');

        if(evento.code === 'Space'|| evento.code === 'Enter'){
            tecla.classList.add('ativa');    
        }

        
    }
/*É utilizado o atributo remove referente a quando o teclado é desprecionado, a classe desativa, mas
ainda continua vermelho (a classe ativa ainda está ativa) quando solta-se a tecla */
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }

}

//---------document.querySelector('.tecla_pom').onclick = tocaSomPom; 

/*Aqui utilizamos a função document. para acessar
o documento HTML, depois o querySelector para selecionar a classe desejada para futuras
alterações, ou seja, trouxemos o botão para o documento JS */

/*Utilizamos o atributo onclick para dizer que quando a tecla pom for precisona, é para 
executar a função tocaSomPom (neste caso a função vai atuar como o valor do atributo)*/

/*Na função onclick é necessário retirar o parenteses da função, para que a função seja 
guardada dentro do atributo onclick, peculiaridade do arquivo JS*/

/*Lista de Elementos: Auxiliam na organização dos códigos. Imagine que tivesse que colocar o som de cada
tecla de um piano, o código ficaria gigantesco, horrivel de trabalhar

O querySelectAll() busca todos os elementos que possuem o seletor declarado

Para saber se trabalhamos com lista, no JS, a função vem com colchetes []

Referências no JS devem ser declaradas com base nos valores que vao receber e guardar. É ideal que a lista
sempre armazene o mesmo valor, que não mude em algum momento. Como é valor constante declaramos com const
e o nome da lista

O evento de clicar, onclick, não é colocado na lista, mas em cada elemento da lista, ou seja, os elementos
de uma lista devem ser acessados individualmente, mesmo se em querySelectAll(). A lista é construida com
[], no qual adicionamos o indice da lista, como 0, 1, 2. Apos declarar o elemento, pode-se utilizar os atributos
novamente, como onclick

O console.log vai acessar o contador até que a condição seja falsa
*/