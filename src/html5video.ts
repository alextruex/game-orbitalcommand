class HTML5Video{
    canvas:HTMLCanvasElement;
    ctx:CanvasRenderingContext2D;
    images:Record<string,HTMLImageElement>;
    constructor(width:number,height:number){
        this.canvas = document.createElement('canvas');
        this.canvas.width = width;
        this.canvas.height = height;
        this.canvas.style.width = '100vw';
        this.canvas.style.height = 'height: 56.25vw';
        this.canvas.style.maxHeight = '100vh'
        this.canvas.style.maxWidth = '177.78vh';
        this.canvas.style.position = 'absolute';
        this.canvas.style.left = '0px';
        this.canvas.style.right = '0px';
        this.canvas.style.top = '0px';
        this.canvas.style.bottom = '0px';
        this.canvas.style.margin = 'auto';
        this.canvas.id = "gameCanvas";

        this.ctx = <CanvasRenderingContext2D>this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
        document.body.style.backgroundColor = '#000000';
        document.body.style.backgroundImage = 'url("images/backgrounds/wallpaper.png")';
        document.body.style.backgroundSize = 'cover';
        document.body.style.margin = '0px';
        this.images = {};
    }

    clear(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
    }
    
    drawImage(x:number,y:number,img:string){
        if (typeof this.images[img] == "undefined"){
            this.images[img] = new Image();
            this.images[img].src = img;
        }
        let image = this.images[img];
        this.ctx.drawImage(image,x,y);
    }

    drawRect(x:number,y:number,w:number,h:number){
        this.ctx.fillStyle = '#FF0000';
        this.ctx.fillRect(x,y,w,h);
    }

    debugText(text:string){
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'top';
        this.ctx.font = 'bold 32px sans-serif';
        this.ctx.fillStyle = '#000000';
        this.ctx.fillText(text,644,20);
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.fillText(text,640,16);
    }

    resizeCanvas(){
        
    }

    
}

export default HTML5Video;