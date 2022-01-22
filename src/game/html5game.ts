import HTML5Video from '../video/html5video';
import HTML5Audio from '../audio/html5audio';
import HTML5Input from '../input/html5input';
import Actor from '../actor/actor';
import behaviors from '../behaviors/behaviors';
import loadStage from './loadstage'

class HTML5Game{
    video:HTML5Video;
    audio:HTML5Audio;
    input:HTML5Input;
    stage:Array<Actor>;

    constructor(){
        this.video = new HTML5Video(1280,720);
        this.audio = new HTML5Audio();
        this.input = new HTML5Input();

        setInterval(this.main, 1000/60);
    }

    loadStage(file:string){
        this.stage = loadStage(file);
    }

    main(){
        this.stage.forEach((actor) => {
            actor.behaviors.forEach((behavior) => {
                behaviors[behavior];
            });
        });
    }
}

export default HTML5Game;