
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D

// Canvas Configs
let cWidth = 1364;
let cHeight = 766;
let bgColor = "#2222ee";
// let bgColor = "#cfeeff";
let container = new Canvas("game-canvas", cWidth, cHeight, bgColor, "2d");
let frameRate = 30;
let fitScreen = false; // false for development
// let fitScreen = true; // true for test and play
if (fitScreen) {
	document.body.style.zoom = window.innerWidth / cWidth;
}
let gravity = 1;
let fallSpeedLimit = 20;
let gravityOn = true;

let player = new Player(cWidth/2, cHeight/2);

let visionFieldSize = 600;

const Utils = {

	clockId:0,
	clockStarted:false,

	loadMap(name) {
		switch (String(name).toLowerCase()) {
			case "jungle": {
				container.elements = [];
				container.elements.push( getJungleMap() );
				container.elements.push( new StaticGadgets() );
				break;
			}
			
			case "temple": {
				container.elements = [];
				container.elements.push( getTempleMap() );
				container.elements.push( new StaticGadgets() );
				break;
			}

			case "forest": {
				container.elements = [];
				let map = getForestMap();
				map.move(200, 100);
				container.elements.push( map );
				container.elements.push( new StaticGadgets() );
				break;
			}
			default: {
				console.log("%cMap \"" + name + "\" not found!", "background: #222; color: #ff4444; font-size: 24px; font-weight: bold;");
			}
		}
	},

	clockStart() {
		if (!Utils.clockStarted) {
			Utils.clockId = setInterval( () => {container.refresh();}, 1000/frameRate );
			container.elements[1].scoreBar.start();
			Utils.clockStarted = true;
		}
	},

	clockStop() {
		if (Utils.clockStarted) {
			clearInterval( Utils.clockId );
			container.elements[1].scoreBar.stop()
			Utils.clockStarted = false;
		}
	},

	colisionVerify(elem, xIncrease, yIncrease, chunks, forceLoadChunk) {
		let correction = {x: xIncrease, y: yIncrease};

		let xInRangeElements = [];
		let yInRangeElements = [];
		
		for (let c = 4; c < chunks.length; c++) {
			let chunk = chunks[c];
			if (chunk.active || forceLoadChunk == true) {
				if (xIncrease != 0) {
					// Elementos da chunk
					for (let i = 0; i < chunk.shapes.length; i++) {
						// Caso o objeto esteja na mesma linha da entidade (player)
						if ( Utils.inRangeY(elem, 0, chunk.shapes[i]) ) {
							// Se o incremento for positivo
							if ( xIncrease > 0 ) {	
								// Caso o objeto esteja depois
								if ( chunk.shapes[i].offsetLeft() > elem.x ) {
									// Compare se o offsetLeft é menor ou igual à distância com incremento
									if ( chunk.shapes[i].offsetLeft() <= elem.offsetRight() + xIncrease ) {
										// Coloca o objeto numa lista
										xInRangeElements.push( chunk.shapes[i] );
									}
								}
							}
							// Se o incremento for negativo
							if ( xIncrease < 0 ) {
								// Caso o objeto esteja antes
								if ( chunk.shapes[i].offsetRight() <= elem.x ) {
									// Compare se o offsetRight é maior ou igual à distância com incremento
									if ( chunk.shapes[i].offsetRight() >= elem.offsetLeft() + xIncrease ) {
										// Coloca o objeto numa lista
										xInRangeElements.push( chunk.shapes[i] );
									}
								}
							}
						}
					}
				}
			}
		}

		// Verifica se existe algum objeto na mesma linha do personagem
		if (xInRangeElements.length > 0) {
			let xClosestElement = null;
			// Caso o increase seja positivo
			if (xIncrease > 0) {
				// Será pego o elemento mais à esquerda
				for (let i = 0; i < xInRangeElements.length; i++) {
					if (xClosestElement == null) {
						xClosestElement = xInRangeElements[i].offsetLeft();
					} else if (xInRangeElements[i].offsetLeft() < xClosestElement) {
						xClosestElement = xInRangeElements[i].offsetLeft();
					}
				}
				// E será calculada a distância entre eles
				correction.x = xClosestElement - elem.offsetRight();
			} 
			// Caso o increase seja negativo
			else {
				// Será pego o elemento mais à direita
				for (let i = 0; i < xInRangeElements.length; i++) {
					if (xClosestElement == null) {
						xClosestElement = xInRangeElements[i].offsetRight();
					} else if (xInRangeElements[i].offsetRight() > xClosestElement) {
						xClosestElement = xInRangeElements[i].offsetRight();
					}
				}
				// E será calculada a distância entre eles
				correction.x = xClosestElement - elem.offsetLeft();
			}
		}

		for (let c = 4; c < chunks.length; c++) {
			let chunk = chunks[c];
			if (chunk.active) {
				if (yIncrease != 0) {
					for (let i = 0; i < chunk.shapes.length; i++) {
						// Caso o objeto esteja na mesma coluna da entidade (player)
						// if ( Utils.inRangeX(elem, 0, chunk.shapes[i]) ) {
						if ( Utils.inRangeX(elem, correction.x, chunk.shapes[i]) ) {
							// Se o incremento for positivo
							if ( yIncrease > 0 ) {	
								// Caso o objeto esteja abaixo
								if ( chunk.shapes[i].offsetTop() > elem.y ) {
									// Compare se o offsetTop é menor ou igual à distância com incremento
									if ( chunk.shapes[i].offsetTop() <= elem.offsetBottom() + yIncrease ) {
										// Coloca o objeto numa lista
										yInRangeElements.push( chunk.shapes[i] );
									}
								}
							}
							// Se o incremento for negativo
							if ( yIncrease < 0 ) {
								// Caso o objeto esteja acima
								if ( chunk.shapes[i].offsetBottom() <= elem.y ) {
									// Compare se o offsetBottom é maior ou igual à distância com incremento
									if ( chunk.shapes[i].offsetBottom() >= elem.offsetTop() + yIncrease ) {
										// Coloca o objeto numa lista
										yInRangeElements.push( chunk.shapes[i] );
									}
								}
							}
						}
					}
				}
			}
		}

		// Verifica se existe algum objeto na mesma coluna do personagem
		if (yInRangeElements.length > 0) {
			let yClosestElement = null;
			// Caso o increase seja positivo
			if (yIncrease > 0) {
				// Será pego o elemento mais alto
				for (let i = 0; i < yInRangeElements.length; i++) {
					if (yClosestElement == null) {
						yClosestElement = yInRangeElements[i].offsetTop();
					} else if (yInRangeElements[i].offsetTop() < yClosestElement) {
						yClosestElement = yInRangeElements[i].offsetTop();
					}
				}
				// E será calculada a distância entre eles
				correction.y = yClosestElement - elem.offsetBottom();
			// Caso o increase seja negativo
			} else {
				// Será pego o elemento mais baixo
				for (let i = 0; i < yInRangeElements.length; i++) {
					if (yClosestElement == null) {
						yClosestElement = yInRangeElements[i].offsetBottom();
					} else if (yInRangeElements[i].offsetBottom() > yClosestElement) {
						yClosestElement = yInRangeElements[i].offsetBottom();
					}
				}
				correction.y = yClosestElement - elem.offsetTop();
			}
		}
		return correction;
	},

	inRangeX(elem,  xIncrease, elem2) {
		let elemLeft = elem.offsetLeft() + xIncrease;
		let elemRight = elem.offsetRight() + xIncrease;
		if ( (elem2.offsetRight() > elemLeft && elem2.offsetLeft() < elemRight) ) {
			return true;
		}
		return false;
	},

	inRangeY(elem,  yIncrease, elem2) {
		let elemTop = elem.offsetTop() + yIncrease;
		let elemBottom = elem.offsetBottom() + yIncrease;
		if ( (elem2.offsetBottom() > elemTop  && elem2.offsetTop() < elemBottom) ) {
			return true;
		}
		return false;
	},

	showColisionBox(value) {
		container.elements[0].showColisionBox(value);
	},

	showChunkBorder(value) {
		container.elements[0].showChunkBorder(value);
	},
}

