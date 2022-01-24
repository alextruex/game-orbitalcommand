import HTML5Video from './html5video';
import HTML5Audio from './html5audio';
import HTML5Input from './html5input';
import HTML5Data from './html5data';
import Actor from './actor';
import behaviors from './behaviors/behaviors';

class HTML5Game{
    video:HTML5Video;
    audio:HTML5Audio;
    input:HTML5Input;
    data:HTML5Data;
    state:Record<string,string|number>;
    stage:Array<Actor>;

    constructor(){
        this.video = new HTML5Video(1280,720);
        this.audio = new HTML5Audio();
        this.input = new HTML5Input();
        this.data = new HTML5Data();
        this.stage = [];
        this.state = {};
        this.loadStage('stages/title.xml');

        setInterval(() => {this.main()}, 1000);
    }

    loadStage(file:string){
        this.data.fetchStage(file,this);
    }

    main(){
        this.video.clear();
        this.stage.forEach((actor) => {
            behaviors[actor.name](actor,this);
        });
    }
}

export default HTML5Game;