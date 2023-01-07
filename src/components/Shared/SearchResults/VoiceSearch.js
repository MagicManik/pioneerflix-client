import React from "react";

import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  voiceSearchOn,
  voiceSearchOff,
} from "../../../services/voiceSearchSlice";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const VoiceSearch = () => {
  const voiceSearch = useSelector((state) => state.voiceSearch.voice);
  const dispatch = useDispatch();
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  const navigateVoiceResultPage = useNavigate();
  //   console.log(voiceSearch);

  if (voiceSearch && transcript) {
    const voiceSearchedValue = transcript;
    navigateVoiceResultPage(`result/${voiceSearchedValue}`);
    setTimeout(() => {
      dispatch(voiceSearchOff());
    }, 1000);
  }

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <button
      onClick={() => {
        dispatch(voiceSearchOn());
      }}
    >
      {voiceSearch ? (
        <FaMicrophone
          className=" text-white text-xl mr-3"
          onClick={SpeechRecognition.stopListening}
        ></FaMicrophone>
      ) : (
        <FaMicrophoneSlash
          className=" text-white text-xl mr-3"
          onClick={SpeechRecognition.startListening}
        ></FaMicrophoneSlash>
      )}
    </button>
  );
};

export default VoiceSearch;
