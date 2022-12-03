
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D

// Canvas Configs
let cWidth = 1364;
let cHeight = 766;
let bgColor = "#000000";
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

const Utils = {

	loadMap(name) {
		switch (String(name).toLowerCase()) {
			case "jungle": {
				container.elements = [];
				container.elements.push(getJungleMap());
				break;
			}
			case "temple": {
				container.elements = [];
				container.elements.push(getTempleMap());
				break;
			}
			default: {
				console.log("%cMap \"" + name + "\" not found!", "background: #222; color: #ff4444; font-size: 24px; font-weight: bold;");
			}
		}
	},

	colisionVerify(elem, xIncrease, yIncrease, chunk) {
		let correction = {x: xIncrease, y: yIncrease};

		let xInRangeElements = [];
		let yInRangeElements = [];
		
		if (xIncrease != 0) {
			// Elementos da chunk
			for (let i = 0; i < chunk.shapes.length; i++) {
				// Caso o objeto esteja na mesma linha da entidade (player)
				if ( Utils.inRangeY(elem, yIncrease, chunk.shapes[i]) ) {
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
						if ( chunk.shapes[i].offsetRight() < elem.x ) {
							// Compare se o offsetRight é maior ou igual à distância com incremento
							if ( chunk.shapes[i].offsetRight() >= elem.offsetLeft() + xIncrease ) {
								// Coloca o objeto numa lista
								xInRangeElements.push( chunk.shapes[i] )
							}
						}
					}
				}
			}
			console.log("xInRangeElements: ")
			console.log(xInRangeElements)
		}

		if (yIncrease != 0) {
			for (let i = 0; i < chunk.shapes.length; i++) {
				// Caso o objeto esteja na mesma coluna da entidade (player)
				if ( Utils.inRangeX(elem, xIncrease, chunk.shapes[i]) ) {
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
					if ( xIncrease < 0 ) {
						// Caso o objeto esteja acima
						if ( chunk.shapes[i].offsetBottom() < elem.y ) {
							// Compare se o offsetBottom é maior ou igual à distância com incremento
							if ( chunk.shapes[i].offsetBottom() >= elem.offsetTop() + yIncrease ) {
								// Coloca o objeto numa lista
								yInRangeElements.push( chunk.shapes[i] )
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
				console.log("xCloseE: " + xClosestElement)
				console.log("elRight:" + elem.offsetRight())
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
				console.log("xCloseE: " + xClosestElement)
				console.log("elmLeft:" + elem.offsetLeft())
				// E será calculada a distância entre eles
				correction.x = xClosestElement - elem.offsetLeft();
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
		// console.log(correction)
		return correction;
	},

	// colisionVerify(elem, xIncrease, yIncrease, chunk) {
	// 	let correction = {x: xIncrease, y: yIncrease};

	// 	let xInRangeElements = [];
	// 	let yInRangeElements = [];
		
	// 	for (let i = 0; i < chunk.shapes.length; i++) {
	// 		// Elementos da chunk
	// 		if (xIncrease != 0) {
	// 			// Caso o objeto esteja na mesma linha da entidade (player)
	// 			if ( Utils.inRangeY(elem, yIncrease, chunk.shapes[i]) ) {
	// 				// Se o incremento for positivo
	// 				if ( xIncrease > 0 ) {	
	// 					// Caso o objeto esteja depois
	// 					if ( chunk.shapes[i].offsetLeft() > elem.x ) {
	// 						// Compare se o offsetLeft é menor ou igual à distância com incremento
	// 						if ( chunk.shapes[i].offsetLeft() <= elem.offsetRight() + xIncrease ) {
	// 							// Coloca o objeto numa lista
	// 							xInRangeElements.push( chunk.shapes[i] );
	// 						}
	// 					}
	// 				}
	// 				// Se o incremento for negativo
	// 				if ( xIncrease < 0 ) {
	// 					// Caso o objeto esteja antes
	// 					if ( chunk.shapes[i].offsetRight() < elem.x ) {
	// 						// Compare se o offsetRight é maior ou igual à distância com incremento
	// 						if ( chunk.shapes[i].offsetRight() >= elem.offsetLeft() + xIncrease ) {
	// 							// Coloca o objeto numa lista
	// 							xInRangeElements.push( chunk.shapes[i] )
	// 						}
	// 					}
	// 				}
	// 			}
	// 		}

	// 		if (yIncrease != 0) {
	// 			// Caso o objeto esteja na mesma coluna da entidade (player)
	// 			if ( Utils.inRangeX(elem, xIncrease, chunk.shapes[i]) ) {
	// 				// Se o incremento for positivo
	// 				if ( yIncrease > 0 ) {	
	// 					// Caso o objeto esteja abaixo
	// 					if ( chunk.shapes[i].offsetTop() > elem.y ) {
	// 						// Compare se o offsetTop é menor ou igual à distância com incremento
	// 						if ( chunk.shapes[i].offsetTop() <= elem.offsetBottom() + yIncrease ) {
	// 							// Coloca o objeto numa lista
	// 							yInRangeElements.push( chunk.shapes[i] );
	// 						}
	// 					}
	// 				}
	// 				// Se o incremento for negativo
	// 				if ( xIncrease < 0 ) {
	// 					// Caso o objeto esteja acima
	// 					if ( chunk.shapes[i].offsetBottom() < elem.y ) {
	// 						// Compare se o offsetBottom é maior ou igual à distância com incremento
	// 						if ( chunk.shapes[i].offsetBottom() >= elem.offsetTop() + yIncrease ) {
	// 							// Coloca o objeto numa lista
	// 							yInRangeElements.push( chunk.shapes[i] )
	// 						}
	// 					}
	// 				}
	// 			}
	// 		}
	// 	}
		
	// 	if (xInRangeElements.length > 0) {
	// 		let xClosestElement = null;
	// 		if (xIncrease > 0) {
	// 			for (let i = 0; i < xInRangeElements.length; i++) {
	// 				if (xClosestElement == null) {
	// 					xClosestElement = xInRangeElements[i].offsetLeft();
	// 				} else if (xInRangeElements[i].offsetLeft() < xClosestElement) {
	// 					xClosestElement = xInRangeElements[i].offsetLeft();
	// 				}
	// 			}
	// 			correction.x = xClosestElement - elem.offsetRight();
	// 		} else {
	// 			for (let i = 0; i < xInRangeElements.length; i++) {
	// 				if (xClosestElement == null) {
	// 					xClosestElement = xInRangeElements[i].offsetRight();
	// 				} else if (xInRangeElements[i].offsetRight() > xClosestElement) {
	// 					xClosestElement = xInRangeElements[i].offsetRight();
	// 				}
	// 			}
	// 			correction.x = xClosestElement - elem.offsetLeft();
	// 		}
	// 	}

	// 	if (yInRangeElements.length > 0) {
	// 		let yClosestElement = null;
	// 		if (yIncrease > 0) {
	// 			for (let i = 0; i < yInRangeElements.length; i++) {
	// 				if (yClosestElement == null) {
	// 					yClosestElement = yInRangeElements[i].offsetTop();
	// 				} else if (yInRangeElements[i].offsetTop() < yClosestElement) {
	// 					yClosestElement = yInRangeElements[i].offsetTop();
	// 				}
	// 			}
	// 			correction.y = yClosestElement - elem.offsetBottom();
	// 		} else {
	// 			for (let i = 0; i < yInRangeElements.length; i++) {
	// 				if (yClosestElement == null) {
	// 					yClosestElement = yInRangeElements[i].offsetBottom();
	// 				} else if (yInRangeElements[i].offsetBottom() > yClosestElement) {
	// 					yClosestElement = yInRangeElements[i].offsetBottom();
	// 				}
	// 			}
	// 			correction.y = yClosestElement - elem.offsetTop();
	// 		}
	// 	}
	// 	console.log(correction)
	// 	return correction;
	// },

	// inRangeX(elem,  xIncrease, elem2) {
	//	 let elemLeft = elem.offsetLeft() + xIncrease;
	//	 let elemRight = elem.offsetRight() + xIncrease;
	//	 if ( (elem2.offsetRight() >= elemLeft && elem2.offsetRight() <= elemRight) 
	//		 || (elem2.offsetLeft() <= elemRight  && elem2.offsetLeft() >= elemLeft) ) {
	//		 return true;
	//	 }
	//	 return false;
	// },

	// inRangeY(elem,  yIncrease, elem2) {
	//	 let elemTop = elem.offsetTop() + yIncrease;
	//	 let elemBottom = elem.offsetBottom() + yIncrease;
	//	 if ( (elem2.offsetBottom() >= elemTop && elem2.offsetBottom() <= elemBottom) 
	//		 || (elem2.offsetTop() <= elemBottom  && elem2.offsetTop() >= elemTop) ) {
	//		 return true;
	//	 }
	//	 return false;
	// },

	// inRangeX(elem,  xIncrease, elem2) {
	//	 let elemLeft = elem.offsetLeft() + xIncrease;
	//	 let elemRight = elem.offsetRight() + xIncrease;
	//	 if ( (elem2.offsetRight() >= elemLeft && elem2.offsetRight() <= elemRight) 
	//		 || (elem2.offsetLeft() <= elemRight  && elem2.offsetLeft() >= elemLeft) ) {
	//		 return true;
	//	 }
	//	 return false;
	// },

	// inRangeY(elem,  yIncrease, elem2) {
	//	 let elemTop = elem.offsetTop() + yIncrease;
	//	 let elemBottom = elem.offsetBottom() + yIncrease;
	//	 if ( (elem2.offsetBottom() <= elemTop && elem2.offsetBottom() >= elemBottom) 
	//		 || (elem2.offsetTop() >= elemBottom  && elem2.offsetTop() <= elemTop) ) {
	//		 return true;
	//	 }
	//	 return false;
	// },

	/*
		Adicionar no x e yInRange um ou dentro do if, caso a parte de cima do objeto seja menor que 
		a parte de baixo do player, e se a parte de baixo do objeto seja maior que a parte de cima do player
	*/

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

	// inRange(elem, xIncrease, yIncrease, elem2) {
	// 	let elemTop = elem.offsetTop() + yIncrease;
	// 	let elemBottom = elem.offsetBottom() + yIncrease;
	// 	let elemLeft = elem.offsetLeft() + xIncrease;
	// 	let elemRight = elem.offsetRight() + xIncrease;
		
	// 	if ( elemTop > elem2.offsetTop() && elemTop < elem2.offsetBottom() 
	// 		|| elemBottom > elem2.offsetTop() && elemBottom < elem2.offsetBottom() ) {

	// 		if ( elemLeft > elem2.offsetLeft() && elemLeft < elem2.offsetRight() 
	// 			|| elemRight > elem2.offsetLeft() && elemRight < elem2.offsetRight()) {
	// 			return Utils.axisCorrection(elem, xIncrease, yIncrease, elem2); 
	// 		}
	// 	}
	// 	return false;
	// },

	axisCorrection(elem, xIncrease, yIncrease, elem2) {
		let correction = {x: xIncrease, y: yIncrease};
		if (elem.offsetTop() >= elem2.offsetBottom() || elem.offsetBottom() <= elem2.offsetTop()) {
			correction.y = this.yRemainingForce(elem, elem2);
		} else if (elem.offsetLeft() >= elem2.offsetRight() || elem.offsetRight() <= elem2.offsetLeft()) {
			correction.x = this.xRemainingForce(elem, elem2);
		}
		return correction;
	},

	showColisionBox() {
		container.elements[0].showColisionBox();
	},



	xRemainingForce(elem, elem2) {
		if (elem.x < elem2.x) {
			return elem.offsetRight() - elem2.offsetLeft();
		} else {
			return elem2.offsetRight() - elem.offsetLeft();
		}
	},

	yRemainingForce(elem, elem2) {
		if (elem.y < elem2.y) {
			return elem2.offsetTop() - elem.offsetBottom();
		} else {
			return elem2.offsetBottom() - elem.offsetTop();   
		}
	},

	
	// colisionVerify(elem, xIncrease, yIncrease, chunk) {
	// 	let correction = {x: xIncrease, y: yIncrease};
	// 	for (let i = 0; i < chunk.shapes.length; i++) {
	// 		let correctionElem = Utils.inRange(elem, xIncrease, yIncrease, chunk.shapes[i]);
	// 		if (correctionElem != false) {
	// 			if (correctionElem.x != xIncrease)
	// 				correction.x = correctionElem.x;
	// 			if (correctionElem.y != yIncrease)
	// 				correction.y = correctionElem.y;
	// 		}
	// 	}
	// 	return correction;
	// },
	
	// colisionVerify(elem, xIncrease, yIncrease, chunk) {
	//	 for (let i = 0; i < chunk.shapes.length; i++) {
	//		 let correction = Utils.inRange(elem, xIncrease, yIncrease, chunk.shapes[i]);
	//		 if (correction != false) {
	//			 return correction;
	//		 }
	//	 }
	//	 return false;
	// },

	// inRange(elem, xIncrease, yIncrease, elem2) {
	//	 let elemTop = elem.offsetTop() + yIncrease;
	//	 let elemBottom = elem.offsetBottom() + yIncrease;
	//	 let elemLeft = elem.offsetLeft() + xIncrease;
	//	 let elemRight = elem.offsetRight() + xIncrease;
		
	//	 if (elemTop > elem2.offsetTop() && elemTop < elem2.offsetBottom()) {
	//		 if (elemLeft > elem2.offsetLeft() && elemLeft < elem2.offsetRight()) {
	//			 return true; 
	//		 } else if (elemRight > elem2.offsetLeft() && elemRight < elem2.offsetRight()) {
	//			 return true;
	//		 }
	//	 } else if (elemBottom > elem2.offsetTop() && elemBottom < elem2.offsetBottom()) {
	//		 if (elemLeft > elem2.offsetLeft() && elemLeft < elem2.offsetRight()) {
	//			 return true;
	//		 } else if (elemRight > elem2.offsetLeft() && elemRight < elem2.offsetRight()) {
	//			 return true;
	//		 }
	//	 }
	//	 return false;
	// },

	// Continuar e Separar um metodo para x e um para y
	// remainingForce(elem, xIncrease, yIncrease, elem2) {
	//	 let remain = {x: 0, y: 0};
	//	 if (xIncrease != 0) {
	//		 if (elem.x < elem2.x) {
	//			 remain.x = elem2.offsetLeft() - elem.offsetRight();
	//		 } else {
	//			 remain.x = elem.offsetLeft() - elem2.offsetRight();
	//		 }
	//	 }

	//	 if (yIncrease != 0) {
	//		 if (elem.y < elem2.y) {
	//			 remain.y = elem2.offsetTop() - elem.offsetBottom();
	//		 } else {
	//			 remain.y = elem2.offsetBottom() - elem.offsetTop();
				
	//		 }
	//	 }
	//	 return remain;
	// }


	// ***BUG***
	// Ao pular e andar para frente em baixo de um bloco o personagem pode teleportar para o canto do bloco conforme a ordem dos ifs abaixo 
	// Se inverter o if, ao encostar numa parede e pular e andar ao mesmo tempo, o personagem é teleportado ao topo
	// Se retirar o return de dentro do if, o bug acontece em ambas as situações
	// remainingForce(elem, xIncrease, yIncrease, elem2) {
	//	 let remain = {x: 0, y: 0};

	//	 if (yIncrease != 0) {
	//		 if (elem.y < elem2.y) {
	//			 remain.y = elem.offsetBottom() - elem2.offsetTop();
	//		 } else {
	//			 remain.y = elem2.offsetBottom() - elem.offsetTop();   
	//		 }
	//		 return remain;
	//	 }
		
	//	 if (xIncrease != 0) {
	//		 if (elem.x < elem2.x) {
	//			 remain.x = elem.offsetRight() - elem2.offsetLeft();
	//		 } else {
	//			 remain.x = elem2.offsetRight() - elem.offsetLeft();
	//		 }
	//		 return remain;
	//	 }
		
	//	 return remain;
	// },

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
		switch(k.key) {
			case "ArrowUp": {
				if (!player.isJumping) {
					this.isJumping = true;
					player.vSpeed = -225 ;
				}
				break;
			}
			case "ArrowDown": {
				if (!player.isJumping) {
					player.vSpeed = 20 ;
				}
				break;
			}
			case "ArrowLeft": {
				// if (!player.onAnimation) {
					player.hSpeed = -5;
				// }
				break;
			}
			case "ArrowRight": {
				// if (!player.onAnimation) {
					player.hSpeed = 5;
				// }
				break;
			}
		}
	},

	playerControls2(k) {
		switch(k.key) {
			case "ArrowLeft": {
				// player.hSpeed += 80; 
				player.hSpeed = 0; 
			}
			case "ArrowRight": {
				// player.hSpeed -= 80; 
				player.hSpeed = 0; 
			}
			case "ArrowDown": {
				// player.hSpeed -= 80; 
				player.vSpeed = 0; 
			}
		}
	}
}

Utils.loadMap("Jungle");

let player = new Player(cWidth/2-32, cHeight/2-24);
container.elements.push( player );
container.elements.push( getLifeBar() );

setInterval( () => {container.refresh();}, 1000/frameRate );

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
