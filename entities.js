
class Player extends Entity {

    constructor(x, y) {
        // super(x, y, 651, 488);
        super(x, y, 64, 48);

        this.spriteParts_Left = [];
        this.spriteParts_Right = [];
        {
            this.spriteLeft = [];
            this.spriteRight = [];
            for (let i = 0; i < 8; i++) {
                this.spriteLeft.push( new Img("./assets/entities/player/player" + (i+1) + "_left.png", this.x, this.y, this.style.width, this.style. height) );
                this.sprites.push( this.spriteLeft[i] );
                this.spriteRight.push( new Img("./assets/entities/player/player" + (i+1) + "_right.png", this.x, this.y, this.style.width, this.style. height) );
                this.sprites.push( this.spriteRight[i] );
            }
            this.spriteParts_Left.push(this.spriteLeft.splice(0, 4));
            this.spriteParts_Left.push(this.spriteLeft);
            this.spriteParts_Right.push(this.spriteRight.splice(0, 4));
            this.spriteParts_Right.push(this.spriteRight);
        }
        
        this.defaultImg = this.spriteLeft[0];
        this.animPart = 0;
        this.animSprite = 0;
        this.faceRight = true;

    }

    create() {
        this.next();
    }

    anim() {
        // if (this.animPart == 0) {

        // }
    }

    next() {
        console.log(this)
        
        this.animSprite++;
        if (this.animSprite == 4) {
            this.animPart = this.animPart == 1 ? 0 : 1;
            this.animSprite = 0;
        }
        
        if (this.faceRight) {
            this.spriteParts_Right[this.animPart][this.animSprite].create();
        } else {
            this.spriteParts_Left[this.animPart][this.animSprite].create();
        }
    }
    
}



