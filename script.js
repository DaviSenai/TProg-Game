
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

const Utils = {

    loadMap(name) {
        switch (String(name).toLowerCase()) {
            case "jungle": {
                container.elements = [];
                container.elements.push(getJungleMap());
                break;
            }
            default: {
                console.log("%cMap \"" + name + "\" not found!", "background: #222; color: #ff4444; font-size: 24px; font-weight: bold;");
            }
        }
    },
    
    colisionVerify(elem, xIncrease, yIncrease, chunk) {
        for (let i = 0; i < chunk.shapes.length; i++) {
            if (this.inRange(elem, xIncrease, yIncrease, chunk.shapes[i])) {
                return this.remainingForce(elem, xIncrease, yIncrease, chunk.shapes[i]);
            }
        }
        return false;
    },

    inRange(elem, xIncrease, yIncrease, elem2) {
        let elemTop = elem.offsetTop() + yIncrease;
        let elemBottom = elem.offsetBottom() + yIncrease;
        let elemLeft = elem.offsetLeft() + xIncrease;
        let elemRight = elem.offsetRight() + xIncrease;
        
        if (elemTop > elem2.offsetTop() && elemTop < elem2.offsetBottom()) {
            if (elemLeft > elem2.offsetLeft() && elemLeft < elem2.offsetRight()) {
                return true; 
            } else if (elemRight > elem2.offsetLeft() && elemRight < elem2.offsetRight()) {
                return true;
            }
        } else if (elemBottom > elem2.offsetTop() && elemBottom < elem2.offsetBottom()) {
            if (elemLeft > elem2.offsetLeft() && elemLeft < elem2.offsetRight()) {
                return true;
            } else if (elemRight > elem2.offsetLeft() && elemRight < elem2.offsetRight()) {
                return true;
            }
        }
        return false;
    },

    showColisionBox() {
        container.elements[0].showColisionBox();
    },

    // Continuar e Separar um metodo para x e um para y
    // remainingForce(elem, xIncrease, yIncrease, elem2) {
    //     let remain = {x: 0, y: 0};
    //     if (xIncrease != 0) {
    //         if (elem.x < elem2.x) {
    //             remain.x = elem2.offsetLeft() - elem.offsetRight();
    //         } else {
    //             remain.x = elem.offsetLeft() - elem2.offsetRight();
    //         }
    //     }

    //     if (yIncrease != 0) {
    //         if (elem.y < elem2.y) {
    //             remain.y = elem2.offsetTop() - elem.offsetBottom();
    //         } else {
    //             remain.y = elem2.offsetBottom() - elem.offsetTop();
                
    //         }
    //     }
    //     return remain;
    // }


    // ***BUG***
    // Ao pular e andar para frente em baixo de um bloco o personagem pode teleportar para o canto do bloco conforme a ordem dos ifs abaixo 
    // Se inverter o if, ao encostar numa parede e pular e andar ao mesmo tempo, o personagem é teleportado ao topo
    // Se retirar o return de dentro do if, o bug acontece em ambas as situações
    remainingForce(elem, xIncrease, yIncrease, elem2) {
        let remain = {x: 0, y: 0};

        if (yIncrease != 0) {
            if (elem.y < elem2.y) {
                remain.y = elem.offsetBottom() - elem2.offsetTop();
            } else {
                remain.y = elem2.offsetBottom() - elem.offsetTop();   
            }
            return remain;
        }
        
        if (xIncrease != 0) {
            if (elem.x < elem2.x) {
                remain.x = elem.offsetRight() - elem2.offsetLeft();
            } else {
                remain.x = elem2.offsetRight() - elem.offsetLeft();
            }
            return remain;
        }
        
        return remain;
    },

    // xRemainingForce(elem, xIncrease, elem2) {
    //     if (xIncrease != 0) {
    //         if (elem.x < elem2.x) {
    //             return elem.offsetRight() - elem2.offsetLeft();
    //         } else {
    //             return elem2.offsetRight() - elem.offsetLeft();
    //         }
    //     }
    //     return 0;
    // },

    // yRemainingForce(elem, yIncrease, elem2) {
    //     if (yIncrease != 0) {
    //         if (elem.y < elem2.y) {
    //             return elem.offsetBottom() - elem2.offsetTop();
    //         } else {
    //             return elem2.offsetBottom() - elem.offsetTop();   
    //         }
    //     }        
    //     return 0;
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
                    player.vSpeed -= 100 ;
                }
                break;
            }
            case "ArrowLeft": {
                // if (!player.onAnimation) {
                    player.hSpeed = -4;
                // }
                break;
            }
            case "ArrowRight": {
                // if (!player.onAnimation) {
                    player.hSpeed = 4;
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
