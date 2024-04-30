import React, { useRef, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import {
  GesturesContainer,
  WebcamContainer,
  WebcamPreview,
  RecordButton
} from './Gestures.Styles';

const SEQUENCE_LENGTH = 20;
const CLASSES_LIST = ['close_the_door', 'how_are_you', 'nice_to_meet_you'];

export const Gestures = () => {
  const videoRef = useRef(null);
  const modelRef = useRef(null);
  const [isRecording, setIsRecording] = useState(false);

  // Function to load the model
// Function to load the model
const loadModel = async () => {
  try {
    // Load the model
    const model = await tf.loadLayersModel('../../../model/SignLingoModel.h5');
    modelRef.current = model;
    console.log('Model loaded successfully');
  } catch (error) {
    console.error('Error loading the model:', error.message);
  }
};


  // Function to start recording
  const startRecording = () => {
    setIsRecording(true);
    videoRef.current.srcObject = null;
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        const recorder = new MediaRecorder(stream);
        const recordedChunks = [];
        recorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            recordedChunks.push(event.data);
          }
        };
        recorder.onstop = () => {
          const recordedBlob = new Blob(recordedChunks, { type: 'video/webm' });
          const recordedUrl = URL.createObjectURL(recordedBlob);
          videoRef.current.src = recordedUrl;
          setIsRecording(false);
          processVideo(recordedBlob);
        };
        setTimeout(() => {
          recorder.stop();
        }, 4000);
        recorder.start();
      })
      .catch((error) => {
        console.error('Error accessing webcam:', error);
      });
  };

  // Function to process the recorded video
// Function to process the recorded video
const processVideo = async (recordedBlob) => {
  const video = document.createElement('video');
  video.src = URL.createObjectURL(recordedBlob);
  
  video.onloadedmetadata = async () => {
    console.log('Video metadata loaded');
    
    const frames = [];
    const totalDuration = 4; // 4 seconds, adjust as needed
    const interval = totalDuration / SEQUENCE_LENGTH;
    
    for (let i = 0; i < SEQUENCE_LENGTH; i++) {
      video.currentTime = i * interval;
      
      await new Promise((resolve) => {
        video.onseeked = () => {
          console.log('Video seeked:', video.currentTime);
          
          const canvas = document.createElement('canvas');
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          frames.push(canvas.toDataURL('image/jpeg'));
          resolve();
        };
      });
    }
    
    predictActions(frames);
  };
  
  video.onerror = (error) => {
    console.error('Error loading video:', error);
  };
};

  

  // Function to preprocess and predict actions on video frames
  const predictActions = async (frames) => {
    if (!modelRef.current) {
      console.error('Model not loaded.');
      return;
    }
    const processedFrames = frames.map((frame) => preprocessFrame(frame));
    const inputTensor = tf.stack(processedFrames).expandDims();
    const predictions = modelRef.current.predict(inputTensor);
    const predictedIndex = predictions.argMax(-1).dataSync()[0];
    const predictedClassName = CLASSES_LIST[predictedIndex];
    console.log('Predicted class:', predictedClassName);
  };

  // Function to preprocess a single video frame
  const preprocessFrame = (frame) => {
    const image = new Image();
    image.src = frame;
    const canvas = document.createElement('canvas');
    canvas.width = 200; // Define your IMAGE_WIDTH
    canvas.height = 200; // Define your IMAGE_HEIGHT
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const tensor = tf.browser.fromPixels(imageData).toFloat();
    return tensor.div(255);
  };

  return (
    <GesturesContainer>
      <WebcamContainer>
        <WebcamPreview autoPlay playsInline ref={videoRef} />
      </WebcamContainer>
      <RecordButton disabled={isRecording} onClick={startRecording}>
        {isRecording ? 'Recording...' : 'Record'}
      </RecordButton>
    </GesturesContainer>
  );
};
