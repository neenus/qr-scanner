window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Content Loaded");

  const video = document.querySelector("#video");
  // Check if device has a camera
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Use video without audio
    const constraints = {
      audio: false,
      video: {
        facingMode: "environment",
      },
    };

    //   // Start video stream
    const startStream = async () => {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      video.srcObject = stream;
    };

    startStream();

    // Create new barcode detector
    const barcodeDetector = new BarcodeDetector({ formats: ["qr_code"] });

    // Detect code function
    const detectCode = () => {
      // Start detecting code on the video element
      barcodeDetector
        .detect(video)
        .then((codes) => {
          if (codes.length === 0) return;

          for (const barcode of codes) {
            alert(barcode.rawValue);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    };

    setInterval(() => {
      detectCode();
    }, 1000);
  }
});
