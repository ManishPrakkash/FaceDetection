const video = document.getElementById('video'); video.classList.add('mirror');
//
Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
    faceapi.nets.faceExpressionNet.loadFromUri('/models')
]).then(startVideo);


//func to vid on web
function startVideo()
{
    navigator.getUserMedia(
        {video: {}},
        stream => video.srcObject=stream,
        err=>console.error(err)
    )
}

video.addEventListener('play',()=>{
    console.log('sfff')
});