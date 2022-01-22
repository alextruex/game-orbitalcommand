import HTML5Video from '../video/html5video';
import HTML5Audio from '../audio/html5audio';
import HTML5Input from '../input/html5input';
import Stage from '../stage/stage';
import Actor from '../actor/actor';
import behaviors from '../behaviors/behaviors';

class HTML5Game{
    video:HTML5Video;
    audio:HTML5Audio;
    input:HTML5Input;
    stage:Stage;

    constructor(){
        this.video = new HTML5Video(1280,720);
        this.audio = new HTML5Audio();
        this.input = new HTML5Input();
        this.stage = new Stage('/stages/stage1.svg');

        setInterval(this.main, 1000/60);
    }

    main(){
       this.stage.update(this);
    }
}

export default HTML5Game;