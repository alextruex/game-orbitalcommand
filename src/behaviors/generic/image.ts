import HTML5Game from '../../html5game';

function image(actor:Record<string,string|number>,game:HTML5Game){
    game.video.drawImage(<number>actor.x,<number>actor.y,<string>actor.img);
}

export default image;