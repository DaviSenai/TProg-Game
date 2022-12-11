let context;

class Canvas {   
	constructor(htmlElementId, width, height, bgColor, dimension) {
		this.container = new Rectangle(0, 0, width, height, bgColor, [0]);		
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

		this.id = Rectangle.idCount;
		this.x = x;
		this.y = y;
		this.width(width);
		this.height(height);
		this.bgColor( typeof(bgColor) == "string" ? bgColor : "transparent");
	}

	style = {
		bgColor:"", lineWidth:1, fill:true, width:0, height:0, hidden:false
	}

	bgColor(color) {this.style.bgColor = color}
	lineWidth(size) {this.style.lineWidth = typeof(size) == "number" ? size : 1}
	fill(fill) {this.style.fill = fill == true ? true : false}
	width(size) {this.style.width = size}
	height(size) {this.style.height = size}
	hidden(value) {this.style.hidden = value == false ? false : true}

	create() {
		console.log("%c" + this.constructor.name + " don't have a create method!", "background: #222; color: #ff4444; font-size: 24px; font-weight: bold;")
	}

	move() {
		console.log("%c" + this.constructor.name + " don't have a move method!", "background: #222; color: #ff4444; font-size: 24px; font-weight: bold;")
	}

	offsetTop() {
		return this.y;
	}

	offsetBottom() {
		return this.y + this.style.height;
	}
	
	offsetLeft() {
		return this.x;
	}
	
	offsetRight() {
		return this.x + this.style.width;
	}   
}

class Rectangle extends Shape {
	
	constructor (x, y, width, height, bgColor, round) {
		super(x, y, width, height, bgColor);

		this.round = (round == undefined || round == null) ? [0] : round;
	}
	
	create() {
		if (!this.style.hidden) {
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
	}

	move(x, y) {
		this.x += x;
		this.y += y;
	}
}

class Img extends Shape {

	constructor(imgSrc, x, y, width, height) {
		super(x, y, width, height, "");
		this.img = new Image(100, 100);
		this.img.src = imgSrc;
	}

	create() {
		context.drawImage(this.img, this.x, this.y, this.style.width, this.style.height);
	}

	move(x, y) {
		this.x += x;
		this.y += y;
	}
}

class CText extends Shape {

	constructor(initialText, x, y, width, height) {
		super(x, y, width, height, "");
		this.text = initialText;

		this.style.fontSize = 16;
		this.style.fontFamily = "sans-serif";
		this.style.color = "black";
	}

	create() {
		context.font = this.style.fontSize + "px " + this.style.fontFamily;
		context.fillStyle = this.style.color;
		context.textBaseline = "bottom";
		context.fillText( this.text, this.x, this.y );
	}

	move(x, y) {
		this.x += x;
		this.y += y;
	}

	fontSize(size) {this.style.fontSize = size || 16;}
	fontFamily(family) {this.style.fontFamily = family || "sans-serif"}	
	color(color) {this.style.color = color || "black"}
}

// Use to form complex Objects
class SceneryObject extends Rectangle {
	
	constructor(x, y, width, height, shapes) {
		super(x, y, width, height, "transparent", 1, false);
		for (let i = 0; i < shapes.length; i++) {
			shapes[i].move(x, y);
		}
		this.shapes = shapes;
		this.showColision = false;
		this.style.bgColor = "pink";
	}
	
	// The shapes will have the position relative to the ScenaryObject
	create() {
		if (this.showColision) {
			super.create();
			return;
		}
		for (let i = 0; i < this.shapes.length; i++) {
			this.shapes[i].create();
		}
	}

	move(x, y) {
		this.x += x;
		this.y += y;
		for (let i = 0; i < this.shapes.length; i++) {
			this.shapes[i].move(x, y);
		}
	}

	showColisionBox(value) {
		this.showColision = value != false ? true : false;
	}

}

// Use to create Chunks (Increases performance as it'll load only if it is being displayed to the user)
class Chunk extends SceneryObject {

	constructor(x, y, width, height, scenery, mobs) {

		super(x, y, width, height, scenery);
		this.mobs = mobs || [];
		for (let i = 0; i < this.mobs.length; i++) {
			this.mobs[i].x += x;
			this.mobs[i].y += y;
			for (let s = 0; s < this.mobs[i].sprites.length; s++) {
				this.mobs[i].sprites[s].move( x, y );
			}
		}
		this.bgColor("white");
		this.fill(false);
		this.active = false; // Default
		// this.active = true;
		// this.showBorder = false;
		this.showBorder = true;
	}

	create() {
		if (this.active) {
			for (let i = 0; i < this.shapes.length; i++) {
				this.shapes[i].create();
			}
			for (let i = 0; i < this.mobs.length; i++) {
				this.mobs[i].create();
			}
		}

		if (this.showBorder) {
			context.beginPath();
			context.lineWidth = this.style.lineWidth;
			context.roundRect(this.x, this.y, this.style.width, this.style.height, this.round);
			context.strokeStyle = this.style.bgColor;
			context.stroke();
		}
	}

