import HTML5Game from './html5game';

class HTML5Data{
    constructor(){
        
    }

    loadStage(file:string,game:HTML5Game){
        let xhttp = new XMLHttpRequest();
        xhttp.addEventListener('load', () => {
            let dom = new DOMParser();
            let doc = dom.parseFromString(xhttp.responseText,'text/xml');
            console.log(doc);
            let newStage:Array<Record<string,string|number>> = [];
            let actors = doc.firstElementChild?.children;
            
            if(typeof actors != 'undefined') for(let i = 0; i < actors.length; i++){
                let newActor:Record<string,string|number> = {};
                newActor.name = actors[i].nodeName;
                for(let j = 0; j < actors[i].attributes.length; j++){
                    let key = actors[i].attributes[j].nodeName;
                    let value = actors[i].attributes[j].nodeValue;
                    if(typeof key == 'string' && typeof value == 'string' || typeof value == 'number'){
                        newActor[key] = value;
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