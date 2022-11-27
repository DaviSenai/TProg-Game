
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D

// Canvas Configs
let cWidth = 1364;
let cHeight = 766;
let bgColor = "#cfeeff";
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
    
    getInRangeElement(arr, x, y) {
        for (let i = 0; i < arr.length; i++) {
            if (x >= arr[i].offsetLeft() + container.x && 
                x <= arr[i].offsetRight() + container.x && 
                y >= arr[i].offsetTop() + container.y && 
                y <= arr[i].offsetBottom() + container.y) {
                return i;
            }
        }
        return -1;
    }
}





Utils.loadMap("Jungle");


let player = new Player(cWidth/2-32, cHeight/2-24);
container.elements.push( player );


setInterval( () => {container.refresh();}, 1000/frameRate );

// setInterval( () => {player.walk_next()}, 100)


const Controls = {
    onAnimation:false,


}

window.addEventListener("keydown", (k) => {
    console.log(k.key)
    switch(k.key) {
        case "ArrowUp": {
            if (!player.isJumping) {
                player.anim(0, -80);
            }            
        }
    }

    
});


// https://ourcodeworld.com/articles/read/1390/how-to-determine-the-screen-refresh-rate-in-hz-of-the-monitor-with-javascript-in-the-browser
