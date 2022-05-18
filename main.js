var left_wrist = 0;
var right_wrist = 0;
var nose_x = 0;
var nose_y = 0;
var difference = 0;

function setup(){
canvas=createCanvas(500,500);
canvas.position(760,150);
video=createCapture(VIDEO);
video.size(400,400)
// video.hide();
video.position(200,150)

poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotposes);
}

function draw(){
background("black");
// image(video,0,0,600,600)
document.getElementById("font_size").innerHTML="The size of the font is = "+difference+ " px " ;
fill("red");
stroke("#39ff14");
textSize(difference);
text('Pratham', nose_x, nose_y);
}

function modelLoaded(){
    console.log("Model Is Loaded");
}

function gotposes(result){
        if(result.length>0){
            console.log(result);
            nose_x=result[0].pose.nose.x;
            nose_y=result[0].pose.nose.y;
            console.log("nose x ="+nose_x + "and nose y ="+nose_y);

            left_wrist=result[0].pose.leftWrist.x;
            right_wrist=result[0].pose.rightWrist.y;
            console.log("left wrist = " + left_wrist + "and right wrist = " + right_wrist);
            difference=floor(right_wrist-left_wrist);
            console.log("the side of the font is" + difference);
        }

}