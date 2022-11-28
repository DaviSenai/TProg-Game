
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
        this.onAnimation = false;

    }

    create() {
        if (this.faceRight) {
            this.spriteParts_Right[this.animPart][this.animSprite].create();
        } else {
            this.spriteParts_Left[this.animPart][this.animSprite].create();
        }
        this.anim();
    }

    anim() {
        if (this.hSpeed < 0) {
            this.faceRight = false;
        } else if (this.hSpeed > 0) {
            this.faceRight = true; 
        }
        if (this.vSpeed != 0) {
            if (this.vSpeed < 0 && !this.isJumping) {
                this.isJumping = true;
                this.animSprite = 0;
                this.jump_next();
                setTimeout( () => {this.jump_next()}, 50);
                setTimeout( () => {this.jump_next()}, 100);
                setTimeout( () => {
                    this.jump_next();
                    let nTick = 200 * frameRate / 1000;
                    for (let i = 0; i < nTick; i++) {
                        setTimeout( () => {this.move(this.hSpeed, this.vSpeed / nTick)}, 200 / nTick * i);
                    }
                }, 200);
                setTimeout( () => {this.jump_next()}, 300);
                setTimeout( () => {
                    this.jump_next();
                    this.vSpeed = 0;
                    this.isJumping = false;
                }, 400);
            }
        } else if (this.hSpeed != 0) {
            if (!this.isJumping && !this.onAnimation) {
                this.onAnimation = true;
                this.animSprite = 0;
                this.walk_next()
                setTimeout( () => {this.walk_next()}, 100);
                setTimeout( () => {this.walk_next()}, 200);
                setTimeout( () => {
                    this.walk_next();
                    this.onAnimation = false;
                }, 300);
            }
            this.move(this.hSpeed, this.vSpeed);
        }
    }

    move(x, y) {

        // for (let i = 4; i < container.elements[0].shapes.length; i++) {
        //     if (container.elements[0].shapes[i].active) {
        //         if (Utils.colisionVerify( player, x, y, container.elements[0].shapes[i]) ) {
        //             return;
        //         }
        //     }
        // }
        
        container.elements[0].move(-x, -y);
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



