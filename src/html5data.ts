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
            let groups = doc.querySelectorAll('g');
            let newStage:Array<Actor> = [];
            groups.forEach((element) => {
                let actor:Actor = {id:'',properties:{},behaviors:[]};
                let text = element.querySelector('text').textContent;
                let text2 = text.split('&');

                let rect = element.querySelectorAll('rect');
                rect.forEach((index) => {
                    actor.properties.x = parseInt(index.attributes.getNamedItem('x').value);
                    actor.properties.y = parseInt(index.attributes.getNamedItem('y').value);
                    actor.properties.width = parseInt(index.attributes.getNamedItem('width').value);
                    actor.properties.height = parseInt(index.attributes.getNamedItem('height').value);
                });
                
                actor.id = text2[0];

                let properties = text2[1].split(',');

                properties.forEach((property) => {
                    let property2 = property.split(':');
                    actor.properties[property2[0],property[1]];
                });

                actor.behaviors = text2[2].split(',');

                newStage.push(actor);
            });
            game.stage = newStage
        });
        xhttp.open("GET",file);
        xhttp.send();
    }
}

export default HTML5Data;