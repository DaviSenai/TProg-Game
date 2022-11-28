
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
        console.log(elem)
        console.log(xIncrease)
        console.log(yIncrease)
        console.log(chunk)
        for (let i = 0; i < chunk.shapes.length; i++) {
            if (this.inRange(elem, xIncrease, yIncrease, chunk[i])) {
                return true;
            }
        }
        return false;
    },

    inRange(elem, xIncrease, yIncrease, elem2) {
        let elemTop = elem.offsetTop() + yIncrease;
        let elemBottom = elem.offsetBottom() + yIncrease;
        let elemLeft = elem.offsetLeft() + xIncrease;
        let elemRight = elem.offsetRight() + xIncrease;
        
        if (elemTop >= elem2.offsetTop() && elemTop <= elem2.offsetBottom()) {
            if (elemLeft >= elem2.offsetLeft() && elemLeft <= elem2.offsetRight()) {
                return true;
            } else if (elemRight >= elem2.offsetLeft() && elemRight <= elem2.offsetRight()) {
                return true;
            }
        } else if (elemBottom >= elem2.offsetTop() && elemBottom <= elem2.offsetBottom()) {
            if (elemLeft >= elem2.offsetLeft() && elemLeft <= elem2.offsetRight()) {
                return true;
            } else if (elemRight >= elem2.offsetLeft() && elemRight <= elem2.offsetRight()) {
                return true;
            }
        }
        return false;
    }
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
                if (!player.onAnimation) {
                    player.hSpeed = -4;
                }
                break;
            }
            case "ArrowRight": {
                if (!player.onAnimation) {
                    player.hSpeed = 4;
                }
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
