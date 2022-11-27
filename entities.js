
class Player extends Entity {

    constructor(x, y) {

        super(x - 48/2, y - 64/2, 48, 64);

        this.spriteParts_Left = [];
        this.spriteParts_Right = [];
        {
            this.spriteWalkLeft = [];
            this.spriteWalkRight = [];
            this.spriteJumpLeft = [];
            this.spriteJumpRight = [];
            for (let i = 0; i < 8; i++) {
                this.spriteWalkLeft.push( new Img("./assets/entities/player/player" + (i+1) + "_left.png", this.x, this.y, this.style.width, this.style. height) );
                this.sprites.push( this.spriteWalkLeft[i] );
                this.spriteWalkRight.push( new Img("./assets/entities/player/player" + (i+1) + "_right.png", this.x, this.y, this.style.width, this.style. height) );
                this.sprites.push( this.spriteWalkRight[i] );

            }
            this.spriteParts_Left.push(this.spriteWalkLeft.splice(0, 4));
            this.spriteParts_Left.push(this.spriteWalkLeft);
            this.spriteParts_Right.push(this.spriteWalkRight.splice(0, 4));
            this.spriteParts_Right.push(this.spriteWalkRight);
            for (let i = 0; i < 6; i++) {
                this.spriteJumpLeft.push( new Img("./assets/entities/player/playerjump" + (i+1) + "_left.png", this.x, this.y, this.style.width, this.style. height) );
                this.sprites.push( this.spriteJumpLeft[i] );
                this.spriteJumpRight.push( new Img("./assets/entities/player/playerjump" + (i+1) + "_right.png", this.x, this.y, this.style.width, this.style. height) );
                this.sprites.push( this.spriteJumpRight[i] );

            }
            this.spriteParts_Left.push(this.spriteJumpLeft);
            this.spriteParts_Right.push(this.spriteJumpRight);
        }
        
        this.animPart = 0;
        this.animSprite = 0;
        this.faceRight = true;
        this.isJumping = false;
    }

    create() {
        if (this.faceRight) {
            this.spriteParts_Right[this.animPart][this.animSprite].create();
        } else {
            this.spriteParts_Left[this.animPart][this.animSprite].create();
        }
    }

    move(x, y) {
        container.elements[0].move(-x, -y);
    }

    anim(x, y) {
        if (y != 0) {
            if (y < 0) {
                player.isJumping = true
                // console.log("%cPlayer Jump Anim", "color: red;")
                setTimeout( () => {this.jump_next()}, 0);
                setTimeout( () => {this.jump_next()}, 50);
                setTimeout( () => {this.jump_next()}, 100);
                setTimeout( () => {this.jump_next()
                    let moveByTick = y / 20;
                    for (let i = 0; i < 20; i++) {
                        setTimeout( () => {this.move(0, moveByTick)}, 5*i);
                    }
                }, 200);
                setTimeout( () => {this.jump_next()}, 300);
                setTimeout( () => {
                    this.jump_next();
                    this.isJumping = false;
                }, 400);
            }
        } else if (x != 0) {

        }
        // if (this.animPart == 0) {

        // }
        return false;
    }

    walk_next() {        
        this.animSprite++;
        if (this.animSprite == 4) {
            this.animPart = this.animPart == 1 ? 0 : 1;
            this.animSprite = 0;
        }
    }

    jump_next() {
        this.animSprite++;
        this.animPart = 2;
        if (this.animSprite == 6) {
            this.animPart = 0;
            this.animSprite = 0;
        }
    }

    defaultSprite() {
        this.animPart = 0;
        this.animSprite = 0;
    }
    
}



