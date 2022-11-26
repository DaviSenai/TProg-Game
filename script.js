
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D

// Canvas Configs
let cWidth = 1364;
let cHeight = 766;
let bgColor = "#cfeeff";
// let bgColor = "#cfeeff";
let container = new Canvas("game-canvas", cWidth, cHeight, bgColor, "2d");

const Utils = {

    loadMap(name) {
        switch (String(name).toLowerCase()) {
            case "jungle": {
                container.elements = [];
                container.elements.push(getJungleMap());
                break;
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


container.refresh();


// https://ourcodeworld.com/articles/read/1390/how-to-determine-the-screen-refresh-rate-in-hz-of-the-monitor-with-javascript-in-the-browser
