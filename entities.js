
class Player extends Entity {

	constructor(x, y) {

		super(x - 72/2, y - 96/2, 72, 96);

		this.spriteParts_Left = [];
		this.spriteParts_Right = [];
		{
			this.spriteWalkLeft = [];
			this.spriteWalkRight = [];
			this.spriteJumpLeft = [];
			this.spriteJumpRight = [];
			for (let i = 1; i <= 8; i++) {
				this.spriteWalkLeft.push( new Img("./assets/entities/player/player" + i + "_left.png", this.x, this.y, this.style.width, this.style. height) );
				this.sprites.push( this.spriteWalkLeft[i] );
				this.spriteWalkRight.push( new Img("./assets/entities/player/player" + i + "_right.png", this.x, this.y, this.style.width, this.style. height) );
				this.sprites.push( this.spriteWalkRight[i] );
			}
			this.spriteParts_Left.push(this.spriteWalkLeft.splice(0, 4));
			this.spriteParts_Left.push(this.spriteWalkLeft);
			this.spriteParts_Right.push(this.spriteWalkRight.splice(0, 4));
			this.spriteParts_Right.push(this.spriteWalkRight);
			for (let i = 1; i <= 6; i++) {
				this.spriteJumpLeft.push( new Img("./assets/entities/player/playerjump" + i + "_left.png", this.x, this.y, this.style.width, this.style. height) );
				this.sprites.push( this.spriteJumpLeft[i] );
				this.spriteJumpRight.push( new Img("./assets/entities/player/playerjump" + i + "_right.png", this.x, this.y, this.style.width, this.style. height) );
				this.sprites.push( this.spriteJumpRight[i] );

			}
			this.spriteParts_Left.push(this.spriteJumpLeft);
			this.spriteParts_Right.push(this.spriteJumpRight);
		}
		
		this.animPart = 0;
		this.animSprite = 0;
		this.faceRight = true;
		this.isJumping = false;
		this.canJump = true;
		this.onAnimation = false;

		this.jumpSpeed = 500;
		this.jumpMoveDistance = 120;
		// this.jumpMoveDistance = 100;

		this.hMoveDistance = 150 / frameRate;
	}

	jump() {
		if (!this.isJumping && this.canJump) {
			this.vSpeed = -this.jumpSpeed;
		}
	}

	left() {
		this.hSpeed = -this.hMoveDistance;
	}

	right() {
		this.hSpeed = this.hMoveDistance;
	}

	hStop() {
		this.hSpeed = 0;
	}

	create() {
		if (this.faceRight) {
			this.spriteParts_Right[this.animPart][this.animSprite].create();
		} else {
			this.spriteParts_Left[this.animPart][this.animSprite].create();
		}

		if (this.vSpeed >= 0 && this.vSpeed + gravity <= fallSpeedLimit && !this.isJumping) {
			this.vSpeed += gravity;
		}

		
		this.anim();
	}

	anim() {
		if (this.hSpeed < 0) {
			this.faceRight = false;
		} else if (this.hSpeed > 0) {
			this.faceRight = true; 
		}
		//Jump
		if (this.vSpeed < 0) {
			if (!this.isJumping) {

				this.isJumping = true;
				this.animSprite = 0;

				let nTick = this.jumpMoveDistance * frameRate / this.jumpSpeed;
				for (let i = 0; i < nTick; i++) {
					setTimeout( () => {this.move(this.hSpeed, this.vSpeed / frameRate )}, 1000 / frameRate * i);
				}

				this.jump_next();
				setTimeout( () => {this.jump_next()}, .125 * 1000 / frameRate * nTick);
				setTimeout( () => {this.jump_next()}, .25 * 1000 / frameRate * nTick);
				setTimeout( () => {this.jump_next()}, .50 * 1000 / frameRate * nTick);
				setTimeout( () => {this.jump_next()}, .75 * 1000 / frameRate * nTick);
				setTimeout( () => {
					this.defaultSprite();
					this.vSpeed = gravity;
					this.isJumping = false;
				}, 400);
			}
			// Impede de executar 
			return;
		}
		// Fall
		else if (this.vSpeed > 0) {
			this.move(this.hSpeed, this.vSpeed);  
		}
		
		if (this.hSpeed != 0) {
			// Turn right/left
			if (!this.isJumping && !this.onAnimation) {
				this.onAnimation = true;
				this.animSprite = 0;
				this.walk_next()
				setTimeout( () => {if (!this.isJumping) this.walk_next()}, 100);
				setTimeout( () => {if (!this.isJumping) this.walk_next()}, 200);
				setTimeout( () => {
					if (!this.isJumping) {
						this.walk_next();
					}
					this.onAnimation = false;
				}, 300);
			}
			this.move(this.hSpeed, this.vSpeed);
		}
	}

	move(x, y) {
		for (let i = 4; i < container.elements[0].shapes.length; i++) {
			if (container.elements[0].shapes[i].active) {
				let correction = Utils.colisionVerify( player, x, y, container.elements[0].shapes[i]);
				if (correction != false) {
					x = correction.x;
					y = correction.y;
				}
			}
		}
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
			// this.animPart = 0;
			this.animSprite = 0;
		}
	}

	defaultSprite() {
		this.animPart = 0;
		this.animSprite = 0;
	}

	
}



