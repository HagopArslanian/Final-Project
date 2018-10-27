const rand = function(num) {
  return Math.floor(Math.random() * num) + 1;
};
const colorArray = ["green", "red", "black", "orange", "blue", "purple"];
const canvas = document.getElementById("CS110");
const context = canvas.getContext("2d");
const createBoxes = function(count, canvaswidth, canvasheight) {
	canvas.width = canvaswidth;
    canvas.height = canvasheight;
	return boxes = [ {
		x: rand(470),
		y: rand(370),
		width: 30,
		height: 30,
		xDelta: 1,
		yDelta: 1,
		color: colorArray[rand(6) - 1],
		draw: function(){
			context.fillStyle = this.color;
			context.clearRect(0, 0, canvas.width, canvas.height);
			context.fillRect(this.x, this.y, this.width, this.height);
		},
		update: function(){
			this.x += this.xDelta;
			this.y += this.yDelta;
			if(this.x === 470){
				this.xDelta = -5;
				this.color = colorArray[rand(6) - 1];
			};
			if(this.y === 370){
				this.yDelta = -5;
				this.color = colorArray[rand(6) - 1];
			};
			if(this.x === 0){
				this.xDelta = 5;
				this.color = colorArray[rand(6) - 1];
			};
			if(this.y === 0){
				this.yDelta = 5;
				this.color = colorArray[rand(6) - 1];
			};
		}
	}, {
		x: rand(470),
		y: rand(370),
		width: 30,
		height: 30,
		xDelta: 1,
		yDelta: 1,
		color: colorArray[rand(6) - 1],
		draw: function(){
			context.fillStyle = this.color;
			context.fillRect(this.x, this.y, this.width, this.height);
		},
		update: function(){
			this.x += this.xDelta;
			this.y += this.yDelta;
			if(this.x === 470){
				this.xDelta = -5;
				this.color = colorArray[rand(6) - 1];
			};
			if(this.y === 370){
				this.yDelta = -5;
				this.color = colorArray[rand(6) - 1];
			};
			if(this.x === 0){
				this.xDelta = 5;
				this.color = colorArray[rand(6) - 1];
			};
			if(this.y === 0){
				this.yDelta = 5;
				this.color = colorArray[rand(6) - 1];
			};
		}
	}, {
		x: rand(470),
		y: rand(370),
		width: 30,
		height: 30,
		xDelta: 1,
		yDelta: 1,
		color: colorArray[rand(6) - 1],
		draw: function(){
			context.fillStyle = this.color;
			context.fillRect(this.x, this.y, this.width, this.height);
		},
		update: function(){
			this.x += this.xDelta;
			this.y += this.yDelta;
			if(this.x === 470){
				this.xDelta = -5;
				this.color = colorArray[rand(6) - 1];
			};
			if(this.y === 370){
				this.yDelta = -5;
				this.color = colorArray[rand(6) - 1];
			};
			if(this.x === 0){
				this.xDelta = 5;
				this.color = colorArray[rand(6) - 1];
			};
			if(this.y === 0){
				this.yDelta = 5;
				this.color = colorArray[rand(6) - 1];
			};
		}
	}];
};
createBoxes(null, 500, 400);
const loop = function(){
	boxes[0].draw();
	boxes[0].update();
	boxes[1].draw();
	boxes[1].update();
	boxes[2].draw();
	boxes[2].update();
	requestAnimationFrame(loop);
};
loop();