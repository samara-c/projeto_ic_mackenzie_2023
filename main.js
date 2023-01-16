import { Player } from "./player.js";

window.addEventListener('load', function(){

    //variaveis de configuracao da tela

    const screen = document.querySelector('canvas');
    const ctx = screen.getContext('2d');
    screen.width = 900;
    screen.height = 600;
    var recuo_tela = 0;

    class Game{

        constructor(width, height){
            this.width = width;
            this.height = height;
            this.player = new Player(this);
        }

        update(){

        }

        draw(context){
            this.player.draw(context);


        }

        animate(){
            ctx.clearRect(0,0, screen.width, screen.height);
            game.draw(ctx);
            requestAnimationFrame(animate);

        }
        animate();
    }
    const game = new Game(screen.width, screen.height);
    console.log(game);

})



//variaveis de arquivos externos (imagens)

var fundo_tela_inicial_img = new Image();