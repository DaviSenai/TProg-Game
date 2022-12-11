
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

let player;

let visionFieldSize = 600;

const Game = {
	start() {
		player = new Player(cWidth/2, cHeight/2);
		Game.hideMenu();
		Game.showCanvas();
		Utils.loadMap("Jungle");
		Controls.start();
	},

	showMenu() {
		document.querySelector("#menu").style.visibility = "visible";
	},

	hideMenu() {
		document.querySelector("#menu").style.visibility = "hidden";
	},

	showModal() {
		document.querySelector("#modal").style.visibility = "visible";
	},

	hideModal() {
		document.querySelector("#modal").style.visibility = "hidden";
		document.querySelector("#modal").innerHTML = "";
	},

	showCanvas() {
		document.querySelector("#game").style.visibility = "visible";
	},

	hideCanvas() {
		document.querySelector("#game").style.visibility = "hidden";
	},

	showScore(){     
		document.querySelector("#modal").innerHTML = `
		<div id="flex-container-score">
			<div id="header-score">
				<button class="come-back score" onclick="Game.hideModal()">
					<img src="./assets/img/button-come-back.png" alt="voltar">
				</button>
			</div>
			<div class="flex-item-border" id="border-score">
				<div id="flex-container-table">
					<table>
						<caption id="score-subtitle">
							<p>SCORE</p>
						</caption>
						<thead>
							<tr>
								<th>POSIÇÃO</th>
								<th>JOGADOR</th>
								<th>TEMPO</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td class="posicao top3 top10">1</td>
								<td class="nome top3 top10">Ana</td>
								<td class="tempo top3 top10">00:30</td>
							</tr>
							<tr>
								<td class="posicao top3 top10">2</td>
								<td class="nome top3 top10">Ana</td>
								<td class="tempo top3 top10">00:30</td>
							</tr>
							<tr>
								<td class="posicao top3 top10">3</td>
								<td class="nome top3 top10">Ana</td>
								<td class="tempo top3 top10">00:30</td>
							</tr>
							<tr>
								<td class="posicao top10">4</td>
								<td class="nome top10">Ana</td>
								<td class="tempo top10">00:30</td>
							</tr>
							<tr>
								<td class="posicao top10">5</td>
								<td class="nome top10">Ana</td>
								<td class="tempo top10">00:30</td>
							</tr>
							<tr>
								<td class="posicao top10">6</td>
								<td class="nome top10">Ana</td>
								<td class="tempo top10">00:30</td>
							</tr>
							<tr>
								<td class="posicao top10">7</td>
								<td class="nome top10">Ana</td>
								<td class="tempo top10">00:30</td>
							</tr>
							<tr>
								<td class="posicao top10">8</td>
								<td class="nome top10">Ana</td>
								<td class="tempo top10">00:30</td>
							</tr>
							<tr>
								<td class="posicao top10">9</td>
								<td class="nome top10">Ana</td>
								<td class="tempo top10">00:30</td>
							</tr>
							<tr>
								<td class="posicao top10">10</td>
								<td class="nome top10">Ana</td>
								<td class="tempo top10">00:30</td>
							</tr>
							<tr>
								<td class="posicao">11</td>
								<td class="nome">Ana</td>
								<td class="tempo">00:30</td>
							</tr>
							<tr>
								<td class="posicao">12</td>
								<td class="nome">Ana</td>
								<td class="tempo">00:30</td>
							</tr>  
							<tr>
								<td class="posicao">13</td>
								<td class="nome">Ana</td>
								<td class="tempo">00:30</td>
							</tr>
							<tr>
								<td class="posicao">13</td>
								<td class="nome">Ana</td>
								<td class="tempo">00:30</td>
							</tr>
							<tr>
								<td class="posicao">13</td>
								<td class="nome">Ana</td>
								<td class="tempo">00:30</td>
							</tr>
							<tr>
								<td class="posicao">13</td>
								<td class="nome">Ana</td>
								<td class="tempo">00:30</td>
							</tr>
							<tr>
								<td class="posicao">13</td>
								<td class="nome">Ana</td>
								<td class="tempo">00:30</td>
							</tr>
							<tr>
								<td class="posicao">13</td>
								<td class="nome">Ana</td>
								<td class="tempo">00:30</td>
							</tr>
							<tr>
								<td class="posicao">13</td>
								<td class="nome">Ana</td>
								<td class="tempo">00:30</td>
							</tr>
							<tr>
								<td class="posicao">13</td>
								<td class="nome">Ana</td>
								<td class="tempo">00:30</td>
							</tr>
							<tr>
								<td class="posicao">15</td>
								<td class="nome">Ana</td>
								<td class="tempo">00:30</td>
							</tr>
							
						   
	
						</tbody>
					</table>
				</div>
			</div>
		</div>`

		Game.showModal();
	},

	showHowToPlay(){
		let cards = [
			`<div class="flex-item-border">
				<div class="flex-box-card">
					<div class="flex-item-image">
						<img src="./assets/img/wasd.png">
					</div>
					<div class="flex-item-explication">
						<p>UTILIZE ESSAS TECLAS PARA O PERSONAGEM:</p>
						<p>W PULAR</p>
						<p>A IR À ESQUERDA</p>
						<p>D IR À DIREITA</p>
					</div>
				</div>
			</div>`,
			`<div class="flex-item-border">
				<div class="flex-box-card">
					<div class="flex-item-image">
						<img src="./assets/img/arrow.png">
					</div>
					<div class="flex-item-explication">
						<p>OU UTILIZE ESSAS TECLAS:</p>
						<p>^ PULAR</p>
						<p>< IR À ESQUERDA</p>
						<p>> IR À DIREITA</p>
					</div>
				</div>
			</div>
			`,
			`<div class="flex-item-border">
				<div class="flex-box-card">
					<div class="flex-item-image">
						<img src="./assets/img/time.png">
					</div>
					<div class="flex-item-explication">
						<p>CUIDADO COM O TEMPO!</p>
						<P>ELE MARCA OS SEUS PONTOS</P>
					</div>
				</div>
			</div>
			`,
			`<div class="flex-item-border">
				<div class="flex-box-card">
					<div class="flex-item-image">
						<img src="./assets/img/snake.png">
					</div>
					<div class="flex-item-explication">
						<p>CUIDADO COM OS SEUS INIMIGOS!</p>
						<p>VOCÊ PERDE VIDA AO ENCOSTAR NELES</p>
					</div>
				</div>
			</div>
			`,
			` <div class="flex-item-border" id="border-relic">
				<div class="flex-box-card" id="relic">
					<div class="flex-item-image">
						<img src="./assets/img/pedra-deus-sol.png">
					</div>
					<div class="flex-item-explication">
						<p>ENCONTRE A RELÍQUIA!</p>
					</div>
				</div>
			</div>`
		];
	
		document.querySelector("#modal").innerHTML = `
		<div id="flex-container-como-jogar">
			<div class="header">
				<button class="come-back" onclick="Game.hideModal()">
					<img src="./assets/img/button-come-back.png" alt="voltar">
				</button>
				<div id="subtitle">
					<p>COMO JOGAR</p>
				</div>
			</div>
			<div id="flex-container-card">
			</div>    
		</div>
		`;

		Game.showModal();


		Game.writeCardDelay(cards);
	},

	writeCardDelay(cards) {
		if (cards != undefined) {
			if (cards.length > 0) {
				setTimeout( () => {
					document.querySelector("#modal #flex-container-card").innerHTML += cards[0];
					cards.shift();
					Game.writeCardDelay(cards);
				}, 500);
			}
		}
	}
}

const Utils = {

	clockId:0,
	clockStarted:false,

	loadMap(name) {
		switch (String(name).toLowerCase()) {
			case "jungle": {
				container.elements = [];
				let map = getJungleMap();
				// map.move(-cWidth, 300);
				container.elements.push( map );
				container.elements.push( new StaticGadgets() );
				Utils.clockStart();
				break;
			}
			
			case "temple": {
				container.elements = [];
				container.elements.push( getTempleMap() );
				container.elements.push( new StaticGadgets() );
				Utils.clockStart();
				break;
			}

			case "forest": {
				container.elements = [];
				let map = getForestMap();
				map.move(200, 100);
				container.elements.push( map );
				container.elements.push( new StaticGadgets() );
				Utils.clockStart();
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

