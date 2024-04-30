// import React, { useRef, useState } from "react";
// import * as tf from "@tensorflow/tfjs";
// import "@tensorflow/tfjs-backend-webgl"; // Optional: Use WebGL backend for GPU acceleration
// import { Button } from "react-bootstrap"; // Example: Using Bootstrap for UI components

// const IMAGE_HEIGHT = 128; // Update with your desired height
// const IMAGE_WIDTH = 128; // Update with your desired width

// export const PredictionsComponent = () => {
//   const videoRef = useRef(null);
//   const [prediction, setPrediction] = useState(null);

//   const predictAction = async () => {
//     const model = await tf.loadLayersModel("/path/to/your/model.json"); // Load the model
//     const video = videoRef.current;

//     const framesList = [];
//     const sequenceLength = 10; // Adjust based on your model's sequence length
//     const videoFramesCount = Math.floor(video.duration * video.framerate); // Get the number of frames in the video

//     // Calculate the interval after which frames will be added to the list
//     const skipFramesWindow = Math.max(
//       Math.floor(videoFramesCount / sequenceLength),
//       1
//     );

//     // Iterate over the video frames
//     for (let frameCounter = 0; frameCounter < sequenceLength; frameCounter++) {
//       // Set the current time of the video to get the frame
//       video.currentTime = (frameCounter * skipFramesWindow) / video.framerate;

//       // Capture the frame from the video
//       const canvas = document.createElement("canvas");
//       canvas.width = IMAGE_WIDTH;
//       canvas.height = IMAGE_HEIGHT;
//       const ctx = canvas.getContext("2d");
//       ctx.drawImage(video, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);
//       const frameData = ctx.getImageData(0, 0, IMAGE_WIDTH, IMAGE_HEIGHT).data;

//       // Normalize the frame data
//       const normalizedFrame = new Float32Array(frameData).map(
//         (pixel) => pixel / 255
//       );

//       // Reshape the normalized frame data to match the model's input shape
//       const reshapedFrame = normalizedFrame.reshape([
//         IMAGE_HEIGHT,
//         IMAGE_WIDTH,
//         4,
//       ]);

//       // Add the preprocessed frame to the frames list
//       framesList.push(reshapedFrame);
//     }

//     // Perform prediction using the loaded model
//     const predictions = model.predict(tf.tensor(framesList).expandDims(0));

//     // Process predictions as needed
//     const predictedClass = processPredictions(predictions);

//     // Update state with the prediction result
//     setPrediction(predictedClass);
//   };

//   return (
//     <div>
//       <video ref={videoRef} width="640" height="480" controls />
//       <Button onClick={predictAction}>Predict Action</Button>
//       {prediction && (
//         <div>
//           <p>Action Predicted: {prediction.className}</p>
//           <p>Confidence: {prediction.confidence}</p>
//         </div>
//       )}
//     </div>
//   );
// };
