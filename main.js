m_X = 0
m_Y = 0

function preload() {
    mustache = loadImage("mustache.png");

}

function setup() {
    canvas = createCanvas(400, 400);
    video = createCapture(VIDEO);
    video.hide();
    canvas.center();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotResult);
}

function draw() {
    image(video, 0, 0, 400, 400);
    image(mustache, m_X, m_Y, 50, 50);
}

function modelLoaded() {
    console.log("Model Loaded!")
}

function gotResult(result) {
    if (result.length > 0) {
        console.log(result)
        m_X = result[0].pose.nose.x - 200;
        m_Y = result[0].pose.nose.y - 20;
    }

}

function take_snapshot() {
    save('filter.png');
}