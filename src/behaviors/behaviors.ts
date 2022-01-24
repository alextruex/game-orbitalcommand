import HTML5Game from '../html5game';
import Actor from '../actor';

let behaviors: Record<string, Function> = {
    'log': function (actor: Actor, game: HTML5Game) {
        console.log('foo');
    },
    'texture': function (actor: Actor, game: HTML5Game) {
        if (typeof actor.properties.x == 'number' &&
            typeof actor.properties.y == 'number' &&
            typeof actor.properties.texture == 'string') {
            game.video.drawImage(actor.properties.x, actor.properties.y, actor.properties.texture);
        }
    },
    'rectangle': function(actor:Actor,game:HTML5Game){
        if (typeof actor.properties.x == 'number' &&
        typeof actor.properties.y == 'number' &&
        typeof actor.properties.width == 'number' &&
        typeof actor.properties.height == 'number')
        game.video.drawRect(actor.properties.x,actor.properties.y,actor.properties.width,actor.properties.height);
    },
    'player':function(actor:Actor,game:HTML5Game){
        if(game.input.poll('ArrowRight') && typeof actor.properties.x == 'number') actor.properties.x += 4;
        if(game.input.poll('ArrowLeft') && typeof actor.properties.x == 'number') actor.properties.x -= 4;
    }
}

export default behaviors;