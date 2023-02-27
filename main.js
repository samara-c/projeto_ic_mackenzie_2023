

window.addEventListener('load', function(){

    //variaveis de configuracao da tela

    const screen = document.querySelector('canvas');
    const texto_jogo = document.querySelector('.titulo-principal')
    const ctx = screen.getContext('2d');
    screen.width = 900;
    screen.height = 600;
    var recuo_tela = 0;

    // variaveis personagens
    const pasta_personagens = 'img/characters/'
    const pasta_bgs = 'img/bgs/'

    
    var pos_x_personagem = 10;
    var pos_y_personagem = 120;
    var abc = "abc";

    var pos_x_caixa_texto = 40;
    var pos_y_caixa_texto = 360;
    var tam_x_caixa_texto = 820;
    var tam_y_caixa_texto = 200;

    var MARGIN_SIDES = 40;
    var MARGIN_BOTTOM = 10;
    var TEXTAREA_HEIGHT = 200;
    var TEXT_MAP = new Map();
    var TEXT_MARGIN = 5;
    var TEXT_LINE_SPACING = 10;


    


    function desenhaTelaPadrao(){
        ctx.fillStyle = 'black';
        ctx.fillRect(recuo_tela, recuo_tela, screen.width, screen.height);
        desenhaBG('bedroom_night');
        defineEDesenhaPersonagem("pedro","sad");
        desenhaCaixaDeTexto();
        escreveTextoNaCaixaDeTexto("O método slice() extrai uma parte de uma string e a retorna como uma nova string, sem modificar a string original.");
    }

    // valores para personagem: 'julia', 'pedro', 'otavio'
    // valores para sentimento: 'angry', 'happy', 'sad'
    function defineEDesenhaPersonagem(personagem, sentimento, posicao = "d") {

        var personagem_default = new Image();
        var tamanho_personagem_x = 250;
        var tamanho_personagem_y = 553;

        // coloca o personagem do outro lado da tela se o valor recebido for 'e' (esquerda)
        if (posicao=="e"){
            pos_x_personagem = 640;
        }
        
        var caminho_personagem = pasta_personagens+personagem+"_"+sentimento+"_"+posicao+".png";
        personagem_default.src=caminho_personagem;
        console.log(caminho_personagem);

        ctx.drawImage(personagem_default,pos_x_personagem,pos_y_personagem,
           tamanho_personagem_x,tamanho_personagem_y);

    }

    function desenhaCaixaDeTexto(){

        

        // define a transparencia onde '1.0' é sem transparencia
        ctx.globalAlpha = 0.6;

        // define a cor da caixa de texto
        ctx.fillStyle = 'white';

        // define a cor do contorno da forma e o tamanho
        ctx.strokeStyle = "black";
        ctx.lineWidth = 3;

        ctx.fillRect(pos_x_caixa_texto, pos_y_caixa_texto, tam_x_caixa_texto, tam_y_caixa_texto);
        ctx.strokeRect(pos_x_caixa_texto, pos_y_caixa_texto, tam_x_caixa_texto, tam_y_caixa_texto);
        ctx.globalAlpha = 1.0;
        

    }

    function escreveTextoNaCaixaDeTexto(texto){

        var tam_caixa_texto_para_escrita = 52;
        var tam = 0;
        var multiplicador_de_limite = 1;
        var pos_y_escrita_texto = pos_y_caixa_texto+40;
        var segundo_array_texto = [];
        var limite = 60;

        ctx.font = '25px arial';
        ctx.fillStyle = 'black';
        
        console.log(texto.length);
        if (texto.length > limite) {

            var i = 0;

            while (i<texto.length){
                
                segundo_array_texto[tam] = texto.slice(i,limite*multiplicador_de_limite);
                console.log(segundo_array_texto[tam]);
                i+=limite;
                multiplicador_de_limite+=1;
                tam+=1;


            }

        }

        for (let i=0; i<segundo_array_texto.length; i++){

            ctx.fillText(segundo_array_texto[i], pos_x_caixa_texto+20, pos_y_escrita_texto);
            pos_y_escrita_texto+=25;


        }
        

        //37

        
        


    }
    

    function desenhaBG(ambiente){
        var bg_default = new Image();
        var caminho_bg = pasta_bgs+ambiente+".png";
        bg_default.src=caminho_bg;

        ctx.drawImage(bg_default,0,0,screen.width,screen.height);


    }
    

    function iniciaJogo(inicia){
        if (inicia){
            desenhaTelaPadrao();


        }
    }

    function retornaPosicaoClique(evento){

        var pos_x = evento.pageX - screen.offsetLeft;
        var pos_y = evento.pageY - screen.offsetTop;
        var vetor_pos_mouse = [pos_x,pos_y];

        texto_jogo.innerHTML=vetor_pos_mouse;
        return vetor_pos_mouse;

        
          
    }


    
    screen.onclick = retornaPosicaoClique;
    iniciaJogo(true);
})
