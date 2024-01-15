import React from 'react'
import close from "../Assets/close.png"
import mic from "../Assets/mic.png"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


function Speech({ onClose,update }) {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  function handleClose(){
    handlereset();
    onClose();
  }

  function handleSearch(){
    update(transcript);
    handleClose();
  }

  function handlereset(){
     resetTranscript();
  }

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  return (
    <div className='text-white h-[23rem] w-[29rem] fixed top-2 right-[40rem] bg-[#212121] z-50 flex flex-col'  onClick={(e) => {
      e.stopPropagation();
    }}>
      <div className='h-[16rem] flex w-full p-6 justify-between'>
      
      {transcript.length>0 ? <h1 className='text-xl pt-6 text-white'>{transcript}</h1> :  <></>}
      
       <div className='h-10 w-10 px-3 py-2 rounded-full hover:bg-[rgb(255,255,255,0.2)]'>
       <button onClick={handleClose} className='h-6 w-6'><img src={close} alt="cross-icon" /></button>
       </div>
       </div>

       <div  className={`flex flex-col justify-center items-center mt-${listening ? 32 : 2}`}>
       <img src={mic} alt="mic-img" className='h-6 w-6 m-4' onClick={SpeechRecognition.startListening}/>
       <span className='text-xs'>Click on mic to start</span>
       </div>
       <div className='flex justify-center m-4'>
       <button className='h-6 w-16 border-2 rounded-xl' onClick={handleSearch}>Search</button>
       </div>
    </div>
  )
}

export default Speech

