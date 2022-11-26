let context;

class Canvas {   
    constructor(htmlElementId, width, height, bgColor, dimension) {
        this.container = new Rectagle(0, 0, width, height, bgColor, [0]);        
        this.canvas = document.getElementById(htmlElementId);
        this.canvas.width = width;
        this.canvas.height = height;
        this.context = this.canvas.getContext(dimension);
        this.elements = [];
        this.x = this.canvas.getClientRects()[0].x;
        this.y = this.canvas.getClientRects()[0].y;
        context = this.context;
    }
    
    refresh() {
        this.clear();
        this.container.create();
        for (let i in this.elements) {
            this.elements[i].create();
        }
    }

    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    getHeight() {
        return this.canvas.height;
    }

    getWidth() {
        return this.canvas.width;
    }
}

// Generic class for Shapes
class Shape {
    static idCount = 0;

    constructor(x, y, width, height, bgColor) {
        Shape.idCount++;

        this.id = Rectagle.idCount;
        this.x = x;
        this.y = y;
        this.width(width);
        this.height(height);
        if (typeof(bgColor) == "string") this.bgColor(bgColor);
    }

    style = {
        bgColor:"", lineWidth:1, fill:true, width:0, height:0,
    }

    bgColor(color) {this.style.bgColor = color}
    lineWidth(size) {this.style.lineWidth = typeof(size) == "number" ? size : 1}
    fill(fill) {this.style.fill = fill == true ? true : false}
    width(size) {this.style.width = size}
    height(size) {this.style.height = size}

    create() {
        console.log("%c" + this.constructor.name + " don't have a create method!", "background: #222; color: #ff4444; font-size: 24px; font-weight: bold;")
    }

    move() {
        console.log("%c" + this.constructor.name + " don't have a move method!", "background: #222; color: #ff4444; font-size: 24px; font-weight: bold;")
    }
    
}

class Rectagle extends Shape {
    
    constructor (x, y, width, height, bgColor, round) {
        super(x, y, width, height, bgColor);

        this.round = (round == undefined || round == null) ? [0] : round;

        // this.vSpeed = 0;
        // this.hSpeed = 0;
        // this.vAcceleration = 10;
        // this.hAcceleration = 0;
        // this.isHolding = false;
    }
    
    create() {
        context.beginPath();
        context.lineWidth = this.style.lineWidth;
        context.roundRect(this.x, this.y, this.style.width, this.style.height, this.round);
                
        if (this.style.fill === true) {
            context.fillStyle = this.style.bgColor;
            context.fill();
        } else {
            context.strokeStyle = this.style.bgColor;
            context.stroke();
        }
    }

    move() {}

    // offsetTop() {
    //     return this.y;
    // }

    // offsetBottom() {
    //     return this.y + this.style.height;
    // }
    
    // offsetLeft() {
    //     return this.x;
    // }
    
    // offsetRight() {
    //     return this.x + this.style.width;
    // }

    // incrementPosition(incrementX, incrementY) {
    //     this.x += this.xForceRemaining(incrementX, container);
    //     this.y += this.yForceRemaining(incrementY, container);
    //     container.refresh();
    // }
}

// Use to form complex Objects
class SceneryObject extends Rectagle {
    
    constructor(x, y, width, height, shapes) {
        super(x, y, "transparent", 1, false);
        for (let i = 0; i < shapes.length; i++) {
            shapes[i].move(x, y);
        }
        this.shapes = shapes;
    }
    
    // The shapes will have the position relative to the ScenaryObject
    create() {
        for (let i = 0; i < this.shapes.length; i++) {
            this.shapes[i].create();
        }
    }
    
    move(x, y) {
        this.x = x;
        this.y = y;
        for (let i = 0; i < this.shapes.length; i++) {
            this.shapes[i].move(x, y);
        }
    }

}

// Use to create Chunks (Increases performance as it'll load only if it is being displayed to the user)
class Chunk extends SceneryObject {

    constructor(x, y, width, height, scenery) {
        super(x, y, width, height, scenery);

        // this.active = false; // Default
        this.active = true;
    }

    create() {
        if (this.active) {
            for (let i = 0; i < this.shapes.length; i++) {
                this.shapes[i].create();
            }
        }
    }
}

// Use to create a new Map (Scenery)
class GameMap extends SceneryObject {

    constructor(width, height, chunks, mapBorderColor) {
        let content = [];
        content.push( new Rectagle(-height/2, -height/2, width+height, height/2, mapBorderColor) );
        content.push( new Rectagle(-height/2, height, width+height, height/2, mapBorderColor) );
        content.push( new Rectagle(-height/2, 0, height/2, height, mapBorderColor) );
        content.push( new Rectagle(width, 0, height/2, height, mapBorderColor) );
        for (let i = 0; i < chunks[0].shapes.length; i++) {
            content.push(chunks[i]);
        }
        super(0, 0, width, height, content);
    }
}

// Use to add user interaction
class MovableObject extends SceneryObject {
    
    // Create methods do move itself
    constructor() {

    }
}
