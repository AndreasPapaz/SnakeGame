var s;
var scl = 20;
var old_touchX;
var old_touchY;
var food;


function setup() {
	createCanvas(windowWidth, windowHeight);
	// createCanvas(600, 600);

	if (mobileReady()) {
		setFrameRate(7);
	}
	else {
		setFrameRate(10);
	}

	s = new Snake();
	// s.update();
	pickLocation();

	if (Snake.x > (windowWidth / 2)) {
		Snake.set_dir(-1, 0);
	}
}

function mobileReady() {
	if (windowWidth < 750 && windowHeight < 450 || (windowWidth < 450 && windowHeight < 750)) {
		return true;
	}
	else {
		return false;
	}
}


function pickLocation() {
	var cols = floor(width/scl);
	var rows = floor(height/scl);
	food = createVector(floor(random(cols)), floor(random(rows)));
	food.mult(scl);
}

// TEST FUNCTION
// function mousePressed() {
// 	s.total++;
// }

function draw() {
	background(51); 
	// outline color
	// stroke('white');
	textStyle(NORMAL);
	textSize(18);
	text("SCORE : " + s.score, 30, 30);
	if (s.eat(food)) {
		pickLocation();
	}
	// s.death();
	s.update();
	// s.show();
	s.display();

	if (s.death()) {
		stroke("white");
		fill("white");
		textSize(24);
		text("GAME OVER!", windowWidth / 2, windowHeight / 2);
		noLoop();
	}

	fill(255, 0, 100);
	rect(food.x, food.y, scl, scl);
}


function keyPressed() {
    if ((keyCode === LEFT_ARROW && s.xspeed != 1 && s.snakeLength != 0) || (keyCode === LEFT_ARROW && snake.snakeLength == 0)) {
        s.dir(-1, 0);
    } else if ((keyCode === RIGHT_ARROW && s.xspeed != -1 && s.snakeLength != 0) || (keyCode === RIGHT_ARROW && snake.snakeLength == 0)) {
        s.dir(1, 0);
    } else if ((keyCode === UP_ARROW && s.yspeed != 1 && s.snakeLength != 0) || (keyCode === UP_ARROW && snake.snakeLength == 0)) {
        s.dir(0, -1);
    } else if ((keyCode === DOWN_ARROW && s.yspeed != -1 && s.snakeLength != 0) || (keyCode === DOWN_ARROW && snake.snakeLength == 0)) {
        s.dir(0, 1);
    }
    return false;
}

function touchStarted() {
	old_touchX = touchX;
	old_touchY = touchY;
	// return false;
}


// this disables the keys form moving the screen up and down with arrows
function touchMoved() {
	return false;
}

function touchEnded() {
	var x_diff = touchX - old_touchX;
	var y_diff = touchY - old_touchY;

	if (s.xspeed === 0) {
		if (x_diff > 40) {
			s.dir(1, 0);
		}
		else if (x_diff < -40) {
			s.dir(-1, 0);
		}
	}
	else if (s.yspeed === 0) {
		if (y_diff > 40) {
			s.dir(0, 1);
		}
		else if (y_dirr < -40) {
			s.dir(0, -1);
		}
	}
	return false;
}

















