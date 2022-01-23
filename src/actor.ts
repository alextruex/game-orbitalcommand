interface Actor{
    id:string;
    properties:Record<string,string|number>;
    behaviors:Array<string>;
}

export default Actor;