	move(x, y) {
		// this.x += x;
		// this.y += y;
		if (container.elements.length > 0) {
			for (let i = 0; i < this.mobs.length; i++) {
				this.mobs[i].move(x, y);
			}
		}
		super.move(x, y);
	}

	showColisionBox(value) {
		for (let i = 0; i < this.shapes.length; i++) {
			this.shapes[i].showColisionBox(value);
		}
	}
}

// Use to create a new Map (Scenery)
class GameMap extends SceneryObject {

	constructor(width, height, chunks, mapBorderColor) {
		let content = [];
		content.push( new Rectangle(-height/2, -height/2, width+height, height/2, mapBorderColor) );
		content.push( new Rectangle(-height/2, height, width+height, height/2, mapBorderColor) );
		content.push( new Rectangle(-height/2, 0, height/2, height, mapBorderColor) );
		content.push( new Rectangle(width, 0, height/2, height, mapBorderColor) );
		for (let i = 0; i < chunks.length; i++) {
			content.push(chunks[i]);
		}
		super(0, 0, width, height, content);
	}

	showColisionBox(value) {
		for (let i = 4; i < this.shapes.length; i++) {
			this.shapes[i].showColisionBox(value);
		}
	}

	showChunkBorder(value) {
		for (let i = 4; i < this.shapes.length; i++) {
			this.shapes[i].showBorder = value != false ? true : false;
		}
	}
}

// Generic class for Entities
class Entity extends Shape {

	constructor(x, y, width, height) {
		super(x, y, width, height);
		this.sprites = [];
		this.vSpeed = 0;
		this.hSpeed = 0;
		this.vAcceleration = 0;
		this.hAcceleration = 0;
	}

	move(x, y) {
		this.x += x;
		this.y += y;
		for (let i = 0; i < this.sprites.length; i++) {
			this.sprites[i].x += x;
			this.sprites[i].y += y;
		}
	}

	anim() {
		console.log("%c" + this.constructor.name + " don't have an anim method!", "background: #222; color: #ff4444; font-size: 24px; font-weight: bold;");
	}

	playerColision() {
		if ( Utils.inRangeX(player, 0, this) && Utils.inRangeY(player, 0, this) ) {
			player.takeDmg( this.dmg );
		}
	}
	
}

class StaticGadgets extends Rectangle {
	
	constructor() {
		super(0, 0, cWidth, cHeight, "transparent", 1, false);
		this.vignette = getDarkPitch();
		this.player = player;
		this.lifeBar = new LifeBar();
		this.scoreBar = new ScoreBar();

		for (let i = 0; i < this.player.lifeBar; i++) {
			setTimeout( () => {
				this.lifeBar.add();
			}, 200*i );
		}
		setTimeout( () => {this.lifeBar.blink()}, 200*this.player.lifeBar );
		
	}
	
	create() {
		// this.vignette.create();
		this.player.create();
		this.lifeBar.create();
		this.scoreBar.create();
	}
	
}

class LifeBar extends SceneryObject {

	constructor() {
		super(cWidth - 160, 20, 145, 30, []);
	}

	add() {
		for (let shape of this.shapes) {
			shape.move(-this.x, -this.y);
		}
		this.shapes.push( new Rectangle(135 - 15*this.shapes.length, 0, 10, 30, "#940101", [5]) );
		for (let shape of this.shapes) {
			shape.move(this.x, this.y);
		}
	}

	remove() {
		this.shapes.pop();
	}

	blink() {
		let delay = 500;
		for (let i = 0; i < 5; i++) {
			setTimeout( () => {
				this.hidden(true);
				setTimeout( () => { this.hidden(false) }, delay );
			}, delay*2*i );
		}
	}

	hidden(value) {
		for (let i = 0; i < this.shapes.length; i++) {
			this.shapes[i].hidden(value);
		}
	}
	
}

class ScoreBar extends SceneryObject {

	constructor() {

		let shapes = [];

		shapes.push( new Img("./assets/img/wall-clock.png", 0, 0, 30, 30) );

		let label = new CText("Score:", 50, 30, 50, 30);
		label.fontSize(24);
		label.color("#ffcc00");
		shapes.push( label );

		let score = new CText(0, 70 + context.measureText(label).width, 30, 50, 30);
		score.fontSize(24);
		score.color("#ffcc00");
		shapes.push( score );
		
		super( 15, 20, 200, 30, shapes);

		this.score = score;
		this.timerId;
	}

	start() {
		this.timerId = setInterval( () => {this.score.text += 1}, 1000 );
	}

	stop() {
		clearInterval( this.timerId );
	}
	
}
