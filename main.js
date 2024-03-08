status="";
input="";
array=[];


function setup() {
    canvas=createCanvas(480,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide()
}

function start() {
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="status: detecting objects"
    input=document.getElementById("input").value;
    console.log("hi");
}

function modelLoaded() {
    console.log("modelLoaded");
    status=true;

}

function gotresult(error,results) {
if (error) {
console.log(error);
}
else {
    console.log(results);
    array=results;
}
}
function draw() {
    image(video,0,0,480,380);
    if (status=!"") {
        objectDetector.detect(video,gotresult);
        for(i=0; i<array.length; i++) {
            percent=floor(array[i].confidence*100);
            text(array[i].label+" "+percent+"%",array[i].x+15,array[i].y+15);
            noFill();
            stroke("red");
            rect(array[i].x,array[i].y,array[i].width,array[i].height);
           if (input==array[i].label) {
            variable_name_holds_webcamLiveView.stop()
            objectDetector.detect(gotresult);
           document.getElementById("status").innerHTML="status: object found"
           document.getElementById("object_detected").innerHTML="object "+ input+ "found"
           var utterThis = "object mentioned found";
            var synth = window.speechSynthesis;
            speak()
            
           
           
        } else {
            document.getElementById("object_detected").innerHTML="object "+ input+ " not found"
        }

    }

}
