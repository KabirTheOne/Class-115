left_eyeX = 0
left_eyeY = 0
right_eyeX = 0
right_eyeY = 0
crown_X = 0
crown_Y = 0

function preload() {
    Right = loadImage("right.png");
    Left = loadImage("left.png");
    Crown = loadImage("crown.png");

}

function setup() {
    canvas = createCanvas(600, 400);
    video = createCapture(VIDEO);
    video.hide();
    canvas.center();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotResult)
}

function draw() {
    image(video, 0, 0, 600, 400);
    image(Right, right_eyeX, right_eyeY, 30, 30);
    image(Left, left_eyeX, left_eyeY, 30, 30);
    image(Crown, crown_X, crown_Y, 250, 250);
}

function modelLoaded() {
    console.log("Model Loaded!")
}

function gotResult(result) {
    if (result.length > 0) {
        console.log(result)
        left_eyeX = result[0].pose.leftEye.x - 40;
        left_eyeY = result[0].pose.leftEye.y;
        right_eyeX = result[0].pose.rightEye.x - 40;
        right_eyeY = result[0].pose.rightEye.y;
        crown_X = result[0].pose.nose.x - 10;
        crown_Y = result[0].pose.nose.y - 250;

    }
}

function take_snapshot() {
    save('filter.png');
}