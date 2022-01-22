import Actor from '../actor/actor';
import HTML5Game from '../game/html5game';

class Stage{
    actors:Array<Actor>;

    constructor(file:string){
        let xhttp = new XMLHttpRequest();

        console.log(file);

        xhttp.onreadystatechange = function(){
            console.log(xhttp);
        }
        xhttp.open('GET',file,true);
        console.log('bar');

    }

    update(game:HTML5Game){

    }
}

export default Stage;