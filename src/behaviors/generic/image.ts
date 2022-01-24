import Actor from '../../actor';
import HTML5Game from '../../html5game';

function image(actor:Actor,game:HTML5Game){
    game.video.drawImage(<number>actor.properties.x,<number>actor.properties.y,<string>actor.properties.img);
}

export default image;