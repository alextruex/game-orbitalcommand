import Actor from './actor';

class HTML5Data{
    constructor(){
        
    }

    loadStage(file:string){
        let xhttp = new XMLHttpRequest();
        xhttp.addEventListener('load', () => {
            console.log(xhttp.responseText);
        });
        xhttp.open("GET",file);
        xhttp.send();
    }
}

export default HTML5Data;