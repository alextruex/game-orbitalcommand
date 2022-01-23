import Actor from "./actor";

class HTML5Input{
    map:Record<string,number>;

    constructor(){
        this.map = {};
        document.addEventListener('keydown',(e) => {
            this.map[e.key] = 1;
        });
        document.addEventListener('keyup',(e) => {
            this.map[e.key] = 0;
        });
    }

    poll(key:string){
        return this.map[key];
    }
}

export default HTML5Input;