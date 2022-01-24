import Actor from './actor';
import HTML5Game from './html5game';

class HTML5Data{
    constructor(){
        
    }

    fetchStage(file:string,game:HTML5Game){
        let xhttp = new XMLHttpRequest();
        xhttp.addEventListener('load', () => {
            let dom = new DOMParser();
            let doc = dom.parseFromString(xhttp.responseText,'text/xml');
            let newStage:Array<Actor> = [];
            let actors = doc.firstElementChild?.children;
            
            if(typeof actors != 'undefined') for(let i = 0; i < actors.length; i++){
                let newActor:Actor = {name:'',properties:{}};
                newActor.name = actors[i].nodeName;
                for(let j = 0; j < actors[i].attributes.length; j++){
                    let key = actors[i].attributes[j].nodeName;
                    let value = actors[i].attributes[j].nodeValue;
                    if(typeof key == 'string' && typeof value == 'string' || typeof value == 'number'){
                        newActor.properties[key] = value;
                    }
                }
                newStage.push(newActor);
            }
            game.stage = newStage;
            console.log(newStage);
        });
        xhttp.open("GET",file);
        xhttp.send();
    }
}

export default HTML5Data;