

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
    


    function desenhaTelaPadrao(){
        ctx.fillStyle = 'black';
        ctx.fillRect(recuo_tela, recuo_tela, screen.width, screen.height);
        desenhaBG('bedroom_night');
        defineEDesenhaPersonagem("pedro","sad");
        desenhaCaixaDeTexto();
        escreveTextoNaCaixaDeTexto("Bem vindo, jogador! Hoje vamos falar sobre testes aa");
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

        var pos_x_caixa_texto = 40;
        var pos_y_caixa_texto = 360;
        var tam_x_caixa_texto = 820;
        var tam_y_caixa_texto = 200;

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

    function escreveTextoNaCaixaDeTexto(texto, posicao='e', cor='black'){

        var pos_x_texto = 60;
        var pos_y_texto = 80;


        if (texto.length>52){
            
        }

        if (posicao =='d'){

        }


        console.log(texto.length);
        ctx.font = '25px arial';
        ctx.fillStyle = 'black';
        ctx.fillText(texto, pos_x_texto,pos_y_texto);


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
