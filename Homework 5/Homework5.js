const canvas = document.getElementById("CS110");
const context = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;
const maxWidth = 400;
const maxHeight = 300;

const background = new Image();
background.src = "http://posercontent.com/sites/default/files/products/140902/0512/martial-arts-do-for-poser-4.jpg";
const  goodGuyImg = new Image();
goodGuyImg.src = "http://getdrawings.com/image/ninja-cartoon-drawing-52.png";
const badGuyImg = new Image();
badGuyImg.src = "http://pluspng.com/img-png/cute-ninja-png-ninja-clipart-kid-4-800.png";

const intersect = function(rect1, rect2){
	const x = Math.max(rect1.x, rect2.x),
	num1 = Math.min(rect1.x + rect1.width, rect2.x + rect2.width),
	y = Math.max(rect1.y, rect2.y),
	num2 = Math.min(rect1.y + rect1.height, rect2.y + rect2.height);
	return (num1 >= x && num2 >= y);
}
const badGuy = function(x){
	return {
			x: x,
			y: 0,
			xDelta: -2 ,
			yDelta: 2 ,
			width: 80,
			height: 80,
			widthDelta: 10,
			heightDelta: 10,
			image: badGuyImg,
			changeWidth: true,
			newExists: false,
			draw: function() {
	            context.drawImage(this.image, this.x, this.y, this.width, this.height);
			},
			update: function() {
	            this.x += this.xDelta;
			    this.y += this.yDelta;
			    if(this.x+this.width >= canvas.width){
					this.xDelta = -2;
					if(this.changeWidth && this.width + this.widthDelta < maxWidth && this.height + this.heightDelta < maxHeight){
	                	this.width += this.widthDelta;
	                	this.height += this.heightDelta;
	                	this.changeWidth=false;
	                	setTimeout(function(){
	                		this.changeWidth=true;
	                	}.bind(this),200);
	                }
				}
				if(this.y+this.height >= canvas.height){
					this.yDelta = -2;
					if(this.changeWidth && this.width + this.widthDelta < maxWidth && this.height + this.heightDelta < maxHeight){
	                	this.width += this.widthDelta;
	                	this.height += this.heightDelta;
	                	this.changeWidth=false;
	                	setTimeout(function(){
	                		this.changeWidth=true;
	                	}.bind(this),200);
	                }
				}
			    if(this.x <= 0){
					this.xDelta = 2;
					if(this.changeWidth && this.width + this.widthDelta < maxWidth && this.height + this.heightDelta < maxHeight){
	                	this.width += this.widthDelta;
	                	this.height += this.heightDelta;
	                	this.changeWidth=false;
	                	setTimeout(function(){
	                		this.changeWidth=true;
	                	}.bind(this),200);
	                }
				}
			    if(this.y <= 0){
					this.yDelta = 2;
					if(this.changeWidth && this.width + this.widthDelta < maxWidth && this.height + this.heightDelta < maxHeight){
	                	this.width += this.widthDelta;
	                	this.height += this.heightDelta;
	                	this.changeWidth=false;
	                	setTimeout(function(){
	                		this.changeWidth=true;
	                	}.bind(this),200);
	                }
				}
			}
	}
};
const gameData = {
	hero: {
		x: 0 ,
		y: 333 ,
		xDelta: 0 ,
		yDelta: 0 ,
		width: 70,
		height: 70,
		image: goodGuyImg,
		draw: function() {
			context.drawImage(this.image, this.x, this.y, this.width, this.height);
		},
		update: function() {
			if((this.x>0 || this.xDelta>=0) && (this.x+this.width<canvas.width || this.xDelta<=0) && (this.y>0 || this.yDelta>=0) && (this.y+this.height<canvas.height || this.yDelta<=0)){
				this.x += this.xDelta;
				this.y += this.yDelta;
			}
			if(intersect(gameData.hero, gameData.badGuys[0])){
				alert("game over");
				error
			}
		}
	},
	badGuys: [
		badGuy(470)
	]
};
const leftKey = 37;
const upKey = 38;
const rightKey = 39;
const downKey = 40;
document.addEventListener('keydown', function(e) {
	if(e.keyCode === leftKey) {
	    gameData.hero.xDelta = -3;
  	}else if(e.keyCode === rightKey) {
        gameData.hero.xDelta = 3;
  	}else if(e.keyCode === upKey) {
        gameData.hero.yDelta = -3;
  	}else if(e.keyCode === downKey) {
        gameData.hero.yDelta = 3;
  	}
});
    document.addEventListener('keyup', function(e) {
        if(e.keyCode === rightKey || e.keyCode === leftKey) {
            gameData.hero.xDelta = 0;
        } else if(e.keyCode === upKey || e.keyCode === downKey) {
            gameData.hero.yDelta = 0;
        }
    });
const gaming = function(){
	context.drawImage(background, 0, 0, canvas.width, canvas.height);
	gameData.hero.draw();
	gameData.hero.update();
	gameData.badGuys[0].draw();
	gameData.badGuys[0].update();

	requestAnimationFrame(gaming);
};
gaming();