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

        this.data.loadStage('stages/stage1.svg');

        /*
        this.stage.push({id:'rect',properties:{x:0,y:0,w:64,h:64},behaviors:['rectangle']});
        this.stage.push({id:'ball',properties:{x:0,y:0,texture:'/images/sprites/objects/2ball.png'},behaviors:['texture']});
        this.stage.push({id:'player',properties:{x:0,y:0,texture:'/images/sprites/objects/1ball.png'},behaviors:['player','texture']});
        */

        setInterval(() => {this.main()}, 1000/30);
    }

    loadStage(file:string){
        
    }

    main(){
        this.video.clear();
        this.stage.forEach((actor) => {
            actor.behaviors.forEach((behavior) => {
                behaviors[behavior](actor,this);
            });
        });
    }
}

export default HTML5Game;