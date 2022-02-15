import HTML5Game from '../../html5game';
import Actor from '../actor';

/**
 * Represents the player object
 */
function player(actor:Actor,game:HTML5Game){
    let a = actor;

    if(a.initialize){
        a.num.vX = 0;
        a.num.vY = 0;
        a.num.launch = 0;
        a.initialize = false;
    }

    if(a.num.launch == 0){
        if(game.input.poll('mouse1')){
            a.num.launch = 1;
        };
    }

    if(a.num.launch == 1){
        let mX = game.input.poll('mouseX');
        let mY = game.input.poll('mouseY');
        game.video.drawLine(a.num.x,a.num.y,mX,mY);
        a.num.tX = mX - a.num.x;
            a.num.tY = mY - a.num.y;
            a.num.length = Math.sqrt(Math.pow(a.num.tX,2) + Math.pow(a.num.tY,2));
        game.video.debugText(''+a.num.length);
        if(game.input.poll('mouse1') == 0){
            a.num.tX = mX - a.num.x;
            a.num.tY = mY - a.num.y;
            a.num.length = Math.sqrt(Math.pow(a.num.tX,2) + Math.pow(a.num.tY,2));
            a.num.track = 0;
            a.num.aX = a.num.tX / a.num.length;
            a.num.aY = a.num.tY / a.num.length;
            a.num.launch = 2;
        };
    }

    if(a.num.launch == 2){
        game.video.debugText('Launch')
        game.video.drawLine(a.num.x,a.num.y,a.num.tX,a.num.tY);
        if(a.num.track < a.num.length){
            a.num.vX += a.num.aX;
            a.num.vY += a.num.aY;
            a.num.track += 1;
            a.num.x += a.num.vX;
            a.num.y += a.num.vY;
        }
        else{
            a.num.launch = 3;
        }
    }

    if(a.num.launch == 3){
        game.video.debugText('Float')
        game.stage.forEach((i) => {
            if(i.behavior == 'ball'){
                a.num.vX += (i.num.x - a.num.x) * i.num.r * .0001;
                a.num.vY += (i.num.y - a.num.y) * i.num.r * .0001;
            }
        });

        a.num.x += a.num.vX;
        a.num.y += a.num.vY;
    }



    game.video.drawCircle(actor.num.x,actor.num.y,actor.num.r);
}

export default player;