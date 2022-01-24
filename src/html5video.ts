class HTML5Video{
    canvas:HTMLCanvasElement;
    ctx:CanvasRenderingContext2D;
    images:Record<string,HTMLImageElement>;
    constructor(width:number,height:number){
        this.canvas = document.createElement('canvas');
        this.canvas.width = width;
        this.canvas.height = height;
        this.canvas.style.border = '1px solid white';
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
        document.body.style.backgroundColor = '#000000';

        this.images = {};

    }

    clear(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
    }
    
    drawImage(x:number,y:number,img:string){
        console.log(img);
        if (typeof this.images[img] == "undefined"){
            this.images[img] = new Image();
            this.images[img].src = img;
        }
        this.ctx.drawImage(this.images[img],x,y);
    }

    drawRect(x:number,y:number,w:number,h:number){
        this.ctx.fillStyle = '#FF0000';
        this.ctx.fillRect(x,y,w,h);
    }

    resizeCanvas(){
        
    }

    
}

export default HTML5Video;