let Controls = {

	mode: "player",

	start() {
		window.addEventListener("keydown", (k) => {
			switch(Controls.mode.toLocaleLowerCase()) {
				case "menu": {}
				case "player": {
					Controls.playerControls(k);
				}
			} 
		});

		window.addEventListener("keyup", (k) => {
			switch(Controls.mode.toLocaleLowerCase()) {
				case "menu": {}
				case "player": {
					Controls.playerControls2(k);
				}
			} 
		});
	},

	playerControls(k) {
		if ( Utils.clockStarted ) {
			switch(k.key.toLowerCase()) {
				case "arrowup": {
					player.jump();
					break;
				}
				case "arrowdown": {
					if (!player.isJumping) {
						player.vSpeed = 20 ;
					}
					break;
				}
				case "arrowleft": {
					player.left();
					break;
				}
				case "arrowright": {
					player.right();
					break;
				}
				case "w": {
					player.jump();
					break;
				}
				case "a": {
					player.left();
					break;
				}
				case "d": {
					player.right();
					break;
				}
			}
		}
	},

	playerControls2(k) {
		switch(k.key.toLowerCase()) {
			case "arrowleft": {
				player.hSpeed = 0;
				break;
			}
			case "arrowright": {
				player.hSpeed = 0; 
				break;
			}
			case "arrowdown": {
				player.vSpeed = 0; 
				break;
			}
			case "a": {
				player.hSpeed = 0;
				break;
			}
			case "d": {
				player.hSpeed = 0; 
				break;
			}
		}
	}
}

Utils.loadMap("Jungle");
Utils.clockStart();
Controls.start();


// Raio
// setTimeout( () => {
// 	container.container.style.bgColor = "#ffffff";
// 	setTimeout( () => {
// 		container.container.style.bgColor = "#000000";
// 	}, 100);
// 	setTimeout( () => {
// 		container.container.style.bgColor = "#ffffff";
// 	}, 200);
// 	setTimeout( () => {
// 		container.container.style.bgColor = "#000000";
// 	}, 300);
// }, 1000)



// https://ourcodeworld.com/articles/read/1390/how-to-determine-the-screen-refresh-rate-in-hz-of-the-monitor-with-javascript-in-the-browser

