import Actor from './actor';

class HTML5Data{
    constructor(){
        
    }

    fetchStage(file:string,stage:Array<Actor>){
        let xhttp = new XMLHttpRequest();
        xhttp.addEventListener('load', () => {
            console.log(xhttp.responseText);
            let dom = new DOMParser();
            let doc = dom.parseFromString(xhttp.responseText,'text/xml');
            let groups = doc.querySelectorAll('g');
            let newStage:Array<Actor> = [];
            groups.forEach((element) => {
                let actor:Actor = {id:'',properties:{},behaviors:[]};
                let text = element.querySelector('text').textContent;
                let text2 = text.split('&');
                
                actor.id = text2[0];

                let properties = text2[1].split(',');
                properties.forEach((property) => {
                    let property2 = property.split(':');
                    actor.properties[property2[0],property[1]];
                });

                actor.behaviors = text2[2].split(',');

                newStage.push(actor);
            });
            console.log(newStage);
        });
        xhttp.open("GET",file);
        xhttp.send();
    }
}

export default HTML5Data;