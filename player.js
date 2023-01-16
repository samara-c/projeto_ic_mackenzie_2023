export class Player {
    constructor(game){
        this.game = game;
        this.width = 900;
        this.height = 600;
        this.x = 0;
        this.y = 100;
    }

    update(){

    }

    draw(context){
        context.fillStyle = 'black'
        context.fillRect(this.x, this.y, this.width, this.height);

    }
}