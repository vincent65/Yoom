# Yoom

This is a video chat application made to learn about client-server connection endpoints, Express JS, and how to handle real-time audio and video. Express JS was used for the backend of this project as it is a lightweight framework that allowed me to quickly add views/pages to my application. PeerJS was used to handle the video and audio data. PeerJS allowed for easy integration as it takes the implementation of WebRTC and wraps it in a nice developer-friendly API. Socket io was used to handle the communiation between the client and the server as it provides real time birdirectional communication between the two. 

Currently, Yoom supports live video and audio streaming and has mute and hide camera functionality. Additionally, you can invite others to your rooms using the invite button. However, chatting functionality is still in progress.

### Dependencies:
* ExpressJS
* PeerJS
* Socket io
* nodemon

### How to run:
1. npm install
2. npm run
3. Go to your browser and type in localhost:3000
