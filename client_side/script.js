//client side video streaming code

let myVideoStream;
const videoGrid = document.getElementById("video-grid");
const myVideo = document.createElement("video");
myVideo.muted = true;


//get the user video stream data
navigator.mediaDevices.getUserMedia({
    audio: true,
    video: true,
})
.then((stream) => {
    myVideoStream = stream;
    addVideoStream(myVideo, stream);
});

const addVideoStream = (video, stream) => {
    video.srcObject = stream;
    video.addEventListener("loadedmetadata", () => {
       video.play();
       videoGrid.append(video);
    });
};