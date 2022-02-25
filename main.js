img = "";
noseY = 0;
noseX = 0;
marioX = 325;
marioY = 325;
GameStatus = "";

function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	mario_gameover = loadSound("gameover.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(650,400);
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded(){
	console.log("Model Loaded!");
}

function draw() {
	game()
	if(noseX < 300){
		marioX = marioX - 1
		image(img,marioX,marioY,40,70);
	}

	if(noseX > 300){
		marioX = marioX + 1;
	}

	if(noseY < 150){
		marioY = marioY -1
	}

	image(img,marioX,marioY,40,70);
}

function gotPoses(results){
	if(results.length > 0){
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.noseY
		
	}
}

function game(){
	console.log("noseX =" + noseX + "noseY = "+ noseY);

}

function startGame(){
	GameStatus = "start";
	document.getElementById("status").innerHTML = "Game Is Loading...";
}

