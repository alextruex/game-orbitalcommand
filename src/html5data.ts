import Actor from './actor';

class HTML5Data{
    constructor(){
        
    }

    loadStage(file:string):Array<Actor>{
        const xhttpPromise = new Promise<Array<Actor>>((resolve,reject) => {
            let xhttp = new XMLHttpRequest();
            xhttp.addEventListener('load', () => {
                console.log(xhttp.responseText);
                let dom = new DOMParser();
                let doc = dom.parseFromString(xhttp.responseText,'text/xml');
                let groups = doc.querySelectorAll('g');
                let stage:Array<Actor> = [];
                groups.forEach((element) => {
                    let actor:Actor = {id:'',properties:{},behaviors:[]};
                    console.log(element);
                    stage.push(actor);
                });
            });
            xhttp.open("GET",file);
            xhttp.send();
        });

        xhttpPromise
    }
}

export default HTML5Data;