import HTML5Game from '../game/html5game'
import Actor from '../actor/actor';

let behaviors:Record<string,Function>;

behaviors['log'] = function(actor:Actor,game:HTML5Game){
    console.log('foo');
}

behaviors['texture'] = function(actor:Actor,game:HTML5Game){
    if(typeof actor.properties.y == 'number' && typeof actor.properties.x == 'number' && typeof actor.properties.texture == 'string'){
        game.video.drawImage(actor.properties.x,actor.properties.y,actor.properties.texture);
    }
}

export default behaviors;