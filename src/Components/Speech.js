import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import mic from "../Assets/mic.png";

const Speech = (handleSpeech) => {
  const {
    transcript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  const startListening = () => {
    SpeechRecognition.startListening();
  };
  handleSpeech(transcript);
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  return (
    <div className='h-18 w-18 rounded-full ml-4 bg-[rgb(255,255,255,0.15)] hover:bg-[rgb(255,255,255,0.3)] flex justify-center items-center'>
      <button onClick={startListening}><img src={mic} alt="mic" className="h-4" /></button>
      <p>{transcript}</p>
    </div>
  );
};
export default Speech;
