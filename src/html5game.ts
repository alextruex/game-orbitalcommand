import HTML5Video from './html5video';
import HTML5Audio from './html5audio';
import HTML5Input from './html5input';
import HTML5Data from './html5data';
import behaviors from './behaviors/behaviors';

class HTML5Game{
    video:HTML5Video;
    audio:HTML5Audio;
    input:HTML5Input;
    data:HTML5Data;
    stage:Array<Record<string,string|number>>;

    constructor(){
        this.video = new HTML5Video(1280,720);
        this.audio = new HTML5Audio();
        this.input = new HTML5Input();
        this.data = new HTML5Data();
        this.stage = [];
        this.data.loadStage('stages/title.xml',this);

        setInterval(() => {this.main()}, 1000/60);
    }

    main(){
        this.video.clear();
        this.stage.forEach((actor) => {
            if(typeof behaviors[actor.name] != 'undefined')behaviors[actor.name](actor,this);
        });
        let text:string = 'X: ' + this.input.poll('mouseX').toString() + ', Y:' + this.input.poll('mouseY').toString();
        this.video.debugText(text);
    }
}

export default HTML5Game;