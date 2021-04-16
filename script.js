// DOM Elements
const videoElement = document.getElementById('video');
const btnStart = document.getElementById('btn-start');

// Prompt to select media stream, pass to video element, then play

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log(error);
  }
}

btnStart.addEventListener('click', async () => {
  btnStart.disabled = true;
  await videoElement.requestPictureInPicture();
  btnStart.disabled = false;
});

// On Load
selectMediaStream();