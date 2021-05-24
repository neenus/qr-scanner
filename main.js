window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Content Loaded");

  const video = document.querySelector("#video");
  // Check if device has a camera
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Use video without audio
    const constraints = {
      video: true,
      audio: false,
    };

    //   // Start video stream
    const startStream = async () => {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      video.srcObject = stream;
    };

    startStream();
  }
});
