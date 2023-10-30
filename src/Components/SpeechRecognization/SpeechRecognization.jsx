import React from "react";
import "./Speech.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const SpeechRecognization = () => {
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return null;
  }
  return (
    <>
      <div className="container">
        <h2>Speech to text Converter</h2>
        <br />
        <p>A talk is a voyage with purpose and it must be charted.</p>
        <div className="main-content">{transcript}</div>
        <div className="btn-style">
          <button onClick={startListening}>Start Listening</button>
          <button onClick={SpeechRecognition.stopListening}>
            Stop Listening
          </button>
        </div>
      </div>
    </>
  );
};

export default SpeechRecognization;
