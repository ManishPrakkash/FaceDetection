const video = document.getElementById('video'); video.classList.add('mirror');

function startVideo(){
    navigator.getUserMedia(
        {video: {}},
        stream => video.srcObject=stream,
        err=>console.error(err)
    )
}
startVideo()